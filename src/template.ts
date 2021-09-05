import * as ayu from 'ayu'

export type SchemeName = 'light' | 'dark' | 'mirage'

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
    type: variant === 'light' ? 'light' : 'dark',
    colors: {
      // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

      // CONTRAST COLOURS
      // --

      // BASE COLOURS
      focusBorder: scheme.common.accent.alpha(0.7).hex(),
      foreground: scheme.ui.fg.hex(),
      'widget.shadow': scheme.ui.panel.shadow.hex(),
      'selection.background': scheme.editor.selection.active.hex(),
      'icon.foreground': scheme.ui.fg.hex(),
      errorForeground: scheme.common.error.hex(),
      descriptionForeground: scheme.ui.fg.hex(),

      // TEXT COLOURS
      'textBlockQuote.background': scheme.ui.panel.bg.hex(),
      'textLink.foreground': scheme.common.accent.hex(),
      'textLink.activeForeground': scheme.common.accent.hex(),
      'textPreformat.foreground': scheme.editor.fg.hex(),

      // BUTTON CONTROL
      'button.background': scheme.common.accent.hex(),
      'button.foreground': scheme.ui.bg.hex(),
      'button.hoverBackground': scheme.common.accent.darken(0.1).hex(),
      'button.secondaryBackground': scheme.ui.fg.alpha(0.2).hex(),
      'button.secondaryForeground': scheme.editor.fg.hex(),
      'button.secondaryHoverBackground': scheme.ui.fg.alpha(0.5).hex(),

      // DROPDOWN CONTROL
      'dropdown.background': scheme.editor.bg.hex(),
      'dropdown.foreground': scheme.ui.fg.hex(),
      'dropdown.border': scheme.ui.fg.alpha(0.27).hex(),

      // INPUT CONTROL
      'input.background': scheme.editor.bg.hex(),
      'input.border': scheme.ui.fg.alpha(0.27).hex(),
      'input.foreground': scheme.editor.fg.hex(),
      'input.placeholderForeground': scheme.ui.fg.alpha(0.5).hex(),
      'inputOption.activeBorder': (variant == 'light' ? scheme.common.accent.darken(0.2) : scheme.common.accent)
        .alpha(0.3)
        .hex(),
      'inputOption.activeBackground': scheme.common.accent.alpha(0.2).hex(),
      'inputOption.activeForeground':
        variant == 'light' ? scheme.common.accent.darken(0.2).hex() : scheme.common.accent.hex(),
      'inputValidation.errorBackground': scheme.editor.bg.hex(),
      'inputValidation.errorBorder': scheme.common.error.hex(),
      'inputValidation.infoBackground': scheme.ui.bg.hex(),
      'inputValidation.infoBorder': scheme.syntax.tag.hex(),
      'inputValidation.warningBackground': scheme.ui.bg.hex(),
      'inputValidation.warningBorder': scheme.syntax.func.hex(),

      // SCROLLBAR CONTROL
      'scrollbar.shadow': scheme.ui.line.alpha(0).hex(),
      'scrollbarSlider.background': scheme.ui.fg.alpha(0.4).hex(),
      'scrollbarSlider.hoverBackground': scheme.ui.fg.alpha(0.6).hex(),
      'scrollbarSlider.activeBackground': scheme.ui.fg.alpha(0.7).hex(),

      // BADGE
      'badge.background': scheme.common.accent.alpha(0.2).hex(),
      'badge.foreground': variant == 'light' ? scheme.common.accent.darken(0.2).hex() : scheme.common.accent.hex(),

      // PROGRESS BAR
      'progressBar.background': scheme.common.accent.hex(),

      // LISTS AND TREES
      'list.activeSelectionBackground': scheme.ui.selection.active.hex(),
      'list.activeSelectionForeground': scheme.editor.fg.hex(),
      // 'list.activeSelectionIconForeground': scheme.editor.fg.alpha(.7).hex(),
      'list.focusBackground': scheme.ui.selection.active.hex(),
      'list.focusForeground': scheme.editor.fg.hex(),
      'list.focusOutline': scheme.ui.selection.active.hex(),
      'list.highlightForeground': scheme.common.accent.hex(),
      'list.deemphasizedForeground': scheme.common.error.hex(),
      'list.hoverBackground': scheme.ui.selection.active.hex(),
      // 'list.hoverForeground': scheme.ui.fg.hex(),
      'list.inactiveSelectionBackground': scheme.ui.selection.normal.hex(),
      'list.inactiveSelectionForeground': scheme.ui.fg.hex(),
      'list.invalidItemForeground': scheme.ui.fg.alpha(0.3).hex(),
      'list.errorForeground': scheme.common.error.hex(),
      'tree.indentGuidesStroke': scheme.editor.indentGuide.active.hex(),

      'listFilterWidget.background': scheme.ui.panel.bg.hex(),
      'listFilterWidget.outline': scheme.common.accent.hex(),
      'listFilterWidget.noMatchesOutline': scheme.common.error.hex(),
      'list.filterMatchBackground': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      'list.filterMatchBorder': scheme.editor.findMatch.inactive.hex(),

      // ACTIVITY BAR
      'activityBar.background': bordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'activityBar.foreground': scheme.ui.fg.alpha(0.8).hex(),
      'activityBar.inactiveForeground': scheme.ui.fg.alpha(0.6).hex(),
      'activityBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'activityBar.activeBorder': scheme.common.accent.alpha(0.7).hex(),
      'activityBarBadge.background': scheme.common.accent.hex(),
      'activityBarBadge.foreground': scheme.ui.bg.hex(),

      // SIDE BAR
      'sideBar.background': scheme.ui.bg.hex(),
      'sideBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'sideBarTitle.foreground': scheme.ui.fg.hex(),
      'sideBarSectionHeader.background': scheme.ui.bg.hex(),
      'sideBarSectionHeader.foreground': scheme.ui.fg.hex(),
      'sideBarSectionHeader.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),

      // MINIMAP
      'minimap.background': bordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'minimap.selectionHighlight': scheme.editor.selection.active.hex(),
      'minimap.errorHighlight': scheme.common.error.hex(),
      'minimap.findMatchHighlight': scheme.editor.findMatch.active.hex(),
      'minimapGutter.addedBackground': scheme.vcs.added.hex(),
      'minimapGutter.modifiedBackground': scheme.vcs.modified.hex(),
      'minimapGutter.deletedBackground': scheme.vcs.removed.hex(),

      // EDITOR GROUPS & TABS
      'editorGroup.border': scheme.ui.line.hex(),
      'editorGroup.background': scheme.ui.panel.bg.hex(),
      'editorGroupHeader.noTabsBackground': scheme.ui.bg.hex(),
      'editorGroupHeader.tabsBackground': scheme.ui.bg.hex(),
      'editorGroupHeader.tabsBorder': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'tab.activeBackground': bordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'tab.activeForeground': scheme.editor.fg.hex(),
      'tab.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'tab.activeBorder': bordered ? scheme.editor.bg.hex() : scheme.common.accent.hex(),
      'tab.activeBorderTop': bordered ? scheme.common.accent.hex() : undefined,
      'tab.unfocusedActiveBorder': bordered ? undefined : scheme.ui.fg.hex(),
      'tab.unfocusedActiveBorderTop': bordered ? scheme.ui.fg.hex() : undefined,
      'tab.inactiveBackground': scheme.ui.bg.hex(),
      'tab.inactiveForeground': scheme.ui.fg.hex(),
      'tab.unfocusedActiveForeground': scheme.ui.fg.hex(),
      'tab.unfocusedInactiveForeground': scheme.ui.fg.hex(),

      // EDITOR
      'editor.background': bordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'editor.foreground': scheme.editor.fg.hex(),
      'editorLineNumber.foreground': scheme.editor.gutter.normal.hex(),
      'editorLineNumber.activeForeground': scheme.editor.gutter.active.hex(),
      'editorCursor.foreground': scheme.common.accent.hex(),

      // EDITOR SELECTIONS
      'editor.inactiveSelectionBackground': scheme.editor.selection.inactive.hex(),
      'editor.selectionBackground': scheme.editor.selection.active.hex(),
      'editor.selectionHighlightBackground': scheme.vcs.added.alpha(0.15).hex(),
      'editor.selectionHighlightBorder': scheme.vcs.added.alpha(0).hex(),
      'editor.wordHighlightBackground': scheme.vcs.modified.alpha(0.08).hex(),
      'editor.wordHighlightStrongBackground': scheme.vcs.added.alpha(0.08).hex(),
      'editor.wordHighlightBorder': scheme.vcs.modified.alpha(0.5).hex(),
      'editor.wordHighlightStrongBorder': scheme.vcs.added.alpha(0.5).hex(),

      // EDITOR SEARCH
      'editor.findMatchBackground': scheme.editor.findMatch.active.hex(),
      'editor.findMatchBorder': scheme.editor.findMatch.active.hex(),
      'editor.findMatchHighlightBackground': scheme.editor.findMatch.inactive.hex(),
      'editor.findMatchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      'editor.findRangeHighlightBackground': scheme.editor.findMatch.inactive.alpha(0.25).hex(),
      // 'editor.findRangeHighlightBorder': scheme.editor.findMatch.inactive.forceAlpha(0).hex(),
      'editor.rangeHighlightBackground': scheme.editor.findMatch.active.alpha(0.2).hex(),

      // 'editor.hoverHighlightBackground': '',

      'editor.lineHighlightBackground': scheme.editor.line.hex(),
      // 'editor.lineHighlightBorder': '',

      'editorLink.activeForeground': scheme.common.accent.hex(),

      'editorWhitespace.foreground': scheme.editor.gutter.normal.hex(),

      'editorIndentGuide.background': scheme.editor.indentGuide.normal.hex(),
      'editorIndentGuide.activeBackground': scheme.editor.indentGuide.active.hex(),

      'editorRuler.foreground': scheme.editor.indentGuide.normal.hex(),
      'editorCodeLens.foreground': scheme.syntax.comment.hex(),

      'editorBracketMatch.background': scheme.editor.gutter.normal.alpha(0.3).hex(),
      'editorBracketMatch.border': scheme.editor.gutter.active.alpha(0.3).hex(),

      // SNIPPETS
      'editor.snippetTabstopHighlightBackground': scheme.vcs.added.alpha(0.2).hex(),

      // OVERVIEW RULER
      'editorOverviewRuler.border': scheme.ui.line.hex(),
      'editorOverviewRuler.modifiedForeground': scheme.vcs.modified.hex(),
      'editorOverviewRuler.addedForeground': scheme.vcs.added.hex(),
      'editorOverviewRuler.deletedForeground': scheme.vcs.removed.hex(),
      'editorOverviewRuler.errorForeground': scheme.common.error.hex(),
      'editorOverviewRuler.warningForeground': scheme.common.accent.hex(),
      'editorOverviewRuler.bracketMatchForeground': scheme.editor.gutter.normal.alpha(0.7).hex(),
      'editorOverviewRuler.wordHighlightForeground': scheme.vcs.modified.alpha(0.4).hex(),
      'editorOverviewRuler.wordHighlightStrongForeground': scheme.vcs.added.alpha(0.4).hex(),
      'editorOverviewRuler.findMatchForeground': scheme.editor.findMatch.active.hex(),

      // ERRORS AND WARNINGS
      'editorError.foreground': scheme.common.error.hex(),
      'editorWarning.foreground': scheme.common.accent.hex(),

      // GUTTER
      'editorGutter.modifiedBackground': scheme.vcs.modified.alpha(0.8).hex(),
      'editorGutter.addedBackground': scheme.vcs.added.alpha(0.8).hex(),
      'editorGutter.deletedBackground': scheme.vcs.removed.alpha(0.8).hex(),

      // DIFF EDITOR
      'diffEditor.insertedTextBackground': scheme.vcs.added.alpha(0.12).hex(),
      'diffEditor.removedTextBackground': scheme.vcs.removed.alpha(0.12).hex(),
      'diffEditor.diagonalFill': scheme.ui.line.hex(),

      // EDITOR WIDGET
      'editorWidget.background': bordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'editorWidget.border': scheme.ui.line.hex(),
      'editorHoverWidget.background': bordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'editorHoverWidget.border': scheme.ui.line.hex(),
      'editorSuggestWidget.background': scheme.ui.panel.bg.hex(),
      'editorSuggestWidget.border': scheme.ui.line.hex(),
      'editorSuggestWidget.highlightForeground': scheme.common.accent.hex(),
      'editorSuggestWidget.selectedBackground': scheme.ui.selection.active.hex(),

      // DEBUG EXCEPTION
      'debugExceptionWidget.border': scheme.ui.line.hex(),
      'debugExceptionWidget.background': scheme.ui.panel.bg.hex(),

      // EDITOR MARKER
      'editorMarkerNavigation.background': scheme.ui.panel.bg.hex(),

      // PEEK VIEW
      'peekView.border': scheme.ui.selection.active.hex(),

      'peekViewTitle.background': scheme.ui.selection.active.hex(),
      'peekViewTitleDescription.foreground': scheme.ui.fg.hex(),
      'peekViewTitleLabel.foreground': scheme.editor.fg.hex(),

      'peekViewEditor.background': bordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'peekViewEditor.matchHighlightBackground': scheme.editor.findMatch.inactive.hex(), // ??
      'peekViewEditor.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(), // ??

      'peekViewResult.background': bordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'peekViewResult.fileForeground': scheme.editor.fg.hex(),
      'peekViewResult.lineForeground': scheme.ui.fg.hex(),
      'peekViewResult.matchHighlightBackground': scheme.editor.findMatch.inactive.hex(), // ???
      // 'peekViewResult.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(.3).hex(), // doesn't exist
      'peekViewResult.selectionBackground': scheme.ui.selection.active.hex(), // ???
      // 'peekViewResult.selectionForeground': scheme.editor.fg.hex(), // ???

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
      'panel.background': scheme.ui.bg.hex(),
      'panel.border': scheme.ui.line.hex(),
      'panelTitle.activeBorder': scheme.common.accent.hex(), // ???
      'panelTitle.activeForeground': scheme.editor.fg.hex(),
      'panelTitle.inactiveForeground': scheme.ui.fg.hex(),

      // STATUS BAR
      'statusBar.background': scheme.ui.bg.hex(),
      'statusBar.foreground': scheme.ui.fg.hex(),
      'statusBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'statusBar.debuggingBackground': scheme.syntax.operator.hex(),
      'statusBar.debuggingForeground': scheme.editor.bg.hex(),
      'statusBar.noFolderBackground': scheme.ui.panel.bg.hex(),
      'statusBarItem.activeBackground': scheme.ui.fg.alpha(0.2).hex(),
      'statusBarItem.hoverBackground': scheme.ui.fg.alpha(0.2).hex(),
      'statusBarItem.prominentBackground': scheme.ui.line.hex(),
      'statusBarItem.prominentHoverBackground': '#00000030',
      'statusBarItem.remoteBackground': scheme.common.accent.hex(),
      'statusBarItem.remoteForeground': scheme.editor.bg.hex(),

      // TITLE BAR
      'titleBar.activeBackground': scheme.ui.bg.hex(),
      'titleBar.activeForeground': scheme.editor.fg.hex(),
      'titleBar.inactiveBackground': scheme.ui.bg.hex(),
      'titleBar.inactiveForeground': scheme.ui.fg.hex(),
      'titleBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),

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
      'extensionButton.prominentForeground': scheme.editor.bg.hex(),
      'extensionButton.prominentBackground': scheme.common.accent.hex(),
      'extensionButton.prominentHoverBackground': scheme.common.accent.darken(0.1).hex(),

      // QUICK PICKER
      'pickerGroup.border': scheme.ui.line.hex(),
      'pickerGroup.foreground': scheme.ui.fg.alpha(0.5).hex(),

      // DEBUG
      'debugToolBar.background': scheme.ui.panel.bg.hex(),
      'debugIcon.breakpointForeground': scheme.syntax.operator.hex(),
      'debugIcon.breakpointDisabledForeground': scheme.syntax.operator.alpha(0.5).hex(),
      'debugConsoleInputIcon.foreground': scheme.common.accent.hex(),
      // 'debugToolBar.border': '',

      // WELCOME PAGE
      'welcomePage.tileBackground': scheme.ui.bg.hex(),
      'welcomePage.tileShadow': scheme.ui.panel.shadow.hex(),
      'welcomePage.progress.background': scheme.editor.line.hex(),
      'welcomePage.buttonBackground': scheme.common.accent.alpha(0.4).hex(),
      // 'welcomePage.buttonHoverBackground': '?'
      'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg.hex(),

      // GIT
      'gitDecoration.modifiedResourceForeground': scheme.vcs.modified.alpha(0.7).hex(),
      'gitDecoration.deletedResourceForeground': scheme.vcs.removed.alpha(0.7).hex(),
      'gitDecoration.untrackedResourceForeground': scheme.vcs.added.alpha(0.7).hex(),
      'gitDecoration.ignoredResourceForeground': scheme.ui.fg.alpha(0.5).hex(),
      'gitDecoration.conflictingResourceForeground': '',
      'gitDecoration.submoduleResourceForeground': scheme.syntax.constant.alpha(0.7).hex(),

      // Settings
      'settings.headerForeground': scheme.editor.fg.hex(),
      'settings.modifiedItemIndicator': scheme.vcs.modified.hex(),

      // KEYBINDING
      'keybindingLabel.background': scheme.ui.fg.alpha(0.1).hex(),
      'keybindingLabel.foreground': scheme.editor.fg.hex(),
      'keybindingLabel.border': scheme.editor.fg.alpha(0.1).hex(),
      'keybindingLabel.bottomBorder': scheme.editor.fg.alpha(0.1).hex(),

      // TERMINAL
      'terminal.background': scheme.ui.bg.hex(),
      'terminal.foreground': scheme.editor.fg.hex(),
      'terminal.ansiBlack': terminalColors[variant].black,
      'terminal.ansiRed': scheme.syntax.markup.darken(0.1).hex(),
      'terminal.ansiGreen': scheme.vcs.added.hex(),
      'terminal.ansiYellow': scheme.syntax.func.darken(0.1).hex(),
      'terminal.ansiBlue': scheme.syntax.entity.darken(0.1).hex(),
      'terminal.ansiMagenta': scheme.syntax.constant.darken(0.1).hex(),
      'terminal.ansiCyan': scheme.syntax.regexp.darken(0.1).hex(),
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

    tokenColors: [
      {
        settings: {
          background: scheme.ui.bg.hex(),
          foreground: scheme.editor.fg.hex()
        }
      },
      {
        name: 'Comment',
        scope: ['comment'],
        settings: {
          fontStyle: 'italic',
          foreground: scheme.syntax.comment.hex()
        }
      },

      {
        name: 'String',
        scope: ['string', 'constant.other.symbol'], //+
        settings: {
          foreground: scheme.syntax.string.hex()
        }
      },
      {
        name: 'Regular Expressions and Escape Characters',
        scope: ['string.regexp', 'constant.character', 'constant.other'],
        settings: {
          foreground: scheme.syntax.regexp.hex()
        }
      },

      {
        name: 'Number',
        scope: ['constant.numeric'],
        settings: {
          foreground: scheme.syntax.constant.hex()
        }
      },
      {
        name: 'Built-in constants',
        scope: ['constant.language'],
        settings: {
          foreground: scheme.syntax.constant.hex()
        }
      },

      {
        name: 'Variable',
        scope: ['variable', 'variable.parameter.function-call'],
        settings: {
          foreground: scheme.editor.fg.hex()
        }
      },
      {
        name: 'Member Variable',
        scope: ['variable.member'],
        settings: {
          foreground: scheme.syntax.markup.hex()
        }
      },
      {
        name: 'Language variable',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: scheme.syntax.tag.hex()
        }
      },

      // ------
      // Keywords
      {
        name: 'Storage',
        scope: ['storage'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Keyword',
        scope: ['keyword'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },

      // ------
      // Operators
      {
        name: 'Operators',
        scope: ['keyword.operator'],
        settings: {
          foreground: scheme.syntax.operator.hex()
        }
      },

      // ------
      // Punctuation
      {
        name: 'Separators like ; or ,',
        scope: ['punctuation.separator', 'punctuation.terminator'],
        settings: {
          foreground: scheme.editor.fg.alpha(0.7).hex()
        }
      },
      {
        name: 'Punctuation',
        scope: ['punctuation.section'],
        settings: {
          foreground: scheme.editor.fg.hex()
        }
      },
      {
        name: 'Accessor',
        scope: ['punctuation.accessor'],
        settings: {
          foreground: scheme.syntax.operator.hex()
        }
      },
      {
        name: 'JavaScript/TypeScript interpolation punctuation',
        scope: ['punctuation.definition.template-expression'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Ruby interpolation punctuation',
        scope: ['punctuation.section.embedded'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Interpolation text',
        scope: ['meta.embedded'],
        settings: {
          foreground: scheme.editor.fg.hex()
        }
      },

      // ------
      // Types
      {
        name: 'Types fixes',
        scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
        settings: {
          foreground: scheme.syntax.entity.hex()
        }
      },
      {
        name: 'Inherited class type',
        scope: ['entity.other.inherited-class'],
        settings: {
          foreground: scheme.syntax.tag.hex()
        }
      },
      // Fixes
      {
        name: 'Lambda arrow',
        scope: ['storage.type.function'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Java primitive variable types',
        scope: ['source.java storage.type.primitive'],
        settings: {
          foreground: scheme.syntax.tag.hex()
        }
      },

      // ------
      // Function/method names in definitions
      // and calls
      {
        name: 'Function name',
        scope: ['entity.name.function'],
        settings: {
          foreground: scheme.syntax.func.hex()
        }
      },
      {
        name: 'Function arguments',
        scope: ['variable.parameter', 'meta.parameter'],
        settings: {
          foreground: scheme.syntax.constant.hex()
        }
      },
      {
        name: 'Function call',
        scope: ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
        settings: {
          foreground: scheme.syntax.func.hex()
        }
      },
      {
        name: 'Library function',
        scope: ['support.function', 'support.macro'],
        settings: {
          foreground: scheme.syntax.markup.hex()
        }
      },

      // ------
      // Import/export paths
      {
        name: 'Imports and packages',
        scope: ['entity.name.import', 'entity.name.package'],
        settings: {
          foreground: scheme.syntax.string.hex()
        }
      },
      {
        name: 'Entity name',
        scope: ['entity.name'],
        settings: {
          foreground: scheme.syntax.entity.hex()
        }
      },

      // Tag and their attributes
      {
        name: 'Tag',
        scope: ['entity.name.tag', 'meta.tag.sgml'],
        settings: {
          foreground: scheme.syntax.tag.hex()
        }
      },
      {
        name: 'JSX Component',
        scope: ['support.class.component'],
        settings: {
          foreground: scheme.syntax.entity.hex()
        }
      },
      {
        name: 'Tag start/end',
        scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
        settings: {
          foreground: scheme.syntax.tag.alpha(0.5).hex()
        }
      },
      {
        name: 'Tag attribute',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: scheme.syntax.func.hex()
        }
      },

      {
        name: 'Library constant',
        scope: ['support.constant'],
        settings: {
          fontStyle: 'italic',
          foreground: scheme.syntax.operator.hex()
        }
      },
      {
        name: 'Library class/type',
        scope: ['support.type', 'support.class', 'source.go storage.type'],
        settings: {
          foreground: scheme.syntax.tag.hex()
        }
      },
      {
        name: 'Decorators/annotation',
        scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
        settings: {
          foreground: scheme.syntax.special.hex()
        }
      },
      {
        name: 'Invalid',
        scope: ['invalid'],
        settings: {
          foreground: scheme.common.error.hex()
        }
      },
      {
        name: 'diff.header',
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: '#c594c5'
        }
      },
      {
        name: 'Ruby class methods',
        scope: ['source.ruby variable.other.readwrite'],
        settings: {
          foreground: scheme.syntax.func.hex()
        }
      },
      {
        name: 'CSS tag names',
        scope: [
          'source.css entity.name.tag',
          'source.sass entity.name.tag',
          'source.scss entity.name.tag',
          'source.less entity.name.tag',
          'source.stylus entity.name.tag'
        ],
        settings: {
          foreground: scheme.syntax.entity.hex()
        }
      },
      {
        name: 'CSS browser prefix',
        scope: [
          'source.css support.type',
          'source.sass support.type',
          'source.scss support.type',
          'source.less support.type',
          'source.stylus support.type'
        ],
        settings: {
          foreground: scheme.syntax.comment.hex()
        }
      },
      {
        name: 'CSS Properties',
        scope: ['support.type.property-name'],
        settings: {
          fontStyle: 'normal',
          foreground: scheme.syntax.tag.hex()
        }
      },
      {
        name: 'Search Results Numbers',
        scope: ['constant.numeric.line-number.find-in-files - match'],
        settings: {
          foreground: scheme.syntax.comment.hex()
        }
      },
      {
        name: 'Search Results Match Numbers',
        scope: ['constant.numeric.line-number.match'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Search Results Lines',
        scope: ['entity.name.filename.find-in-files'],
        settings: {
          foreground: scheme.syntax.string.hex()
        }
      },
      {
        scope: ['message.error'],
        settings: {
          foreground: scheme.common.error.hex()
        }
      },
      {
        name: 'Markup heading',
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: scheme.syntax.string.hex()
        }
      },
      {
        name: 'Markup links',
        scope: ['markup.underline.link', 'string.other.link'],
        settings: {
          foreground: scheme.syntax.tag.hex()
        }
      },
      {
        name: 'Markup Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: scheme.syntax.markup.hex()
        }
      },
      {
        name: 'Markup Bold',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
          foreground: scheme.syntax.markup.hex()
        }
      },
      {
        name: 'Markup Bold/italic',
        scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
        settings: {
          fontStyle: 'bold italic'
        }
      },
      {
        name: 'Markup Code',
        scope: ['markup.raw'],
        settings: {
          background: scheme.editor.fg.alpha(0.02).hex()
        }
      },
      {
        name: 'Markup Code Inline',
        scope: ['markup.raw.inline'],
        settings: {
          background: scheme.editor.fg.alpha(0.06).hex()
        }
      },
      {
        name: 'Markdown Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: 'bold',
          background: scheme.editor.fg.alpha(0.06).hex(),
          foreground: scheme.syntax.comment.hex()
        }
      },
      {
        name: 'Markup Blockquote',
        scope: ['markup.quote'],
        settings: {
          foreground: scheme.syntax.regexp.hex(),
          fontStyle: 'italic'
        }
      },
      {
        name: 'Markup List Bullet',
        scope: ['markup.list punctuation.definition.list.begin'],
        settings: {
          foreground: scheme.syntax.func.hex()
        }
      },
      {
        name: 'Markup added',
        scope: ['markup.inserted'],
        settings: {
          foreground: scheme.vcs.added.hex()
        }
      },
      {
        name: 'Markup modified',
        scope: ['markup.changed'],
        settings: {
          foreground: scheme.vcs.modified.hex()
        }
      },
      {
        name: 'Markup removed',
        scope: ['markup.deleted'],
        settings: {
          foreground: scheme.vcs.removed.hex()
        }
      },
      {
        name: 'Markup Strike',
        scope: ['markup.strike'],
        settings: {
          foreground: scheme.syntax.special.hex()
        }
      },
      {
        name: 'Markup Table',
        scope: ['markup.table'],
        settings: {
          background: scheme.editor.fg.alpha(0.06).hex(),
          foreground: scheme.syntax.tag.hex()
        }
      },
      {
        name: 'Markup Raw Inline',
        scope: ['text.html.markdown markup.inline.raw'],
        settings: {
          foreground: scheme.syntax.operator.hex()
        }
      },
      {
        name: 'Markdown - Line Break',
        scope: ['text.html.markdown meta.dummy.line-break'],
        settings: {
          background: scheme.syntax.comment.hex(),
          foreground: scheme.syntax.comment.hex()
        }
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['punctuation.definition.markdown'],
        settings: {
          background: scheme.editor.fg.hex(),
          foreground: scheme.syntax.comment.hex()
        }
      }
    ],

    semanticHighlighting: true,
    semanticTokenColors: {
      'parameter.label': scheme.editor.fg.hex()
    }
  }
}
