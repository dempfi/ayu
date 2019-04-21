#include <assert.h>
#include <json-c/json.h>
#include <inttypes.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "unicode/utypes.h"
#include "unicode/localpointer.h"
#include "unicode/uset.h"
#include "unicode/unorm2.h"
#include "unicode/ustring.h"

#include "objecthash.h"

struct student
{
    char name[50];
    int roll;
    float marks;
} s;

bool object_hash(/*const*/ json_object *j, byte hash[HASH_SIZE]);

static void hash_update(hash_ctx * const c, const byte * const b,
                        const size_t l) {
  SHA256_Update(c, b, l);
}

static void hash_init(hash_ctx * const c, const byte t) {
  SHA256_Init(c);

  byte b[1];
  b[0] = t;
  hash_update(c, b, 1);
}

static void hash_final(hash_ctx * const c, hash h) {
  SHA256_Final(h, c);
}

static void hash_bytes(const byte t, const byte * const b, const size_t l,
                       hash hash) {
  hash_ctx ctx;
  hash_init(&ctx, t);
  hash_update(&ctx, b, l);
  hash_final(&ctx, hash);
}

static int dict_comp(const void *a, const void *b) {
  // note that this should always terminate in < sizeof(hash) anyway
  return memcmp(a, b, 2 * sizeof(hash));
}

static bool object_hash_str(const char *str, size_t len, byte hash[HASH_SIZE]) {
  hash_bytes('u', (const byte *)str, len, hash);
  return true;
}

static bool object_hash_bool(bool b, hash h) {
  hash_bytes('b', (byte *)(b ? "1" : "0"), 1, h);
  return true;
}

static bool object_hash_dict(/*const*/ json_object * const d, hash h) {
  // FIXME: there may be a better way
  size_t len = 0;
  {
    json_object_object_foreach(d, key, val) {
      ++len;
      // key and val are unused, but we don't want the compiler to complain.
      (void)key;
      (void)val;
    }
  }
  byte *hashes = malloc(2 * len * sizeof(hash));

  size_t n = 0;
  json_object_object_foreach(d, key, val) {
    object_hash_str(key, strlen(key), &hashes[2 * n * sizeof(hash)]);
    object_hash(val, &hashes[(2 * n + 1) * sizeof(hash)]);
    ++n;
  }

  qsort(hashes, len, 2 * sizeof(hash), dict_comp);
  hash_bytes('d', hashes, 2 * len * sizeof(hash), h);

  free(hashes);

  return true;
}

static bool object_hash_int(int64_t i, hash h) {
  char buf[100];

  sprintf(buf, "%" PRId64, i);
  hash_bytes('i', (byte *)buf, strlen(buf), h);
  return true;
}

static void float_normalize(double f, char out[1000]) {
  const char * const base = out;

  // special case 0
  // Note that if we allowed f to end up > .5 or == 0, we'd get the same thing
  if (f == 0.0) {
    strcpy(out, "+0:");
    return;
  }

  // sign
  *out = '+';
  if (f < 0) {
    *out = '-';
    f = -f;
  }
  ++out;

  // exponent
  int e = 0;
  while (f > 1) {
    f /= 2;
    e += 1;
  }
  while (f <= .5) {
    f *= 2;
    e -= 1;
  }
  out += sprintf(out, "%d:", e);

  // mantissa
  assert(f <= 1);
  assert(f > .5);
  while (f != 0) {
    if (f >= 1) {
      *out++ = '1';
      f -= 1;
    } else {
      *out++ = '0';
    }
    assert (f < 1);
    assert (out - base < 1000);
    f *= 2;
  }

  *out = '\0';
}

static bool object_hash_float(const double d, hash h) {
  char buf[1000];

  float_normalize(d, buf);
  hash_bytes('f', (byte *)buf, strlen(buf), h);
  return true;
}

static bool object_hash_list(json_object *l, hash h) {
  hash_ctx ctx;
  hash_init(&ctx, 'l');

  int len = json_object_array_length(l);
  for (int n = 0; n < len; ++n) {
    byte ihash[HASH_SIZE];
    if (!object_hash(json_object_array_get_idx(l, n), ihash))
      return false;
    hash_update(&ctx, ihash, sizeof ihash);
  }

  hash_final(&ctx, h);
  return true;
}

