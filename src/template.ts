import * as ayu from 'ayu'

export type SchemeName = keyof typeof ayu

const terminalColors = {
  light: {
    black: '#000000',
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#d1d1d1'
  },
  dark: {
    black: ayu.dark.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#ffffff'
  },
  mirage: {
    black: ayu.mirage.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#ffffff'
  }
}

export default (variant: SchemeName, bordered: boolean) => {
  const scheme = ayu[variant]
  return {
    'type': variant === 'light' ? 'light' : 'dark',
    'colors': {
      // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

      // CONTRAST COLOURS
      // --

      // BASE COLOURS
      'focusBorder': scheme.common.ui.fade(.4).hex(),
      'foreground': scheme.common.ui.hex(),
      'widget.shadow': scheme.ui.panel.shadow.hex(),
      'selection.background': scheme.ui.selection.bg.alpha(.992).hex(),

      // TEXT COLOURS
      'textBlockQuote.background': scheme.ui.panel.bg.hex(),
      'textLink.foreground': scheme.common.accent.hex(),
      'textLink.activeForeground': scheme.common.accent.hex(),
      'textPreformat.foreground': scheme.common.fg.hex(),

      // BUTTON CONTROL
      'button.background': scheme.common.accent.hex(),
      'button.foreground': scheme.common.bg.fade(.5).hex(),
      'button.hoverBackground': scheme.common.accent.darken(.1).hex(),

      // DROPDOWN CONTROL
      'dropdown.background': scheme.ui.panel.bg.hex(),
      'dropdown.foreground': scheme.common.ui.hex(),
      'dropdown.border': scheme.common.ui.fade(.7).hex(),

      // INPUT CONTROL
      'input.background': scheme.ui.panel.bg.hex(),
      'input.border': scheme.common.ui.fade(.7).hex(),
      'input.foreground': scheme.common.fg.hex(),
      'input.placeholderForeground': scheme.common.ui.fade(.3).hex(),
      'inputOption.activeBorder': scheme.common.accent.hex(),
      'inputValidation.errorBackground': scheme.common.bg.hex(),
      'inputValidation.errorBorder': scheme.syntax.error.hex(),
      'inputValidation.infoBackground': scheme.common.bg.hex(),
      'inputValidation.infoBorder': scheme.syntax.tag.hex(),
      'inputValidation.warningBackground': scheme.common.bg.hex(),
      'inputValidation.warningBorder': scheme.syntax.func.hex(),

      // SCROLLBAR CONTROL
      'scrollbar.shadow': scheme.ui.line.hex(),
      'scrollbarSlider.background': scheme.common.ui.alpha(.4).hex(),
      'scrollbarSlider.hoverBackground': scheme.common.ui.alpha(.6).hex(),
      'scrollbarSlider.activeBackground': scheme.common.ui.alpha(.7).hex(),

      // BADGE
      'badge.background': scheme.common.accent.hex(),
      'badge.foreground': scheme.common.bg.hex(),

      // PROGRESS BAR
      'progressBar.background': scheme.common.accent.hex(),

      // LISTS AND TREES
      'list.activeSelectionBackground': scheme.ui.line.hex(),
      'list.activeSelectionForeground': scheme.common.ui.hex(),
      'list.focusBackground': scheme.ui.line.hex(),
      'list.focusForeground': scheme.common.ui.hex(),
      'list.highlightForeground': scheme.common.accent.hex(),
      'list.hoverBackground': scheme.ui.line.hex(),
      'list.hoverForeground': scheme.common.ui.hex(),
      'list.inactiveSelectionBackground': scheme.ui.line.hex(),
      'list.inactiveSelectionForeground': scheme.common.ui.hex(),
      'list.invalidItemForeground': scheme.common.ui.fade(.3).hex(),

      // ACTIVITY BAR
      'activityBar.background': scheme.common.bg.hex(),
      'activityBar.foreground': scheme.common.ui.alpha(.8).hex(),
      'activityBar.border': bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),
      'activityBarBadge.background': scheme.common.accent.hex(),
      'activityBarBadge.foreground': scheme.common.bg.hex(),

      // SIDE BAR
      'sideBar.background': scheme.common.bg.hex(),
      'sideBar.border': bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),
      'sideBarTitle.foreground': scheme.common.ui.hex(),
      'sideBarSectionHeader.background': scheme.common.bg.hex(),
      'sideBarSectionHeader.foreground': scheme.common.ui.hex(),

      // EDITOR GROUPS & TABS
      'editorGroup.border': scheme.ui.line.hex(),
      'editorGroup.background': scheme.ui.panel.bg.hex(),
      'editorGroupHeader.noTabsBackground': scheme.common.bg.hex(),
      'editorGroupHeader.tabsBackground': scheme.common.bg.hex(),
      'editorGroupHeader.tabsBorder': bordered ?  scheme.ui.line.hex() : scheme.common.bg.hex(),
      'tab.activeBackground': bordered ? scheme.ui.panel.bg.hex() : scheme.common.bg.hex(),
      'tab.activeForeground': scheme.common.fg.hex(),
      'tab.border': bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),
      'tab.activeBorder': bordered ? undefined : scheme.common.accent.hex(),
      'tab.activeBorderTop': bordered ? scheme.common.accent.hex() : undefined,
      'tab.unfocusedActiveBorder': bordered ? undefined : scheme.common.ui.hex(),
      'tab.unfocusedActiveBorderTop': bordered ? scheme.common.ui.hex() : undefined,
      'tab.inactiveBackground': scheme.common.bg.hex(),
      'tab.inactiveForeground': scheme.common.ui.hex(),
      'tab.unfocusedActiveForeground': scheme.common.ui.hex(),
      'tab.unfocusedInactiveForeground': scheme.common.ui.hex(),

      // EDITOR
      'editor.background': bordered ? scheme.ui.panel.bg.hex() : scheme.common.bg.hex(),
      'editor.foreground': scheme.common.fg.hex(),
      'editorLineNumber.foreground': scheme.ui.gutter.normal.hex(),
      'editorLineNumber.activeForeground': scheme.ui.gutter.active.hex(),
      'editorCursor.foreground': scheme.common.accent.hex(),

      'editor.selectionBackground': scheme.ui.selection.bg.hex(),
      'editor.inactiveSelectionBackground': scheme.ui.selection.inactive.hex(),
      'editor.selectionHighlightBackground': scheme.ui.selection.inactive.hex(),
      'editor.selectionHighlightBorder': scheme.ui.selection.border.hex(),

      'editor.wordHighlightBackground': scheme.ui.selection.inactive.hex(),
      'editor.wordHighlightStrongBackground': scheme.common.accent.alpha(.2).hex(),

      'editor.findMatchBackground': scheme.common.accent.alpha(.05).hex(),
      'editor.findMatchBorder': scheme.common.accent.hex(),
      'editor.findMatchHighlightBackground': scheme.common.accent.alpha(.05).hex(),
      'editor.findMatchHighlightBorder': scheme.common.accent.alpha(.35).hex(),
      'editor.findRangeHighlightBackground': scheme.ui.selection.inactive.hex(),
      'editor.findRangeHighlightBorder': `${scheme.common.bg.hex()}00`,

      // 'editor.hoverHighlightBackground': '',

      'editor.lineHighlightBackground': scheme.ui.line.hex(),
      // 'editor.lineHighlightBorder': '',

      'editorLink.activeForeground': scheme.common.accent.hex(),

      'editor.rangeHighlightBackground': scheme.ui.line.hex(),

      'editorWhitespace.foreground': scheme.ui.gutter.normal.hex(),

      'editorIndentGuide.background': scheme.ui.guide.normal.hex(),
      'editorIndentGuide.activeBackground': scheme.ui.guide.active.hex(),

      'editorRuler.foreground': scheme.ui.guide.normal.hex(),
      'editorCodeLens.foreground': scheme.syntax.comment.hex(),

      'editorBracketMatch.background': scheme.ui.gutter.normal.alpha(.3).hex(),
      'editorBracketMatch.border': scheme.ui.gutter.active.alpha(.6).hex(),

      // OVERVIEW RULER
      'editorOverviewRuler.border': scheme.ui.line.hex(),
      'editorOverviewRuler.modifiedForeground': scheme.vcs.modified.alpha(.6).hex(),
      'editorOverviewRuler.addedForeground': scheme.vcs.added.alpha(.6).hex(),
      'editorOverviewRuler.deletedForeground': scheme.vcs.removed.alpha(.6).hex(),
      'editorOverviewRuler.errorForeground': scheme.syntax.error.hex(),
      'editorOverviewRuler.warningForeground': scheme.common.accent.hex(),

      // ERRORS AND WARNINGS
      'editorError.foreground': scheme.syntax.error.hex(),
      'editorWarning.foreground': scheme.common.accent.hex(),

      // GUTTER
      'editorGutter.modifiedBackground': scheme.vcs.modified.alpha(.6).hex(),
      'editorGutter.addedBackground': scheme.vcs.added.alpha(.6).hex(),
      'editorGutter.deletedBackground': scheme.vcs.removed.alpha(.6).hex(),

      // DIFF EDITOR
      'diffEditor.insertedTextBackground': scheme.syntax.string.alpha(.15).hex(),
      'diffEditor.removedTextBackground': scheme.syntax.operator.alpha(.15).hex(),

      // EDITOR WIDGET
      'editorWidget.background': scheme.ui.panel.bg.hex(),
      'editorSuggestWidget.background': scheme.ui.panel.bg.hex(),
      'editorSuggestWidget.border': scheme.ui.panel.border.hex(),
      'editorSuggestWidget.highlightForeground': scheme.common.accent.hex(),
      'editorSuggestWidget.selectedBackground': scheme.ui.line.hex(),
      'editorHoverWidget.background': scheme.ui.panel.bg.hex(),
      'editorHoverWidget.border': scheme.ui.panel.border.hex(),

      // DEBUG EXCEPTION
      'debugExceptionWidget.border': scheme.ui.line.hex(),
      'debugExceptionWidget.background': scheme.ui.panel.bg.hex(),

      // EDITOR MARKER
      'editorMarkerNavigation.background': scheme.ui.panel.bg.hex(),

      // PEEK VIEW
      'peekView.border': scheme.ui.line.hex(),
      'peekViewEditor.background': scheme.ui.panel.bg.hex(),
      'peekViewEditor.matchHighlightBackground': scheme.common.accent.alpha(.2).hex(),
      'peekViewResult.background': scheme.ui.panel.bg.hex(),
      'peekViewResult.fileForeground': scheme.common.ui.hex(),
      'peekViewResult.matchHighlightBackground': scheme.common.accent.alpha(.2).hex(),
      'peekViewTitle.background': scheme.ui.panel.bg.hex(),
      'peekViewTitleDescription.foreground': scheme.common.ui.hex(),
      'peekViewTitleLabel.foreground': scheme.common.ui.hex(),

      // Merge Conflicts
      // 'merge.currentHeaderBackground': '?',
      // 'merge.currentContentBackground': '?',
      // 'merge.incomingHeaderBackground': '?',
      // 'merge.incomingContentBackground': '?',
      // 'merge.border': '?',
      // 'merge.commonContentBackground': '?',
      // 'merge.commonHeaderBackground': '?',
      // 'editorOverviewRuler.currentContentForeground': '?',
      // 'editorOverviewRuler.incomingContentForeground': '?',
      // 'editorOverviewRuler.commonContentForeground': '?',

      // Panel
      'panel.background': scheme.common.bg.hex(),
      'panel.border': scheme.ui.line.hex(),
      'panelTitle.activeBorder': scheme.common.accent.hex(),
      'panelTitle.activeForeground': scheme.common.fg.hex(),
      'panelTitle.inactiveForeground': scheme.common.ui.hex(),

      // STATUS BAR
      'statusBar.background': scheme.common.bg.hex(),
      'statusBar.foreground': scheme.common.ui.hex(),
      'statusBar.border': bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),
      'statusBar.debuggingBackground': scheme.syntax.operator.hex(),
      'statusBar.debuggingForeground': scheme.common.bg.fade(.5).hex(),
      'statusBar.noFolderBackground': scheme.ui.panel.bg.hex(),
      'statusBarItem.activeBackground': '#00000050',
      'statusBarItem.hoverBackground': '#00000030',
      'statusBarItem.prominentBackground': scheme.ui.line.hex(),
      'statusBarItem.prominentHoverBackground': '#00000030',

      // TITLE BAR
      'titleBar.activeBackground': scheme.common.bg.hex(),
      'titleBar.activeForeground': scheme.common.fg.hex(),
      'titleBar.inactiveBackground': scheme.common.bg.hex(),
      'titleBar.inactiveForeground': scheme.common.ui.hex(),
      'titleBar.border': bordered ? scheme.ui.line.hex() : scheme.common.bg.hex(),

      // MENU BAR
      // 'menubar.selectionForeground': '?',
      // 'menubar.selectionBackground': '?',
      // 'menubar.selectionBorder': '?',
      // 'menu.foreground': '?',
      // 'menu.background': '?',
      // 'menu.selectionForeground': '?',
      // 'menu.selectionBackground': '?',
      // 'menu.selectionBorder': '?',

      // NOTIFICATION
      // 'notificationCenter.border': '?',
      // 'notificationCenterHeader.foreground': '?',
      // 'notificationCenterHeader.background': '?',
      // 'notificationToast.border': '?',
      // 'notifications.foreground': '?',
      // 'notifications.background': '?',
      // 'notifications.border': '?',
      // 'notificationLink.foreground': '?',

      // EXTENSIONS
      'extensionButton.prominentForeground': scheme.common.bg.fade(.5).hex(),
      'extensionButton.prominentBackground': scheme.common.accent.hex(),
      'extensionButton.prominentHoverBackground': scheme.common.accent.darken(.1).hex(),

      // QUICK PICKER
      'pickerGroup.border': scheme.ui.line.hex(),
      'pickerGroup.foreground': scheme.common.ui.fade(.5).hex(),

      // DEBUG
      'debugToolBar.background': scheme.ui.panel.bg.hex(),
      // 'debugToolBar.border': '',

      // WELCOME PAGE
      // 'welcomePage.buttonBackground': '?'
      // 'welcomePage.buttonHoverBackground': '?'
      'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg.hex(),

      // GIT
      'gitDecoration.modifiedResourceForeground': scheme.vcs.modified.alpha(.7).hex(),
      'gitDecoration.deletedResourceForeground': scheme.vcs.removed.alpha(.7).hex(),
      'gitDecoration.untrackedResourceForeground': scheme.vcs.added.alpha(.7).hex(),
      'gitDecoration.ignoredResourceForeground': scheme.common.ui.fade(.5).hex(),
      'gitDecoration.conflictingResourceForeground': '',
      'gitDecoration.submoduleResourceForeground': scheme.syntax.constant.alpha(.7).hex(),

      // Settings
      'settings.headerForeground': scheme.common.fg.hex(),
      'settings.modifiedItemIndicator': scheme.vcs.modified.hex(),

      // TERMINAL
      'terminal.background': scheme.common.bg.hex(),
      'terminal.foreground': scheme.common.fg.hex(),
      'terminal.ansiBlack': terminalColors[variant].black,
      'terminal.ansiRed': scheme.syntax.markup.darken(.1).hex(),
      'terminal.ansiGreen': scheme.vcs.added.hex(),
      'terminal.ansiYellow': scheme.syntax.func.darken(.1).hex(),
      'terminal.ansiBlue': scheme.syntax.entity.darken(.1).hex(),
      'terminal.ansiMagenta': scheme.syntax.constant.darken(.1).hex(),
      'terminal.ansiCyan': scheme.syntax.regexp.darken(.1).hex(),
      'terminal.ansiWhite': terminalColors[variant].white,
      'terminal.ansiBrightBlack': terminalColors[variant].brightBlack,
      'terminal.ansiBrightRed': scheme.syntax.markup.hex(),
      'terminal.ansiBrightGreen': scheme.syntax.string.hex(),
      'terminal.ansiBrightYellow': scheme.syntax.func.hex(),
      'terminal.ansiBrightBlue': scheme.syntax.entity.hex(),
      'terminal.ansiBrightMagenta': scheme.syntax.constant.hex(),
      'terminal.ansiBrightCyan': scheme.syntax.regexp.hex(),
      'terminal.ansiBrightWhite': terminalColors[variant].brightWhite
    },

    'tokenColors': [
      {
        'settings': {
          'background': scheme.common.bg.hex(),
          'foreground': scheme.common.fg.hex()
        }
      },
      {
        'name': 'Comment',
        'scope': ['comment'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.comment.hex()
        }
      },


      {
        'name': 'String',
        'scope': ['string', 'constant.other.symbol'], //+
        'settings': {
          'foreground': scheme.syntax.string.hex()
        }
      },
      {
        'name': 'Regular Expressions and Escape Characters',
        'scope': ['string.regexp', 'constant.character', 'constant.other'],
        'settings': {
          'foreground': scheme.syntax.regexp.hex()
        }
      },


      {
        'name': 'Number',
        'scope': ['constant.numeric'],
        'settings': {
          'foreground': scheme.common.accent.hex()
        }
      },
      {
        'name': 'Built-in constants',
        'scope': ['constant.language'],
        'settings': {
          'foreground': scheme.common.accent.hex()
        }
      },


      {
        'name': 'Variable',
        'scope': ['variable'],
        'settings': {
          'foreground': scheme.common.fg.hex()
        }
      },
      {
        'name': 'Member Variable',
        'scope': ['variable.member'],
        'settings': {
          'foreground': scheme.syntax.markup.hex()
        }
      },
      {
        'name': 'Language variable',
        'scope': ['variable.language'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.tag.hex()
        }
      },


      // ------
      // Keywords
      {
        'name': 'Storage',
        'scope': ['storage'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex()
        }
      },
      {
        'name': 'Keyword',
        'scope': ['keyword'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex()
        }
      },


      // ------
      // Operators
      {
        'name': 'Operators',
        'scope': ['keyword.operator'],
        'settings': {
          'foreground': scheme.syntax.operator.hex()
        }
      },


      // ------
      // Punctuation
      {
        'name': 'Separators like ; or ,',
        'scope': ['punctuation.separator', 'punctuation.terminator'],
        'settings': {
          'foreground': scheme.common.fg.alpha(.7).hex()
        }
      },
      {
        'name': 'Punctuation',
        'scope': ['punctuation.section'],
        'settings': {
          'foreground': scheme.common.fg.hex()
        }
      },
      {
        'name': 'Accessor',
        'scope': ['punctuation.accessor'],
        'settings': {
          'foreground': scheme.syntax.operator.hex()
        }
      },


      // ------
      // Types
      {
        'name': 'Types fixes',
        'scope': [
          'source.java storage.type',
          'source.haskell storage.type',
          'source.c storage.type',
        ],
        'settings': {
          'foreground': scheme.syntax.entity.hex()
        }
      },
      {
        'name': 'Inherited class type',
        'scope': ['entity.other.inherited-class'],
        'settings': {
          'foreground': scheme.syntax.tag.hex()
        }
      },
      // Fixes
      {
        'name': 'Lambda arrow',
        'scope': ['storage.type.function'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex()
        }
      },
      {
        'name': 'Java primitive variable types',
        'scope': ['source.java storage.type.primitive'],
        'settings': {
          'foreground': scheme.syntax.tag.hex()
        }
      },


      // ------
      // Function/method names in definitions
      // and calls
      {
        'name': 'Function name',
        'scope': ['entity.name.function'],
        'settings': {
          'foreground': scheme.syntax.func.hex()
        }
      },
      {
        'name': 'Function arguments',
        'scope': ['variable.parameter', 'meta.parameter'],
        'settings': {
          'foreground': scheme.syntax.constant.hex()
        }
      },
      {
        'name': 'Function call',
        'scope': [
          'variable.function',
          'variable.annotation',
          'meta.function-call.generic',
          'support.function.go'
        ],
        'settings': {
          'foreground': scheme.syntax.func.hex()
        }
      },
      {
        'name': 'Library function',
        'scope': ['support.function', 'support.macro'],
        'settings': {
          'foreground': scheme.syntax.markup.hex()
        }
      },


      // ------
      // Import/export paths
      {
        'name': 'Imports and packages',
        'scope': ['entity.name.import', 'entity.name.package'],
        'settings': {
          'foreground': scheme.syntax.string.hex()
        }
      },
      {
        'name': 'Entity name',
        'scope': ['entity.name'],
        'settings': {
          'foreground': scheme.syntax.entity.hex()
        }
      },

      // Tag and their attributes
      {
        'name': 'Tag',
        'scope': ['entity.name.tag', 'meta.tag.sgml'],
        'settings': {
          'foreground': scheme.syntax.tag.hex()
        }
      },
      {
        'name': 'Tag start/end',
        'scope': [
          'punctuation.definition.tag.end',
          'punctuation.definition.tag.begin',
          'punctuation.definition.tag'
        ],
        'settings': {
          'foreground': scheme.syntax.tag.alpha(.5).hex()
        }
      },
      {
        'name': 'Tag attribute',
        'scope': ['entity.other.attribute-name'],
        'settings': {
          'foreground': scheme.syntax.func.hex()
        }
      },


      {
        'name': 'Library constant',
        'scope': ['support.constant'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.operator.hex()
        }
      },
      {
        'name': 'Library class/type',
        'scope': ['support.type', 'support.class', 'source.go storage.type'],
        'settings': {
          'foreground': scheme.syntax.tag.hex()
        }
      },
      {
        'name': 'Decorators/annotation',
        'scope': [
          'meta.decorator variable.other',
          'meta.decorator punctuation.decorator',
          'storage.type.annotation'
        ],
        'settings': {
          'foreground': scheme.syntax.special.hex()
        }
      },
      {
        'name': 'Invalid',
        'scope': ['invalid'],
        'settings': {
          'foreground': scheme.syntax.error.hex()
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
          'foreground': scheme.syntax.func.hex()
        }
      },
      {
        'name': 'CSS tag names',
        'scope': [
          'source.css entity.name.tag',
          'source.sass entity.name.tag',
          'source.scss entity.name.tag',
          'source.less entity.name.tag',
          'source.stylus entity.name.tag'
        ],
        'settings': {
          'foreground': scheme.syntax.entity.hex()
        }
      },
      {
        'name': 'CSS browser prefix',
        'scope': [
          'source.css support.type',
          'source.sass support.type',
          'source.scss support.type',
          'source.less support.type',
          'source.stylus support.type'
        ],
        'settings': {
          'foreground': scheme.syntax.comment.hex()
        }
      },
      {
        'name': 'CSS Properties',
        'scope': ['support.type.property-name'],
        'settings': {
          'fontStyle': 'normal',
          'foreground': scheme.syntax.tag.hex()
        }
      },
      {
        'name': 'Search Results Nums',
        'scope': ['constant.numeric.line-number.find-in-files - match'],
        'settings': {
          'foreground': scheme.syntax.comment.hex()
        }
      },
      {
        'name': 'Search Results Match Nums',
        'scope': ['constant.numeric.line-number.match'],
        'settings': {
          'foreground': scheme.syntax.keyword.hex()
        }
      },
      {
        'name': 'Search Results Lines',
        'scope': ['entity.name.filename.find-in-files'],
        'settings': {
          'foreground': scheme.syntax.string.hex()
        }
      },
      {
        'scope': ['message.error'],
        'settings': {
          'foreground': scheme.syntax.error.hex()
        }
      },
      {
        'name': 'Markup heading',
        'scope': ['markup.heading', 'markup.heading entity.name'],
        'settings': {
          'fontStyle': 'bold',
          'foreground': scheme.syntax.string.hex()
        }
      },
      {
        'name': 'Markup links',
        'scope': ['markup.underline.link', 'string.other.link'],
        'settings': {
          'foreground': scheme.syntax.tag.hex()
        }
      },
      {
        'name': 'Markup Italic',
        'scope': ['markup.italic'],
        'settings': {
          'fontStyle': 'italic',
          'foreground': scheme.syntax.markup.hex()
        }
      },
      {
        'name': 'Markup Bold',
        'scope': ['markup.bold'],
        'settings': {
          'fontStyle': 'bold',
          'foreground': scheme.syntax.markup.hex()
        }
      },
      {
        'name': 'Markup Bold/italic',
        'scope': ['markup.italic markup.bold', 'markup.bold markup.italic'],
        'settings': {
          'fontStyle': 'bold italic'
        }
      },
      {
        'name': 'Markup Code',
        'scope': ['markup.raw'],
        'settings': {
          'background': scheme.common.fg.alpha(.02).hex()
        }
      },
      {
        'name': 'Markup Code Inline',
        'scope': ['markup.raw.inline'],
        'settings': {
          'background': scheme.common.fg.alpha(.06).hex()
        }
      },
      {
        'name': 'Markdown Separator',
        'scope': ['meta.separator'],
        'settings': {
          'fontStyle': 'bold',
          'background': scheme.common.fg.alpha(.06).hex(),
          'foreground': scheme.syntax.comment.hex()
        }
      },
      {
        'name': 'Markup Blockquote',
        'scope': ['markup.quote'],
        'settings': {
          'foreground': scheme.syntax.regexp.hex(),
          'fontStyle': 'italic'
        }
      },
      {
        'name': 'Markup List Bullet',
        'scope': ['markup.list punctuation.definition.list.begin'],
        'settings': {
          'foreground': scheme.syntax.func.hex()
        }
      },
      {
        'name': 'Markup added',
        'scope': ['markup.inserted'],
        'settings': {
          'foreground': scheme.vcs.added.hex()
        }
      },
      {
        'name': 'Markup modified',
        'scope': ['markup.changed'],
        'settings': {
          'foreground': scheme.vcs.modified.hex()
        }
      },
      {
        'name': 'Markup removed',
        'scope': ['markup.deleted'],
        'settings': {
          'foreground': scheme.vcs.removed.hex()
        }
      },
      {
        'name': 'Markup Strike',
        'scope': ['markup.strike'],
        'settings': {
          'foreground': scheme.syntax.special.hex()
        }
      },
      {
        'name': 'Markup Table',
        'scope': ['markup.table'],
        'settings': {
          'background': scheme.common.fg.alpha(.06).hex(),
          'foreground': scheme.syntax.tag.hex()
        }
      },
      {
        'name': 'Markup Raw Inline',
        'scope': ['text.html.markdown markup.inline.raw'],
        'settings': {
          'foreground': scheme.syntax.operator.hex()
        }
      },
      {
        'name': 'Markdown - Line Break',
        'scope': ['text.html.markdown meta.dummy.line-break'],
        'settings': {
          'background': scheme.syntax.comment.hex(),
          'foreground': scheme.syntax.comment.hex()
        }
      },
      {
        'name': 'Markdown - Raw Block Fenced',
        'scope': ['punctuation.definition.markdown'],
        'settings': {
          'background': scheme.common.fg.hex(),
          'foreground': scheme.syntax.comment.hex()
        }
      }
    ]
  }
}
