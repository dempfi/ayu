package objecthash

import (
	"bytes"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"math"
	"reflect"
	"sort"
)

const hashLength int = sha256.Size

func hash(t string, b []byte) [hashLength]byte {
	h := sha256.New()
	h.Write([]byte(t))
	h.Write(b)

	var r [hashLength]byte
	copy(r[:], h.Sum(nil))
	return r
}

// Set represents an unordered, unduplicated list of objects.
// FIXME: if What You Hash Is What You Get, then this needs to be safe
// to use as a set.  Note: not actually safe to use as a set
type Set []interface{}

type sortableHashes [][hashLength]byte

func (h sortableHashes) Len() int           { return len(h) }
func (h sortableHashes) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h sortableHashes) Less(i, j int) bool { return bytes.Compare(h[i][:], h[j][:]) < 0 }

func hashSet(s Set) ([hashLength]byte, error) {
	h := make([][hashLength]byte, len(s))
	for n, e := range s {
		hn, err := ObjectHash(e)
		if err != nil {
			return [hashLength]byte{}, err
		}
		h[n] = hn
	}

	sort.Sort(sortableHashes(h))
	b := new(bytes.Buffer)
	var prev [hashLength]byte
	for _, hh := range h {
		if hh != prev {
			b.Write(hh[:])
		}
		prev = hh
	}
	return hash(`s`, b.Bytes()), nil
}

func hashList(l []interface{}) ([hashLength]byte, error) {
	h := new(bytes.Buffer)
	for _, o := range l {
		b, err := ObjectHash(o)
		if err != nil {
			return [hashLength]byte{}, err
		}
		h.Write(b[:])
	}
	return hash(`l`, h.Bytes()), nil
}

func hashUnicode(s string) [hashLength]byte {
	//return hash(`u`, norm.NFC.Bytes([]byte(s)))
	return hash(`u`, []byte(s))
}

type hashEntry struct {
	khash [hashLength]byte
	vhash [hashLength]byte
}
type byKHash []hashEntry

func (h byKHash) Len() int      { return len(h) }
func (h byKHash) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h byKHash) Less(i, j int) bool {
	return bytes.Compare(h[i].khash[:],
		h[j].khash[:]) < 0
}

func hashDict(d map[interface{}]interface{}) ([hashLength]byte, error) {
	e := make([]hashEntry, len(d))
	n := 0
	for k, v := range d {
		khash, err := ObjectHash(k)
		if err != nil {
			return [hashLength]byte{}, err
		}
		e[n].khash = khash

		vhash, err := ObjectHash(v)
		if err != nil {
			return [hashLength]byte{}, err
		}
		e[n].vhash = vhash

		n++
	}
	sort.Sort(byKHash(e))
	h := new(bytes.Buffer)
	for _, ee := range e {
		h.Write(ee.khash[:])
		h.Write(ee.vhash[:])
	}
	return hash(`d`, h.Bytes()), nil
}

func floatNormalize(originalFloat float64) (s string, err error) {
	// Special case 0
	// Note that if we allowed f to end up > .5 or == 0, we'd get the same thing.
	if originalFloat == 0 {
		return "+0:", nil
	}

	// sign
	f := originalFloat
	s = `+`
	if f < 0 {
		s = `-`
		f = -f
	}
	// exponent
	e := 0
	for f > 1 {
		f /= 2
		e++
	}
	for f <= .5 {
		f *= 2
		e--
	}
	s += fmt.Sprintf("%d:", e)
	// mantissa
	if f > 1 || f <= .5 {
		return "", fmt.Errorf("Could not normalize float: %f", originalFloat)
	}
	for f != 0 {
		if f >= 1 {
			s += `1`
			f--
		} else {
			s += `0`
		}
		if f >= 1 {
			return "", fmt.Errorf("Could not normalize float: %f", originalFloat)
		}
		if len(s) >= 1000 {
			return "", fmt.Errorf("Could not normalize float: %f", originalFloat)
		}
		f *= 2
	}
	return
}

func hashFloat(f float64) ([hashLength]byte, error) {
	var normalizedFloat string

	switch {
	case math.IsInf(f, 1):
		normalizedFloat = "Infinity"
	case math.IsInf(f, -1):
		normalizedFloat = "-Infinity"
	case math.IsNaN(f):
		normalizedFloat = "NaN"
	default:
		var err error
		normalizedFloat, err = floatNormalize(f)
		if err != nil {
			return [hashLength]byte{}, err
		}
	}

	return hash(`f`, []byte(normalizedFloat)), nil
}

func hashUint(i uint64) [hashLength]byte {
	return hash(`i`, []byte(fmt.Sprintf("%d", i)))
}

func hashInt(i int64) [hashLength]byte {
	return hash(`i`, []byte(fmt.Sprintf("%d", i)))
}

func hashBool(b bool) [hashLength]byte {
	bb := []byte(`0`)
	if b {
		bb = []byte(`1`)
	}
	return hash(`b`, bb)
}

func hashBytes(value reflect.Value) ([hashLength]byte, error) {
	var b []byte
	if value.Kind() == reflect.Slice {
		b = value.Bytes()
	} else {
		// The `Bytes()` method only works for slices.
		b = make([]byte, value.Len())
		bb := reflect.ValueOf(b)
		reflect.Copy(bb, value)
	}

	return hash(`r`, b), nil
}

// ObjectHash returns the hash of a subset of allowed Go objects.
func ObjectHash(o interface{}) ([hashLength]byte, error) {
	switch v := o.(type) {
	case Set:
		return hashSet(v)
	}

	value := reflect.ValueOf(o)
	switch value.Kind() {
	case reflect.Invalid: // nil
		return hash(`n`, []byte(``)), nil
	case reflect.Slice, reflect.Array:
		// Check if this is a blob of bytes.
		if value.Type().Elem() == reflect.TypeOf(byte(0)) {
			return hashBytes(value)
		}

		// Otherwise hash it as a list.
		var anySlice []interface{}
		for i := 0; i < value.Len(); i++ {
			anySlice = append(anySlice, value.Index(i).Interface())
		}
		return hashList(anySlice)
	case reflect.String:
		return hashUnicode(value.String()), nil
	case reflect.Map:
		anyMap := make(map[interface{}]interface{})
		for _, key := range value.MapKeys() {
			anyMap[key.Interface()] = value.MapIndex(key).Interface()
		}
		return hashDict(anyMap)
	case reflect.Float32, reflect.Float64:
		return hashFloat(value.Float())
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		return hashInt(value.Int()), nil
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
		return hashUint(value.Uint()), nil
	case reflect.Bool:
		return hashBool(value.Bool()), nil
	default:
		return [hashLength]byte{}, fmt.Errorf("Unsupported type: %T", o)
	}
}

// CommonJSONHash computes the ObjectHash of a Common JSON object.
func CommonJSONHash(j string) ([hashLength]byte, error) {
	var f interface{}
	if err := json.Unmarshal([]byte(j), &f); err != nil {
		return [hashLength]byte{}, err
	}
	return ObjectHash(f)
}

// Convert an object to the Common JSON equivalent
func CommonJSONify(o interface{}) (interface{}, error) {
	j, err := json.Marshal(o)
	if err != nil {
		return nil, err
	}

	var c interface{}
	err = json.Unmarshal([]byte(j), &c)
	if err != nil {
		return nil, err
	}

	return c, nil
}
