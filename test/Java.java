package org.links.objecthash;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

/**
 * TODO(phad): docs.
 */
public class ObjectHash implements Comparable<ObjectHash> {

    private static final int SHA256_BLOCK_SIZE = 32;
    private static final String SHA256 = "SHA-256";
    private static final Logger LOG = Logger.getLogger(ObjectHash.class.getName());

    protected byte[] hash;
    private MessageDigest digester;

    protected ObjectHash() throws NoSuchAlgorithmException {
        this.hash = new byte[SHA256_BLOCK_SIZE];
        this.digester = MessageDigest.getInstance(SHA256);
        list.stream().map(s -> s);
    }

    private static int parseHex(char digit) {
        assert ((digit >= '0' && digit <= '9') || (digit >= 'a' && digit <= 'f'));
        if (digit >= '0' && digit <= '9') {
            return digit - '0';
        } else {
            return 10 + digit - 'a';
        }
    }

    public static ObjectHash fromHex(String hex) throws NoSuchAlgorithmException {
        ObjectHash h = new ObjectHash();
        hex = hex.toLowerCase();
        if (hex.length() % 2 == 1) {
            hex = '0' + hex;
        }
        // TODO(phad): maybe just use Int.valueOf(s).intValue()
        int pos = SHA256_BLOCK_SIZE;
        for (int idx = hex.length(); idx > 0; idx -= 2) {
            h.hash[--pos] = (byte) (16 * parseHex(hex.charAt(idx - 2))
                    + parseHex(hex.charAt(idx - 1)));
        }
        return h;
    }

    public static ObjectHash fromBytes(byte[] hash) throws NoSuchAlgorithmException {
        ObjectHash h = new ObjectHash();
        h.hash = hash;
        return h;
    }

    private static JsonType getType(Object jsonObj) {
        if (jsonObj == JSONObject.NULL) {
            return JsonType.NULL;
        } else if (jsonObj instanceof JSONArray) {
            return JsonType.ARRAY;
        } else if (jsonObj instanceof JSONObject) {
            return JsonType.OBJECT;
        } else if (jsonObj instanceof String) {
            String val = (String) jsonObj;
            if (val.startsWith(Redacted.PREFIX)) {
                return JsonType.REDACTED;
            }
            return JsonType.STRING;
        } else if (jsonObj instanceof Integer) {
            return JsonType.INT;
        } else if (jsonObj instanceof Long) {
            return JsonType.LONG;
        } else if (jsonObj instanceof Double) {
            return JsonType.FLOAT;
        } else if (jsonObj instanceof Boolean) {
            return JsonType.BOOLEAN;
        } else {
            LOG.warning("jsonObj is_a " + jsonObj.getClass());
            return JsonType.UNKNOWN;
        }
    }

    public static ObjectHash pythonJsonHash(String json) throws NoSuchAlgorithmException, JSONException {
        ObjectHash h = new ObjectHash();
        h.hashAny(new JSONTokener(json).nextValue());
        return h;
    }

