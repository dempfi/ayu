import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import * as ayu from 'ayu'
import ui from './ui'

type Rule = { class: string, settings?: string[], attributes?: string[], parents?: unknown[], [prop: string]: unknown }

const DEFAULT_SETTINGS: Record<string, boolean> = {
  show_tab_close_buttons: true,
  highlight_modified_tabs: false
}

const appliesWith = (rule: Rule, settings: Record<string, boolean>) =>
  (rule.settings ?? []).every(s => s.startsWith('!') ? !settings[s.slice(1)] : !!settings[s])

for (const kind of ['light', 'dark', 'mirage'] as const) {
  const rules = ui(ayu[kind], kind) as Rule[]

  test(`${kind}: auto_complete_details uses no background_color, which Sublime rejects on every completion`, () => {
    for (const rule of rules.filter(r => r.class === 'auto_complete_details')) {
      assert.equal(rule.background_color, undefined)
    }
  })

  test(`${kind}: tab close button reacts to hover with default settings`, () => {
    const hover = rules.filter(r =>
      r.class === 'tab_close_button' && !r.parents && r.attributes?.includes('hover') && 'layer0.tint' in r)
    assert.ok(hover.some(r => appliesWith(r, DEFAULT_SETTINGS)))
  })
}
