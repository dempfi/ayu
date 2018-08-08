import * as ayu from 'ayu'

export type SchemeName = keyof typeof ayu

const terminalColors = {
  light: {
    black: '#000000',
    red: ayu.light.syntax.keyword.hex,
    green: '#77cc00',
    yellow: ayu.light.syntax.func.hex,
    blue: ayu.light.syntax.tag.hex,
    magenta: '#9966cc',
    cyan: ayu.light.syntax.regexp.hex,
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightRed: '#d6656a',
    brightGreen: '#a3d900',
    brightYellow: ayu.light.syntax.operator.hex,
    brightBlue: '#6871ff',
    brightMagenta: ayu.light.syntax.constant.hex,
    brightCyan: '#57d9ad',
    brightWhite: '#ffffff'
  },
  dark: {
    black: ayu.dark.ui.separator.hex, // ayu-vim uses #0f1419
    red: ayu.dark.syntax.keyword.hex,
    green: ayu.dark.syntax.string.hex,
    yellow: ayu.dark.syntax.func.hex,
    blue: ayu.dark.syntax.tag.hex,
    magenta: '#ca30c7',
    cyan: ayu.dark.syntax.regexp.hex,
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightGreen: '#cbe645',
    brightRed: ayu.dark.syntax.special.hex,
    brightYellow: ayu.dark.syntax.constant.hex,
    brightBlue: '#6871ff',
    brightMagenta: '#ff77ff',
    brightCyan: '#a6fde1',
    brightWhite: '#ffffff'
  },
  mirage: {
    black: ayu.mirage.ui.separator.hex, // ayu-vim uses #212733
    green: ayu.mirage.syntax.string.hex,
    red: ayu.mirage.syntax.special.hex,
    yellow: ayu.mirage.common.accent.hex,
    blue: '#36a3d9',
    magenta: ayu.mirage.syntax.constant.hex,
    cyan: ayu.mirage.syntax.regexp.hex,
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightGreen: '#cbe645',
    brightRed: ayu.mirage.syntax.special.hex,
    brightYellow: '#ffdf80',
    brightBlue: '#6871ff',
    brightMagenta: '#ff77ff',
    brightCyan: '#a6fde1',
    brightWhite: '#ffffff'
  }
}

