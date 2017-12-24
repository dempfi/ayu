const $ = require('./color')

const common = {
  accent: $`FF8F40`,
  bg: $.base`FAFAFA`,
  fg: $`61676C`,
  ui: $`9DA2A6`
}

const syntax = {
  tag: $`55B4D4`,
  func: $`F29718`,
  entity: $`399EE6`,
  string: $`86B300`,
  regexp: $`4CBF99`,
  markup: $`F07171`,
  keyword: $`FA6E32`,
  special: $`E6B673`,
  comment: $`ABB0B6`,
  constant: $`A37ACC`,
  operator: $`ED9366`,
  error: $`F51818`
}

const ui = {
  panel: {
    bg: $`FFFFFF`,
    shadow: common.bg.darken20,
    border: common.bg.darken20,
    row: common.bg.darken2
  },
  icon: common.ui.fade60,
  scrollbar: { puck: $`000000` },
  separator: common.bg.darken5,
  minimap: common.ui,
  opacity: 1
}

const editor = {
  line: common.bg.darken3,
  gutter: common.ui.fade35,
  selection: {
    bg: syntax.entity.fade9,
    inactive: syntax.entity.fade7,
    border: syntax.entity.fade12
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'light',
  common,
  syntax,
  ui,
  editor
}