bool object_hash(/*const*/ json_object *j, byte hash[HASH_SIZE]) {
  enum json_type type;
  type = json_object_get_type(j);
  switch (type) {
  case json_type_boolean:
    return object_hash_bool(json_object_get_boolean(j), hash);
  case json_type_double:
    return object_hash_float(json_object_get_double(j), hash);
  case json_type_int:
    return object_hash_int(json_object_get_int64(j), hash);
  case json_type_string: {
    const char *s = json_object_get_string(j);
    return object_hash_str(s, strlen(s), hash);
  }
  case json_type_object:
    return object_hash_dict(j, hash);
  case json_type_array:
    return object_hash_list(j, hash);
  case json_type_null:
    hash_bytes('n', NULL, 0, hash);
    return true;
  default:
    break;
  }
  printf("unknown type = %d\n", type);
  assert(false);
  return false;
}

bool python_json_hash(const char * const json, hash hash) {
    json_object * const j = json_tokener_parse(json);
    return object_hash(j, hash);
}

typedef json_object *leaf_fn(json_object *j);

static json_object *apply_to_leaves(json_object *j, leaf_fn *fn) {
  enum json_type type;
  type = json_object_get_type(j);
  switch (type) {
  case json_type_boolean:
  case json_type_double:
  case json_type_int:
  case json_type_null:
  case json_type_string:
    return fn(j);
  case json_type_object: {
    json_object *r = json_object_new_object();
    json_object_object_foreach(j, key, val) {
      json_object *k = json_object_new_string(key);
      json_object *kk = fn(k);
      json_object_put(k);
      const char *kkk = json_object_get_string(kk);
      json_object_object_add(r, kkk, apply_to_leaves(val, fn));
      json_object_put(kk);
    }
    return r;
  }
  case json_type_array: {
    json_object *r = json_object_new_array();
    for (int n = 0; n < json_object_array_length(j); ++n) {
      json_object_array_add(r, apply_to_leaves(json_object_array_get_idx(j, n),
					       fn));
    }
    return r;
  }
  }
  printf("type = %d\n", type);
  assert(false);
  return NULL;
}

static json_object *commonize_int(json_object *j) {
  if (json_object_get_type(j) == json_type_int)
    return json_object_new_double(json_object_get_int64(j));
  return json_object_get(j);
}

json_object *commonize(json_object *j) {
  return apply_to_leaves(j, commonize_int);
}

bool common_json_hash(const char * const json, hash hash) {
  json_object * const j = json_tokener_parse(json);
  return object_hash(commonize(j), hash);
}

static json_object *unicode_normalize_string(json_object *j) {
  if (json_object_get_type(j) == json_type_string) {
    const char *s = json_object_get_string(j);
    UErrorCode err;
    const UNormalizer2 *un = unorm2_getNFCInstance(&err);
    assert(un);
    assert(!err);

    int32_t length;
    u_strFromUTF8(NULL, 0, &length, s, strlen(s), &err);
    assert(!err);

    UChar *us = malloc(length * sizeof(UChar));
    int32_t uslength;
    u_strFromUTF8(us, length, &uslength, s, strlen(s), &err);
    assert(!err);

    // FIXME: surely we can find out how long the result will be?
    UChar *usn = malloc(uslength * 10 * sizeof(UChar));
    int32_t usnlength = unorm2_normalize(un, us, uslength, usn, 10 * uslength,
                                       &err);
    assert(!err);
    assert(usnlength <= uslength * 10);

    int32_t n8length;
    u_strToUTF8(NULL, 0, &n8length, usn, usnlength, &err);
    assert(!err);

    char *n8 = malloc(n8length);
    u_strToUTF8(n8, n8length, &n8length, usn, usnlength, &err);
    assert(!err);

    free(n8);
    free(usn);
    free(us);

    return json_object_new_string(n8);
  }
  return json_object_get(j);
}

json_object *unicode_normalize(json_object *j) {
  return apply_to_leaves(j, unicode_normalize_string);
}
