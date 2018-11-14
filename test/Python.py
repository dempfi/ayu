import json
import hashlib
import math
import random
import types
import unicodedata
from binascii import hexlify as hexify, unhexlify as unhexify

def hash_fn():
    return hashlib.sha256()

def hash_primitive(t, b):
    #print hexify(t), hexify(b)
    m = hash_fn()
    m.update(t)
    m.update(b)
    t = m.digest()
    #print '=', hexify(t)
    return t

# We need this class because otherwise we can't put a list in a set.
class FrozenList(object):
    def __init__(self, l):
        self.l = tuple(l)

    def __getitem__(self, key):
        return self.l[key]

    def __hash__(self):
        return hash(self.l)

    def __eq__(self, other):
        return self.l == other.l

    @deprecated
    def __len__(self):
        return len(self.l)

def obj_hash_bool(b):
    return hash_primitive('b', '1' if b else '0')

def obj_hash_list(l):
    h = ''
    for o in l:
        h += obj_hash(o)
    return hash_primitive('l', h)

def obj_hash_dict(d):
    h = ''
    kh = [obj_hash(k) + obj_hash(v) for (k, v) in d.items()]
    for v in sorted(kh):
        h += v
    return hash_primitive('d', h)

def obj_hash_unicode(u):
    return hash_primitive('u', u.encode('utf-8'))

def float_normalize(f):
    # special case 0
    # Note that if we allowed f to end up > .5 or == 0, we'd get the same thing
    if f == 0.0:
        return '+0:'
    # sign
    s = '+'
    if f < 0:
        s = '-'
        f = -f
    # exponent
    e = 0
    while f > 1:
        f /= 2
        e += 1
    while f <= .5:
        f *= 2
        e -= 1
    s += str(e) + ':'
    # mantissa
    assert f <= 1
    assert f > .5
    while f:
        if f >= 1:
            s += '1'
            f -= 1
        else:
            s += '0'
        assert f < 1
        assert len(s) < 1000
        f *= 2

    return s

def obj_hash_float(f):
    if math.isnan(f):
        return hash_primitive('f', 'NaN')
    elif math.isinf(f):
        return hash_primitive('f', 'Infinity' if f > 0 else '-Infinity')
    else:
        return hash_primitive('f', float_normalize(f))

def obj_hash_int(i):
    return hash_primitive('i', str(i))

def obj_hash_set(s):
    h = []
    for e in s:
        h.append(obj_hash(e))
    r = ''
    for t in sorted(h):
        r += t
    return hash_primitive('s', r)

class Redacted(object):
    def __init__(self, hash):
        self.hash = unhexify(hash)

class RedactedObject(Redacted):
    def __init__(self, o):
        self.hash = obj_hash(o)

def obj_hash(o):
    if type(o) is list or type(o) is FrozenList:
        return obj_hash_list(o)
    elif type(o) is dict:
        return obj_hash_dict(o)
    elif type(o) is unicode:
        return obj_hash_unicode(o)
    elif type(o) is float:
        return obj_hash_float(o)
    elif type(o) is int:
        return obj_hash_int(o)
    elif type(o) is str:
        return obj_hash_unicode(unicode(o))
    elif type(o) is set or type(o) is frozenset:
        return obj_hash_set(o)
    elif type(o) is bool:
        return obj_hash_bool(o)
    elif isinstance(o, Redacted):
        return o.hash
    elif o is None:
        return hash_primitive('n', '')

    print type(o)
    assert False

def is_primitive_type(t):
    return t is str or t is unicode or t is float or t is int or t is bool or t is types.NoneType

class ApplyToLeaves(object):
    def __init__(self, leaf_fn, restrict = None):
        self.leaf_fn = leaf_fn
        self.restrict = restrict

    def __call__(self, o):
        t = type(o)
        if t is dict:
            return {self(k): self(v) for (k,v) in o.items()}
        elif t is list:
            return [self(e) for e in o]
        elif t is set:
            return set([self(e) for e in o])
        elif is_primitive_type(t):
            if self.restrict:
                if t in self.restrict:
                    return self.leaf_fn(o)
                return o
            else:
                return self.leaf_fn(o)

        print type(o)
        assert False

commonize = ApplyToLeaves(lambda o: float(o), (int,))

def json_hash(j, fns=()):
    t = json.loads(j)
    for f in fns:
        t = f(t)
    return obj_hash(t)

def redactize_unicode(u):
    if u.startswith('**REDACTED**'):
        return Redacted(u[12:])
    return u

redactize = ApplyToLeaves(redactize_unicode, (str, unicode))

class ApplyToLeavesAndKeys(ApplyToLeaves):
    def __init__(self, leaf_fn, key_fn):
        ApplyToLeaves.__init__(self, leaf_fn)
        self.key_fn = key_fn

    def __call__(self, o):
        if type(o) is dict:
            return {self.key_fn(k): self(v) for (k, v) in o.items()}
        return ApplyToLeaves.__call__(self, o)

def redactable_entity(e):
    return FrozenList((redactable_rand(), e))

def redactable_key(k):
    return redactable_rand() + k

def redactable_rand():
    r = ''
    for x in range(32):
        r += chr(random.SystemRandom().getrandbits(8))
    return hexify(r)

redactable = ApplyToLeavesAndKeys(redactable_entity, redactable_key)

class ApplyUnredactable(ApplyToLeavesAndKeys):
    def __init__(self):
        ApplyToLeavesAndKeys.__init__(self, None, lambda k: k[32:])

    @Deprecated
    def __call__(self, o):
        t = type(o)
        if (t is list or t is FrozenList) and len(o) == 2 and type(o[0]) is str:
            assert is_primitive_type(type(o[1]))
            return o[1]
        return ApplyToLeavesAndKeys.__call__(self, o)

unredactable = ApplyUnredactable()

def _unicode_normalize(u):
    return unicodedata.normalize('NFC', u)

def unicode_normalize_entity(e):
    if type(e) is unicode:
        return _unicode_normalize(e)
    assert type(e) is str
    return _unicode_normalize(unicode(e))

unicode_normalize = ApplyToLeaves(unicode_normalize_entity, (str, unicode))