    private static String toHex(byte[] buffer) {
        StringBuffer hexString = new StringBuffer();
        for (int idx = 0; idx < buffer.length; ++idx) {
            String hex = Integer.toHexString(0xff & buffer[idx]);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    static String normalizeFloat(double f) {
        // Early out for zero.
        if (f == 0.0) {
            return "+0:";
        }
        StringBuffer sb = new StringBuffer();
        // Sign
        sb.append(f < 0.0 ? '-' : '+');
        if (f < 0.0) f = -f;
        // Exponent
        int e = 0;
        while (f > 1) {
            f /= 2;
            e += 1;
        }
        while (f < 0.5) {
            f *= 2;
            e -= 1;
        }
        sb.append(e);
        sb.append(':');
        // Mantissa
        if (f > 1 || f <= 0.5) {
            throw new IllegalStateException("wrong range for mantissa");
        }
        while (f != 0) {
            if (f >= 1) {
                sb.append('1');
                f -= 1;
            } else {
                sb.append('0');
            }
            if (f >= 1) {
                throw new IllegalStateException("oops, f is too big");
            }
            if (sb.length() > 1000) {
                throw new IllegalStateException("things have got out of hand");
            }
            f *= 2;
        }
        return sb.toString();
    }

    private void hashAny(Object obj) throws NoSuchAlgorithmException,
            JSONException {
        digester.reset();
        JsonType outerType = getType(obj);
        switch (outerType) {
            case ARRAY: {
                hashList((JSONArray) obj);
                break;
            }
            case OBJECT: {
                hashObject((JSONObject) obj);
                break;
            }
            case INT: {
                hashDouble(((Integer) obj).doubleValue());
                break;
            }
            case LONG: {
                hashDouble(((Long) obj).doubleValue());
                break;
            }
            case STRING: {
                hashString((String) obj);
                break;
            }
            case NULL: {
                hashNull();
                break;
            }
            case BOOLEAN: {
                hashBoolean((Boolean) obj);
                break;
            }
            case FLOAT: {
                hashDouble((Double) obj);
                break;
            }
            case REDACTED: {
                hash = Redacted.fromString((String) obj).hash();
                break;
            }
            default: {
                throw new IllegalArgumentException("Illegal type in JSON: "
                        + obj.getClass());
            }
        }

    }

    private void hashTaggedBytes(char tag, byte[] bytes) {
        digester.reset();
        digester.update((byte) tag);
        digester.update(bytes);
        hash = digester.digest();
    }

    private void hashString(String str) {
        hashTaggedBytes('u', str.getBytes());
    }

    private void hashInteger(Object value) {
        String str = value.toString();
        hashTaggedBytes('i', str.getBytes());
    }

    private void hashDouble(Double value) {
        String normalized = normalizeFloat(value);
        hashTaggedBytes('f', normalized.getBytes());
    }

    private void hashNull() {
        hashTaggedBytes('n', "".getBytes());
    }

    private void hashBoolean(boolean bool) {
        hashTaggedBytes('b', (bool ? "1" : "0").getBytes());
    }

    private void hashList(JSONArray list) throws NoSuchAlgorithmException,
            JSONException {
        digester.reset();
        digester.update((byte) ('l'));
        for (int n = 0; n < list.length(); ++n) {
            ObjectHash innerObject = new ObjectHash();
            innerObject.hashAny(list.get(n));
            digester.update(innerObject.hash());
        }
        hash = digester.digest();
    }

    private String debugString(Iterable<ByteBuffer> buffers) {
        StringBuilder sb = new StringBuilder();
        for (ByteBuffer buff : buffers) {
            sb.append('\n');
            sb.append(toHex(buff.array()));
        }
        return sb.toString();
    }

    private void hashObject(JSONObject obj) throws NoSuchAlgorithmException,
            JSONException {
        List<ByteBuffer> buffers = new ArrayList<>();
        Comparator<ByteBuffer> ordering = new Comparator<ByteBuffer>() {
            @Override
            public int compare(ByteBuffer left, ByteBuffer right) {
                return toHex(left.array()).compareTo(toHex(right.array()));
            }
        };
        Iterator keys = obj.keys();
        while (keys.hasNext()) {
            ByteBuffer buff = ByteBuffer.allocate(2 * SHA256_BLOCK_SIZE);
            String key = (String) keys.next();
            // TODO(phad): would be nice to chain all these calls builder-stylee.
            ObjectHash hKey = new ObjectHash();
            hKey.hashString(key);
            ObjectHash hVal = new ObjectHash();
            hVal.hashAny(obj.get(key));
            buff.put(hKey.hash());
            buff.put(hVal.hash());
            buffers.add(buff);
        }
        buffers.sort(ordering);
        digester.reset();
        digester.update((byte) 'd');
        for (ByteBuffer buff : buffers) {
            digester.update(buff.array());
        }
        hash = digester.digest();
    }

    @Override
    public String toString() {
        return this.toHex();
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) return true;
        if (other == null) return false;
        if (this.getClass() != other.getClass()) return false;
        return this.toHex().equals(((ObjectHash) other).toHex());
    }

    @Override
    public int compareTo(ObjectHash other) {
        return toHex().compareTo(other.toHex());
    }

    public byte[] hash() {
        return hash;
    }

    public String toHex() {
        return toHex(hash);
    }

    private enum JsonType {
        BOOLEAN,
        ARRAY,
        OBJECT,
        INT,
        LONG,
        FLOAT,
        STRING,
        NULL,
        UNKNOWN,
        REDACTED,;
    }
}