export default (variant: SchemeName) => {
  const scheme = ayu[variant]
  return {
    'type': variant === 'light' ? 'light' : 'dark',
    'colors': {
      'foreground': scheme.common.ui.hex,
      'focusBorder': scheme.common.ui.fade(60).hex,

      'widget.shadow': scheme.ui.panel.shadow.hex,

      'badge.background': scheme.ui.icon.hex,
      'badge.foreground': '#fff',

      'progressBar.background': scheme.common.accent.hex,

      'input.background': scheme.ui.panel.bg.hex,
      'input.foreground': scheme.common.fg.hex,
      'input.border': scheme.common.ui.fade(30).hex,
      'input.placeholderForeground': scheme.common.ui.fade(70).hex,

      'inputOption.activeBorder': scheme.common.accent.hex,

      'inputValidation.infoBackground': scheme.common.bg.hex,
      'inputValidation.infoBorder': scheme.syntax.tag.hex,
      'inputValidation.warningBackground': scheme.common.bg.hex,
      'inputValidation.warningBorder': scheme.syntax.func.hex,
      'inputValidation.errorBackground': scheme.common.bg.hex,
      'inputValidation.errorBorder': scheme.syntax.error.hex,

      'dropdown.background': scheme.ui.panel.bg.hex,
      'dropdown.foreground': scheme.common.ui.hex,
      'dropdown.border': scheme.common.ui.fade(30).hex,

      'list.focusAndSelectionBackground': scheme.ui.separator.hex,
      'list.focusAndSelectionForeground': scheme.common.fg.hex,
      'list.activeSelectionBackground': scheme.ui.separator.hex,
      'list.activeSelectionForeground': scheme.common.fg.hex,
      'list.inactiveSelectionBackground': scheme.ui.panel.row.hex,
      'list.inactiveSelectionForeground': scheme.common.fg.hex,
      'list.focusBackground': scheme.ui.panel.row.hex,
      'list.focusForeground': scheme.common.fg.hex,
      'list.hoverBackground': scheme.ui.panel.row.hex,
      'list.hoverForeground': scheme.common.fg.hex,
      // 'list.dropBackground': '',
      'list.highlightForeground': scheme.common.accent.hex,
      'list.invalidItemForeground': scheme.common.ui.fade(70).hex,

      'pickerGroup.foreground': scheme.common.ui.fade(50).hex,
      'pickerGroup.border': scheme.ui.separator.hex,

      'button.background': scheme.common.accent.hex,
      'button.hoverBackground': scheme.common.accent.darken(10).hex,
      'button.foreground': scheme.common.bg.fade(50).hex,

      'scrollbar.shadow': `${scheme.ui.panel.shadow.hex}11`,
      'scrollbarSlider.background': `${scheme.ui.scrollbar.puck.hex}11`,
      'scrollbarSlider.hoverBackground': `${scheme.ui.scrollbar.puck.hex}22`,
      'scrollbarSlider.activeBackground': `${scheme.ui.scrollbar.puck.hex}22`,

      // See http://stackoverflow.com/a/7224621 for the semi-transparent issue workaround
      'selection.background': `${scheme.editor.selection.bg.hex}fd`,

      // ----- Editor -----
      'editor.background': scheme.common.bg.hex,
      'editor.foreground': scheme.common.fg.hex,
      'editor.selectionBackground': scheme.editor.selection.bg.hex,
      'editor.inactiveSelectionBackground': scheme.editor.selection.inactive.hex,
      'editor.selectionHighlightBackground': scheme.editor.selection.inactive.hex,
      'editor.selectionHighlightBorder': scheme.editor.selection.border.hex,

      'editor.findMatchBackground': `${scheme.common.accent.hex}22`,
      'editor.findMatchBorder': scheme.common.accent.hex,
      'editor.findMatchHighlightBackground': `${scheme.common.accent.hex}22`,
      'editor.findMatchHighlightBorder': `${scheme.common.accent.hex}33`,
      'editor.findRangeHighlightBorder': `${scheme.common.bg.hex}00`,
      'editor.findRangeHighlightBackground': scheme.editor.selection.inactive.hex,

      'editorLink.activeForeground': scheme.common.accent.hex,
      'editorLink.foreground': scheme.common.accent.hex,
      'editorWidget.background': scheme.ui.panel.bg.hex,
      'editor.lineHighlightBackground': scheme.editor.line.hex,
      // 'editor.lineHighlightBorder': '',
      'editor.rangeHighlightBackground': scheme.editor.line.hex,
      'editor.wordHighlightBackground': scheme.editor.selection.inactive.hex,
      'editor.wordHighlightStrongBackground': `${scheme.common.accent.hex}33`,
      'editorCursor.foreground': scheme.common.accent.hex,
      'editorWhitespace.foreground': scheme.editor.gutter.hex,
      'editorIndentGuide.background': scheme.editor.guide.normal.hex,
      'editorIndentGuide.activeBackground': scheme.editor.guide.active.fade(70).hex,
      'editorLineNumber.foreground': `${scheme.common.ui.hex}66`,
      'editorLineNumber.activeForeground': `${scheme.common.ui.hex}BB`,
      // 'editorMarkerNavigationError.background': '',
      // 'editorMarkerNavigationWarning.background': '',
      'editorMarkerNavigation.background': scheme.ui.panel.bg.hex,
      // 'editor.hoverHighlightBackground': '',
      'editorHoverWidget.background': scheme.ui.panel.bg.hex,
      'editorHoverWidget.border': scheme.ui.panel.border.hex,
      // 'editorBracketMatch.background': '',
      'editorBracketMatch.border': scheme.editor.gutter.hex,
      'editorRuler.foreground': scheme.ui.separator.hex,

      // ----- Editor error squiggles -----
      // 'editorError.border': '',
      'editorError.foreground': scheme.syntax.error.hex,
      // 'editorWarning.border': '',
      'editorWarning.foreground': scheme.common.accent.hex,

      // ----- Editor gutter -----
      'editorGutter.modifiedBackground': scheme.syntax.tag.hex,
      'editorGutter.addedBackground': scheme.syntax.string.hex,
      'editorGutter.deletedBackground': scheme.syntax.operator.hex,

      // ----- Editor overview ruler -----
      'editorOverviewRuler.border': scheme.ui.separator.hex,
      'editorOverviewRuler.addedForeground': scheme.syntax.string.hex,
      'editorOverviewRuler.deletedForeground': scheme.syntax.operator.hex,
      'editorOverviewRuler.modifiedForeground': scheme.syntax.tag.hex,
      'editorOverviewRuler.warningForeground': scheme.common.accent.hex,
      'editorOverviewRuler.errorForeground': scheme.syntax.error.hex,

      // ----- Editor suggest -----
      'editorSuggestWidget.background': scheme.ui.panel.bg.hex,
      'editorSuggestWidget.border': scheme.ui.panel.border.hex,
      // 'editorSuggestWidget.foreground': '',
      'editorSuggestWidget.selectedBackground': scheme.ui.panel.row.hex,
      'editorSuggestWidget.highlightForeground': scheme.common.accent.hex,

      // ----- Peek view editor -----
      'peekView.border': scheme.ui.separator.hex,
      'peekViewEditor.background': scheme.ui.panel.bg.hex,
      'peekViewEditor.matchHighlightBackground': `${scheme.common.accent.hex}33`,
      // 'peekViewEditorGutter.background': ''
      'peekViewTitle.background': scheme.ui.panel.bg.hex,
      'peekViewTitleLabel.foreground': scheme.common.ui.hex,
      'peekViewTitleDescription.foreground': scheme.common.ui.hex,
      'peekViewResult.background': scheme.ui.panel.bg.hex,
      // 'peekViewResult.selectionBackground': '',
      // 'peekViewResult.selectionForeground': '',
      'peekViewResult.matchHighlightBackground': `${scheme.common.accent.hex}33`,
      'peekViewResult.fileForeground': scheme.common.ui.hex,
      // 'peekViewResult.lineForeground': '',

      //  ----- Diff editor -----
      'diffEditor.insertedTextBackground': `${scheme.syntax.string.hex}25`,
      'diffEditor.removedTextBackground': `${scheme.syntax.operator.hex}25`,

      // ----- Workbench: editor group -----
      'editorGroup.background': scheme.ui.panel.bg.hex,
      'editorGroup.border': scheme.ui.separator.hex,
      // 'editorGroup.dropBackground': '',
      'editorGroupHeader.tabsBackground': scheme.common.bg.hex,
      'editorGroupHeader.noTabsBackground': scheme.common.bg.hex,
      'editorGroupHeader.tabsBorder': scheme.ui.separator.hex,

      // ----- Workbench: tabs -----
      'tab.activeBackground': scheme.common.bg.hex,
      'tab.inactiveBackground': scheme.common.bg.hex,
      'tab.activeForeground': scheme.common.fg.hex,
      'tab.activeBorder': scheme.common.accent.hex,
      'tab.inactiveForeground': scheme.common.ui.hex,
      'tab.border': scheme.common.bg.hex,
      'tab.unfocusedActiveForeground': scheme.common.ui.hex,
      'tab.unfocusedInactiveForeground': scheme.common.ui.hex,
      'tab.unfocusedActiveBorder': scheme.common.ui.hex,

      // ----- Workbench: panel -----
      'panel.background': scheme.common.bg.hex,
      'panel.border': scheme.ui.separator.hex,
      'panelTitle.activeForeground': scheme.common.fg.hex,
      'panelTitle.inactiveForeground': scheme.common.ui.hex,
      'panelTitle.activeBorder': scheme.common.accent.hex,

      // ----- Workbench: status bar -----
      'statusBar.foreground': scheme.common.ui.hex,
      'statusBar.background': scheme.common.bg.hex,
      'statusBar.border': scheme.common.bg.hex,
      'statusBar.noFolderBackground': scheme.ui.panel.bg.hex,
      'statusBar.debuggingBackground': scheme.syntax.operator.hex,
      'statusBar.debuggingForeground': scheme.common.bg.fade(50).hex,
      'statusBarItem.activeBackground': '#00000050',
      'statusBarItem.hoverBackground': '#00000030',
      'statusBarItem.prominentBackground': scheme.ui.separator.hex,
      'statusBarItem.prominentHoverBackground': '#00000030',

      // ----- Workbench: activity bar -----
      'activityBar.background': scheme.common.bg.hex,
      'activityBar.foreground': scheme.ui.icon.hex,
      'activityBarBadge.background': scheme.ui.icon.hex,
      'activityBarBadge.foreground': '#fff',

      // ----- Workbench: side bar -----
      'sideBar.background': scheme.common.bg.hex,
      'sideBar.border': scheme.ui.separator.hex,
      'sideBarTitle.foreground': scheme.common.ui.hex,
      'sideBarSectionHeader.foreground': scheme.common.ui.hex,
      'sideBarSectionHeader.background': scheme.common.bg.hex,

      // ----- Workbench: title bar -----
      'titleBar.activeForeground': scheme.common.ui.hex,
      'titleBar.inactiveForeground': scheme.common.ui.hex,
      'titleBar.activeBackground': scheme.common.bg.hex,
      'titleBar.inactiveBackground': scheme.common.bg.hex,
      // 'titleBar.border': scheme.ui.separator.hex,

      // ----- Workbench: notifications -----
      // 'notification.foreground': '',
      'notification.background': variant === 'light' ? scheme.common.fg.hex : scheme.ui.separator.hex,

      // ----- Workbench: extension buttons -----
      'extensionButton.prominentBackground': scheme.common.accent.hex,
      'extensionButton.prominentHoverBackground': scheme.common.accent.darken(10).hex,
      'extensionButton.prominentForeground': scheme.common.bg.fade(50).hex,

      // ----- Workbench: welcome page / interactive playground -----
      'welcomePage.quickLinkBackground': scheme.ui.panel.row.hex,
      'welcomePage.quickLinkHoverBackground': scheme.ui.separator.hex,
      'welcomeOverlay.foreground': scheme.common.fg.hex,
      // 'welcomeOverlay.background': '',
      'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg.hex,
      'textLink.foreground': scheme.common.accent.hex,
      'textLink.activeForeground': scheme.common.accent.hex,
      'textPreformat.foreground': scheme.common.fg.hex,
      'textBlockQuote.background': scheme.ui.panel.bg.hex,
      // 'textBlockQuote.border': '',
      // 'textCodeBlock.background: '',

      // ----- Workbench: debug -----
      'debugExceptionWidget.border': scheme.ui.separator.hex,
      'debugExceptionWidget.background': scheme.ui.panel.bg.hex,
      'debugToolBar.background': scheme.ui.panel.bg.hex,

      // ----- Git Decoration -----
      'gitDecoration.modifiedResourceForeground': `${scheme.syntax.tag.hex}BB`,
      'gitDecoration.deletedResourceForeground': `${scheme.syntax.operator.hex}BB`,
      'gitDecoration.untrackedResourceForeground': `${scheme.syntax.string.hex}BB`,
      'gitDecoration.submoduleResourceForeground': `${scheme.syntax.constant.hex}BB`,
      'gitDecoration.ignoredResourceForeground': scheme.common.ui.fade(50).hex,

      // ----- Workbench: terminal -----
      'terminal.background': scheme.common.bg.hex,
      'terminal.foreground': scheme.common.fg.hex,
      'terminal.ansiBlack': terminalColors[variant].black,
      'terminal.ansiRed': terminalColors[variant].red,
      'terminal.ansiGreen': terminalColors[variant].green,
      'terminal.ansiYellow': terminalColors[variant].yellow,
      'terminal.ansiBlue': terminalColors[variant].blue,
      'terminal.ansiMagenta': terminalColors[variant].magenta,
      'terminal.ansiCyan': terminalColors[variant].cyan,
      'terminal.ansiWhite': terminalColors[variant].white,
      'terminal.ansiBrightBlack': terminalColors[variant].brightBlack,
      'terminal.ansiBrightRed': terminalColors[variant].brightRed,
      'terminal.ansiBrightGreen': terminalColors[variant].brightGreen,
      'terminal.ansiBrightYellow': terminalColors[variant].brightYellow,
      'terminal.ansiBrightBlue': terminalColors[variant].brightBlue,
      'terminal.ansiBrightMagenta': terminalColors[variant].brightMagenta,
      'terminal.ansiBrightCyan': terminalColors[variant].brightCyan,
      'terminal.ansiBrightWhite': terminalColors[variant].brightWhite
    },

    'tokenColors': [
      {
        'settings': {
          'background': scheme.common.bg.hex,
          'foreground': scheme.common.fg.hex
        }
      },
      {
        'name': 'Comment',
        'scope': [
          'comment',
          'punctuation.definition.comment'
        ],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.comment.hex
        }
      },
      {
        'name': 'Variable',
        'scope': [
          'variable'
        ],
        'settings': {
          'foreground': scheme.common.fg.hex
        }
      },
      {
        'name': 'String',
        'scope': ['string', 'constant.other.symbol'],
        'settings': {
          'foreground': scheme.syntax.string.hex
        }
      },
      {
        'name': 'Number',
        'scope': ['constant.numeric'],
        'settings': {
          'foreground': scheme.common.accent.hex
        }
      },
      {
        'name': 'Regular Expressions and Escape Characters',
        'scope': ['string.regexp', 'constant.character.escape'],
        'settings': {
          'foreground': scheme.syntax.regexp.hex
        }
      },
      {
        'name': 'Built-in constant',
        'scope': ['constant.language'],
        'settings': {
          'foreground': scheme.common.accent.hex
        }
      },
      {
        'name': 'User-defined constant',
        'scope': ['constant.character', 'constant.other'],
        'settings': {
          'foreground': scheme.common.accent.hex
        }
      },
      {
        'name': 'Member Variable',
        'scope': ['variable.member'],
        'settings': {
          'foreground': '#ec5f67'
        }
      },
      {
        'name': 'Keyword',
        'scope': ['keyword'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex
        }
      },
      {
        'name': 'Operators',
        'scope': ['keyword.operator'],
        'settings': {
          'foreground': scheme.syntax.operator.hex
        }
      },
      {
        'name': 'Punctuation',
        'scope': ['punctuation.separator', 'punctuation.terminator'],
        'settings': {
          'foreground': `${scheme.common.fg.hex}CC`
        }
      },
      {
        'name': 'Punctuation',
        'scope': ['punctuation.section'],
        'settings': {
          'foreground': scheme.common.fg.hex
        }
      },
      {
        'name': 'Accessor',
        'scope': ['punctuation.accessor'],
        'settings': {
          'foreground': scheme.syntax.operator.hex
        }
      },
      {
        'name': 'Annotation Punctuation',
        'scope': ['punctuation.definition.annotation'],
        'settings': {
          'foreground': `${scheme.common.fg.hex}CC`
        }
      },
      {
        'name': 'JavaScript Dollar',
        'scope': ['variable.other.dollar.only.js', 'variable.other.object.dollar.only.js', 'variable.type.dollar.only.js', 'support.class.dollar.only.js'],
        'settings': {
          'foreground': scheme.syntax.special.hex
        }
      },
      {
        'name': 'Storage',
        'scope': ['storage'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex
        }
      },
      {
        'name': 'Storage type',
        'scope': ['storage.type'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex
        }
      },
      {
        'name': 'Function name',
        'scope': ['entity.name.function'],
        'settings': {
          'foreground': scheme.syntax.func.hex
        }
      },
      {
        'name': 'Imports and packages',
        'scope': ['entity.name.import', 'entity.name.package'],
        'settings': {
          'foreground': scheme.syntax.string.hex
        }
      },
      {
        'name': 'Entity name',
        'scope': ['entity.name'],
        'settings': {
          'foreground': scheme.syntax.entity.hex
        }
      },
      {
        'name': 'Inherited class',
        'scope': ['entity.other.inherited-class'],
        'settings': {
          'fontStyle': 'underline',
          'foreground': scheme.syntax.entity.hex
        }
      },
      {
        'name': 'Function argument',
        'scope': ['variable.parameter'],
        'settings': {
          'foreground': scheme.common.accent.hex
        }
      },
      {
        'name': 'Language variable',
        'scope': ['variable.language'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Tag',
        'scope': ['entity.name.tag', 'meta.tag.sgml'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Tag start/end',
        'scope': ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
        'settings': {
          'foreground': `${scheme.syntax.tag.hex}90`
        }
      },
      {
        'name': 'Tag attribute',
        'scope': ['entity.other.attribute-name'],
        'settings': {
          'foreground': scheme.syntax.func.hex
        }
      },
      {
        'name': 'Function call',
        'scope': ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
        'settings': {
          'foreground': scheme.syntax.func.hex
        }
      },
      {
        'name': 'Library function',
        'scope': ['support.function', 'support.macro'],
        'settings': {
          'foreground': scheme.syntax.markup.hex
        }
      },
      {
        'name': 'Library constant',
        'scope': ['support.constant'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.operator.hex
        }
      },
      {
        'name': 'Library class/type',
        'scope': ['support.type', 'support.class', 'source.go storage.type'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Invalid',
        'scope': ['invalid'],
        'settings': {
          'foreground': scheme.syntax.error.hex
        }
      },
      {
        'name': 'diff.header',
        'scope': ['meta.diff', 'meta.diff.header'],
        'settings': {
          'foreground': '#c594c5'
        }
      },
      {
        'name': 'Ruby class methods',
        'scope': ['source.ruby variable.other.readwrite'],
        'settings': {
          'foreground': scheme.syntax.func.hex
        }
      },
      {
        'name': 'CSS tag names',
        'scope': ['source.css entity.name.tag', 'source.sass entity.name.tag', 'source.scss entity.name.tag', 'source.less entity.name.tag', 'source.stylus entity.name.tag'],
        'settings': {
          'foreground': scheme.syntax.entity.hex
        }
      },
      {
        'name': 'CSS browser prefix',
        'scope': ['source.css support.type', 'source.sass support.type', 'source.scss support.type', 'source.less support.type', 'source.stylus support.type'],
        'settings': {
          'foreground': scheme.syntax.comment.hex
        }
      },
      {
        'name': 'CSS Properties',
        'scope': ['support.type.property-name'],
        'settings': {
          'fontStyle': 'normal',
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Search Results Nums',
        'scope': ['constant.numeric.line-number.find-in-files - match'],
        'settings': {
          'foreground': scheme.syntax.comment.hex
        }
      },
      {
        'name': 'Search Results Match Nums',
        'scope': ['constant.numeric.line-number.match'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex
        }
      },
      {
        'name': 'Search Results Lines',
        'scope': ['entity.name.filename.find-in-files'],
        'settings': {
          'foreground': scheme.syntax.string.hex
        }
      },
      {
        'scope': ['message.error'],
        'settings': {
          'foreground': scheme.syntax.error.hex
        }
      },
      {
        'name': 'JSON Key - Level 8',
        'scope': ['source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 7',
        'scope': ['source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 6',
        'scope': ['source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 5',
        'scope': ['source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 4',
        'scope': ['source.json meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 3',
        'scope': ['source.json meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 2',
        'scope': ['source.json meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 1',
        'scope': ['source.json meta meta.structure.dictionary.json string.quoted.double.json - meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta.structure.dictionary.json punctuation.definition.string - meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'JSON Key - Level 0',
        'scope': ['source.json meta.structure.dictionary.json string.quoted.double.json - meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta.structure.dictionary.json punctuation.definition.string - meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Markup Heading',
        'scope': ['markup.heading', 'markup.heading entity.name'],
        'settings': {
          'fontStyle': 'bold',
          'foreground': scheme.syntax.keyword.hex
        }
      },
      {
        'name': 'Markup Links',
        'scope': ['string.other.link', 'markup.underline.link'],
        'settings': {
          'fontStyle': 'italic underline',
          'foreground': scheme.syntax.regexp.hex
        }
      },
      {
        'name': 'Markup image',
        'scope': ['punctuation.definition.image'],
        'settings': {
          'foreground': scheme.syntax.func.hex
        }
      },
      {
        'name': 'Markup Italic',
        'scope': ['markup.italic'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.markup.hex
        }
      },
      {
        'name': 'Markup Bold',
        'scope': ['markup.bold'],
        'settings': {
          'fontStyle': 'bold',
          'foreground': scheme.syntax.markup.hex
        }
      },
      {
        'name': 'Markup Bold/italic',
        'scope': ['markup.italic markup.bold | markup.bold markup.italic'],
        'settings': {
          'fontStyle': 'bold italic'
        }
      },
      {
        'name': 'Markup Code',
        'scope': ['markup.raw'],
        'settings': {
          'background': `${scheme.common.fg.hex}07`
        }
      },
      {
        'name': 'Markup Code Inline',
        'scope': ['markup.raw.inline'],
        'settings': {
          'background': `${scheme.common.fg.hex}10`
        }
      },
      {
        'name': 'Markdown Separator',
        'scope': ['meta.separator'],
        'settings': {
          'background': `${scheme.common.fg.hex}10`,
          'fontStyle': 'bold',
          'foreground': scheme.syntax.comment.hex
        }
      },
      {
        'name': 'Markup Blockquote',
        'scope': ['markup.quote'],
        'settings': {
          'foreground': scheme.common.accent.hex,
          'fontStyle': 'italic'
        }
      },
      {
        'name': 'Markup List Bullet',
        'scope': ['markup.list.numbered.bullet', 'markup.list punctuation.definition.list_item'],
        'settings': {
          'foreground': scheme.syntax.regexp.hex
        }
      },
      {
        'name': 'Markup Inserted',
        'scope': ['markup.inserted'],
        'settings': {
          'foreground': scheme.syntax.string.hex
        }
      },
      {
        'name': 'Markup Changed',
        'scope': ['markup.changed'],
        'settings': {
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Markup Deleted',
        'scope': ['markup.deleted'],
        'settings': {
          'foreground': scheme.syntax.markup.hex
        }
      },
      {
        'name': 'Markup Strike',
        'scope': ['markup.strike'],
        'settings': {
          'foreground': scheme.syntax.special.hex
        }
      },
      {
        'name': 'Markup Table',
        'scope': ['markup.table'],
        'settings': {
          'background': `${scheme.common.fg.hex}10`,
          'foreground': scheme.syntax.tag.hex
        }
      },
      {
        'name': 'Markup Raw Inline',
        'scope': ['text.html.markdown markup.inline.raw'],
        'settings': {
          'foreground': scheme.syntax.operator.hex
        }
      },
      {
        'name': 'Markdown - Line Break',
        'scope': ['text.html.markdown meta.dummy.line-break'],
        'settings': {
          'foreground': scheme.syntax.comment.hex
        }
      },
      {
        'name': 'Markdown - Raw Block Fenced',
        'scope': ['punctuation.definition.markdown'],
        'settings': {
          'background': scheme.common.fg.hex,
          'foreground': scheme.syntax.comment.hex
        }
      }
    ]
  }
}
