const $ = require('./color')

const common = {
  accent: $`FFCC66`,
  bg: $.base`212733`,
  fg: $`CCC9C2`,
  ui: $`667380`
}

const syntax = {
  tag: $`5CCFE6`,
  func: $`FFD580`,
  entity: $`73D0FF`,
  string: $`BAE67E`,
  regexp: $`95E6CB`,
  markup: $`F28779`,
  keyword: $`FFA759`,
  special: $`FFC44C`,
  comment: $`5C6773`,
  constant: $`D4BFFF`,
  operator: $`F29E74`,
  error: $`FF3333`
}

const ui = {
  panel: {
    bg: common.ui.fade7,
    shadow: common.bg.darken30,
    border: common.bg.darken40,
    row: common.bg.darken5
  },
  icon: common.ui.fade55,
  scrollbar: { puck: $`FFFFFF` },
  separator: common.bg.darken20,
  minimap: common.bg.darken40,
  opacity: 1.0
}

const editor = {
  line: common.bg.darken14,
  gutter: common.ui.fade35,
  selection: {
    bg: syntax.entity.fade10,
    inactive: syntax.entity.fade8,
    border: syntax.entity.fade13
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'mirage',
  common,
  syntax,
  ui,
  editor
}
