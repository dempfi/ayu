const $ = require('./color')

const common = {
  accent: $`F29718`,
  bg: $.base`0F1419`,
  fg: $`BFBAB0`,
  ui: $`475259`
}

const syntax = {
  tag: $`39BAE6`,
  func: $`FFB454`,
  entity: $`59C2FF`,
  string: $`C2D94C`,
  regexp: $`95E6CB`,
  markup: $`F07178`,
  keyword: $`FF7733`,
  special: $`E6B673`,
  comment: $`5C6773`,
  constant: $`FFEE99`,
  operator: $`F29668`,
  error: $`FF3333`
}

const ui = {
  panel: {
    bg: common.ui.fade7,
    shadow: common.bg.darken30,
    border: common.bg.darken80,
    row: common.bg.darken20
  },
  icon: common.ui.fade55,
  scrollbar: { puck: $`FFFFFF` },
  separator: common.bg.darken36,
  minimap: common.fg.darken50,
  opacity: 1.0
}

const editor = {
  line: common.bg.darken30,
  gutter: common.ui.fade40,
  selection: {
    bg: syntax.entity.fade9,
    inactive: syntax.entity.fade6,
    border: syntax.entity.fade13
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'dark',
  common,
  syntax,
  ui,
  editor
}
