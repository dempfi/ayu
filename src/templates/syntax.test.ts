import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import * as ayu from 'ayu'
import syntax from './syntax'

const HUES = ['redish', 'orangish', 'yellowish', 'greenish', 'cyanish', 'bluish', 'purplish', 'pinkish']

const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(c => c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

for (const kind of ['light', 'dark', 'mirage'] as const) {
  const scheme = syntax(ayu[kind])
  const rule = (hue: string) => scheme.rules.find(r => r.scope === `region.${hue}`)

  test(`${kind}: every region.* scope is defined, so Sublime never guesses plugin colors`, () => {
    for (const hue of HUES) {
      assert.ok(rule(hue)?.foreground, `region.${hue} has no outline color`)
      assert.ok(rule(hue)?.background, `region.${hue} has no fill color`)
    }
  })

  test(`${kind}: region outlines stay visible against the editor background`, () => {
    for (const hue of HUES) {
      const ratio = contrast(rule(hue)!.foreground!, scheme.globals.background)
      assert.ok(ratio >= 1.8, `region.${hue} outline contrast ${ratio.toFixed(2)} is too low`)
    }
  })

  test(`${kind}: region fills are translucent so the text under them stays readable`, () => {
    for (const hue of HUES) assert.match(rule(hue)!.background!, /^#[0-9a-f]{6}[0-9a-f]{2}$/i)
  })

  test(`${kind}: region colors are distinguishable from each other`, () => {
    const colors = HUES.map(hue => rule(hue)!.foreground)
    assert.equal(new Set(colors).size, HUES.length)
  })
}
