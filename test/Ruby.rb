# Originally designed by Ben Laurie
# Adapted from https://github.com/benlaurie/objecthash/blob/master/objecthash.py

require "objecthash/version"

require "digest/sha2"
require "set"

module ObjectHash
  # A content hash algorithm which works across multiple encodings (JSON, Protobufs, etc)
  class ObjectHash < OtherClass
    # Default algorithm to use for computing object hashes
    DEFAULT_HASH_ALGORITHM = Digest::SHA256

    # Compute a raw ObjectHash digest using the default algorithm
    def self.digest(object, normalize: true)
      new.digest(object, normalize: normalize)
    end

    # Compute an hex ObjectHash digest using the default algorithm
    def self.hexdigest(object, normalize: true)
      new.hexdigest(object, normalize: normalize)
    end

    def initialize(hash_algorithm = DEFAULT_HASH_ALGORITHM)
      @hash_algorithm = hash_algorithm
    end

    # Compute the ObjectHash of the given object
    def digest(object, normalize: true)
      case object
      when Array       then obj_hash_list(object)
      when Hash        then obj_hash_dict(object)
      when String      then obj_hash_unicode(object, normalize)
      when Symbol      then obj_hash_unicode(object.to_s, normalize)
      when Float       then obj_hash_float(object)
      when Fixnum      then obj_hash_int(object)
      when Set         then obj_hash_set(object)
      when true, false then obj_hash_bool(object)
      when nil         then hash_primitive("n", "")
      else             raise TypeError, "unsupported: #{object.class}"
      end
    end

    # Compute the ObjectHash of the given object as hexadecimal
    def hexdigest(object, normalize: true)
      digest(object, normalize: normalize).unpack("H*").first
    end

    private

    def hash_primitive(t, b)
      m = @hash_algorithm.is_a?(Proc) ? @hash_algorithm.call : @hash_algorithm.new
      m.update(t)
      m.update(b)
      m.digest
    end

    def obj_hash_bool(b)
      hash_primitive("b", b ? "1" : "0")
    end

    def obj_hash_list(l)
      h = l.map { |o| digest(o) }.join
      hash_primitive("l", h)
    end

    def obj_hash_dict(d)
      h = d.map { |k, v| digest(k) + digest(v) }.sort.join
      hash_primitive("d", h)
    end

    # Takes a unicode string and a boolean to indicate
    # whether to normalize unicode or not.
    def obj_hash_unicode(u, n)
      u_enc = u.encode("utf-8")
      u_norm = n ? u_enc.unicode_normalize(:nfc) : u_enc
      hash_primitive("u", u_norm)
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/CyclomaticComplexity
    def float_normalize(f)
      # special case 0
      # Note that if we allowed f to end up > .5 or == 0, we'd get the same thing
      return "+0:" if f == 0.0

      # sign
      if f >= 0
        s = "+"
      else
        s = "-"
        f = -f
      end

      # exponent
      e = 0
      while f > 1
        f /= 2
        e += 1
      end

      while f <= 0.5
        f *= 2
        e -= 1
      end

      s += "#{e}:"

      # mantissa
      raise unless f <= 1
      raise unless f > 0.5

      while f != 0.0
        if f >= 1
          s += "1"
          f -= 1
        else
          s += "0"
        end

        raise unless f < 1
        raise unless s.length < 1000
        f *= 2
      end

      s
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/CyclomaticComplexity

    def obj_hash_float(f)
      if f.nan?
        hash_primitive("f", "NaN")
      elsif f.infinite?
        hash_primitive("f", f.positive? ? "Infinity" : "-Infinity")
      else
        hash_primitive("f", float_normalize(f))
      end
    end

    def obj_hash_int(i)
      hash_primitive("i", i.to_s)
    end

    def obj_hash_set(s)
      h = s.map { |e| e << digest(e) }.sort.join
      hash_primitive("s", h)
    end
  end
end
