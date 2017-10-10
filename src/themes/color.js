const C = require('color')
let BASE

class Color {
  constructor(a) { this.color = a }
  static from(hex) { return new Color(C('#' + hex)) }
  get rgb() { return this.color.rgb().array().map(Math.round).join(', ') }
  get hex() { return this.color.hex() }
}

const parseFunction = prop => {
  for (const func of ['fade', 'darken']) {
    const m = prop.match(new RegExp(`(${func})(\\d{1,})`))
    if (m && m.length === 3) return [m[1], m[2]]
  }
}

const proxy = color => new Proxy(color, {
  get(target, property, receiver) {
    const result = Reflect.get(target, property, receiver)
    if (result || typeof property !== 'string') return result

    const parsed = parseFunction(property)
    if (!parsed) return
    switch (parsed[0]) {
      case 'fade': return fade(target, parseInt(parsed[1]))
      case 'darken': return darken(target, parseInt(parsed[1]))
    }
  }
})

const fade = (color, value) => {
  const level = 1 - value / 100
  const mixed = color.color.mix(BASE.color, level)
  return proxy(new Color(mixed))
}

const darken = (color, value) => {
  const darker = color.color.darken(value / 100)
  return proxy(new Color(darker))
}

module.exports = color => proxy(Color.from(color))
module.exports.base = color => {
  BASE = Color.from(color)
  return proxy(BASE)
}
