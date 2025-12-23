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
      focusBorder: scheme.common.accent.tint.hex(),
      foreground: scheme.ui.fg.hex(),
      'widget.border': scheme.ui.line.hex(),
      'widget.shadow': scheme.ui.panel.shadow.hex(),
      'selection.background': scheme.editor.selection.active.hex(),
      'icon.foreground': scheme.ui.fg.hex(),
      errorForeground: scheme.common.error.hex(),
      descriptionForeground: scheme.ui.fg.hex(),

      // TEXT COLOURS
      'textBlockQuote.background': scheme.ui.panel.bg.hex(),
      'textLink.foreground': scheme.common.accent.tint.hex(),
      'textLink.activeForeground': scheme.common.accent.tint.hex(),
      'textPreformat.foreground': scheme.editor.fg.hex(),

      // ACTION COLORS
      'toolbar.hoverBackground': scheme.ui.fg.alpha(0.3).hex(),
      // 'toolbar.hoverOutline': scheme.ui.fg.alpha(0.6).hex(),
      //'toolbar.activeBackground':
      //'editorActionList.background':
      //'editorActionList.foreground':
      //'editorActionList.focusForeground':
      //'editorActionList.focusBackground':

      // BUTTON CONTROL
      'button.background': scheme.common.accent.tint.hex(),
      'button.foreground': scheme.common.accent.on.hex(),
      'button.border': scheme.common.accent.on.alpha(0.1).hex(),
      'button.separator': scheme.common.accent.on.alpha(0.3).hex(),
      'button.hoverBackground': scheme.common.accent.tint.darken(0.2).hex(),
      'button.secondaryBackground': scheme.ui.fg.alpha(0.2).hex(),
      'button.secondaryForeground': scheme.editor.fg.hex(),
      'button.secondaryHoverBackground': scheme.ui.fg.alpha(0.5).hex(),

      // DROPDOWN CONTROL
      'dropdown.background': scheme.ui.panel.bg.hex(),
      'dropdown.foreground': scheme.ui.fg.hex(),
      'dropdown.border': scheme.ui.line.hex(),

      // INPUT CONTROL
      'input.background': scheme.editor.bg.hex(),
      'input.border': scheme.ui.fg.alpha(0.2).hex(),
      'input.foreground': scheme.editor.fg.hex(),
      'input.placeholderForeground': scheme.ui.fg.alpha(0.5).hex(),
      'inputOption.hoverBackground': scheme.ui.fg.alpha(0.2).hex(),
      'inputOption.activeBorder': scheme.common.accent.tint.alpha(0.2).hex(),
      'inputOption.activeBackground': scheme.common.accent.tint.alpha(0.1).hex(),
      'inputOption.activeForeground': scheme.common.accent.tint.hex(),
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
      'badge.background': scheme.common.accent.tint.alpha(0.2).hex(),
      'badge.foreground':
        variant == 'light'
          ? scheme.common.accent.tint.darken(0.2).hex()
          : scheme.common.accent.tint.hex(),

      // PROGRESS BAR
      'progressBar.background': scheme.common.accent.tint.hex(),

      // LISTS AND TREES
      'list.activeSelectionBackground': scheme.ui.selection.active.hex(),
      'list.activeSelectionForeground': scheme.editor.fg.hex(),
      // 'list.activeSelectionIconForeground': scheme.editor.fg.alpha(.7).hex(),
      'list.focusBackground': scheme.ui.selection.active.hex(),
      'list.focusForeground': scheme.editor.fg.hex(),
      'list.focusOutline': scheme.ui.selection.active.hex(),
      'list.highlightForeground': scheme.common.accent.tint.hex(),
      'list.deemphasizedForeground': scheme.common.error.hex(),
      'list.hoverBackground': scheme.ui.selection.active.hex(),
      // 'list.hoverForeground': scheme.ui.fg.hex(),
      'list.inactiveSelectionBackground': scheme.ui.selection.normal.hex(),
      'list.inactiveSelectionForeground': scheme.ui.fg.hex(),
      'list.invalidItemForeground': scheme.ui.fg.alpha(0.3).hex(),
      'list.errorForeground': scheme.common.error.hex(),
      'tree.indentGuidesStroke': scheme.editor.indentGuide.active.hex(),

      'listFilterWidget.background': scheme.ui.panel.bg.hex(),
      'listFilterWidget.outline': scheme.common.accent.tint.hex(),
      'listFilterWidget.noMatchesOutline': scheme.common.error.hex(),
      'list.filterMatchBackground': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      'list.filterMatchBorder': scheme.editor.findMatch.inactive.hex(),

      // ACTIVITY BAR
      'activityBar.background': scheme.ui.bg.hex(),
      'activityBar.foreground': scheme.ui.fg.alpha(0.8).hex(),
      'activityBar.inactiveForeground': scheme.ui.fg.alpha(0.6).hex(),
      'activityBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'activityBar.activeBorder': scheme.common.accent.tint.hex(),
      'activityBarBadge.background': scheme.common.accent.tint.hex(),
      'activityBarBadge.foreground': scheme.common.accent.on.hex(),
      'activityBarTop.foreground':
        variant == 'light' ? scheme.ui.fg.darken(0.3).hex() : scheme.ui.fg.brighten(0.5).hex(),
      'activityBarTop.activeBorder': scheme.common.accent.tint.hex(),

      // SIDE BAR
      'sideBar.background': scheme.ui.bg.hex(),
      'sideBar.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'sideBarTitle.foreground': scheme.ui.fg.hex(),
      'sideBarSectionHeader.background': scheme.ui.bg.hex(),
      'sideBarSectionHeader.foreground': scheme.ui.fg.hex(),
      'sideBarSectionHeader.border': bordered ? scheme.ui.line.hex() : scheme.ui.bg.hex(),
      'sideBarStickyScroll.border': scheme.ui.line.hex(),
      'sideBarStickyScroll.shadow': scheme.ui.panel.shadow.hex(),

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
      'tab.activeBorder': bordered ? scheme.editor.bg.hex() : scheme.common.accent.tint.hex(),
      'tab.activeBorderTop': bordered ? scheme.common.accent.tint.hex() : undefined,
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
      'editorCursor.foreground': scheme.common.accent.tint.hex(),

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
      'editor.findMatchHighlightBackground': scheme.editor.findMatch.inactive.hex(),
      // 'editor.findMatchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      // 'editor.findRangeHighlightBackground': scheme.editor.findMatch.inactive.alpha(0.25).hex(),
      // 'editor.findRangeHighlightBorder': scheme.editor.findMatch.inactive.alpha(0).hex(),

      'editor.rangeHighlightBackground': scheme.editor.findMatch.active.alpha(0.2).hex(),

      // 'editor.hoverHighlightBackground': '',

      'editor.lineHighlightBackground': scheme.editor.line.hex(),
      // 'editor.lineHighlightBorder': '',

      'editorLink.activeForeground': scheme.common.accent.tint.hex(),

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
      'editorOverviewRuler.warningForeground': scheme.common.accent.tint.hex(),
      'editorOverviewRuler.bracketMatchForeground': scheme.editor.gutter.normal.alpha(0.7).hex(),
      'editorOverviewRuler.wordHighlightForeground': scheme.vcs.modified.alpha(0.4).hex(),
      'editorOverviewRuler.wordHighlightStrongForeground': scheme.vcs.added.alpha(0.4).hex(),
      'editorOverviewRuler.findMatchForeground': scheme.editor.findMatch.active.hex(),

      // ERRORS AND WARNINGS
      'editorError.foreground': scheme.common.error.hex(),
      'editorWarning.foreground': scheme.common.accent.tint.hex(),

      // GUTTER
      'editorGutter.modifiedBackground': scheme.vcs.modified.hex(),
      'editorGutter.addedBackground': scheme.vcs.added.hex(),
      'editorGutter.deletedBackground': scheme.vcs.removed.hex(),

      // DIFF EDITOR
      'diffEditor.insertedTextBackground': scheme.vcs.added.alpha(0.12).hex(),
      'diffEditor.removedTextBackground': scheme.vcs.removed.alpha(0.12).hex(),
      'diffEditor.diagonalFill': scheme.ui.line.hex(),

      // EDITOR WIDGET
      'editorWidget.background': scheme.ui.panel.bg.hex(),
      'editorWidget.border': scheme.ui.line.hex(),
      'editorWidget.resizeBorder': scheme.ui.panel.bg.hex(), // hide ugly resize bars
      'editorHoverWidget.background': scheme.ui.panel.bg.hex(),
      'editorHoverWidget.border': scheme.ui.line.hex(),
      'editorSuggestWidget.background': scheme.ui.panel.bg.hex(),
      'editorSuggestWidget.border': scheme.ui.line.hex(),
      'editorSuggestWidget.highlightForeground': scheme.common.accent.tint.hex(),
      'editorSuggestWidget.selectedBackground': scheme.ui.selection.active.hex(),

      // Sticky scroll in editor
      // 'editorStickyScroll.background':
      'editorStickyScroll.border': scheme.ui.line.hex(),
      'editorStickyScroll.shadow': scheme.ui.panel.shadow.hex(),
      // 'editorStickyScrollGutter.background':
      'editorStickyScrollHover.background': scheme.ui.selection.normal.hex(),

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

      'peekViewEditor.background': scheme.ui.panel.bg.hex(),
      'peekViewEditor.matchHighlightBackground': scheme.editor.findMatch.inactive.hex(), // ??
      'peekViewEditor.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(), // ??

      'peekViewResult.background': scheme.ui.panel.bg.hex(),
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
      'panelTitle.activeBorder': scheme.common.accent.tint.hex(), // ???
      'panelTitle.activeForeground': scheme.editor.fg.hex(),
      'panelTitle.inactiveForeground': scheme.ui.fg.hex(),
      'panelStickyScroll.border': scheme.ui.line.hex(),
      'panelStickyScroll.shadow': scheme.ui.panel.shadow.hex(),

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
      'statusBarItem.remoteBackground': scheme.common.accent.tint.hex(),
      'statusBarItem.remoteForeground': scheme.common.accent.on.hex(),

      // TITLE BAR
      'titleBar.activeBackground': scheme.ui.bg.hex(),
      'titleBar.inactiveBackground': scheme.ui.bg.hex(),
      'titleBar.activeForeground': scheme.ui.fg.hex(),
      'titleBar.inactiveForeground': scheme.ui.fg.alpha(0.7).hex(),
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
      'extensionButton.prominentForeground': scheme.common.accent.on.hex(),
      'extensionButton.prominentBackground': scheme.common.accent.tint.hex(),
      'extensionButton.prominentHoverBackground': scheme.common.accent.tint.darken(0.1).hex(),

      // QUICK PICKER
      'pickerGroup.border': scheme.ui.line.hex(),
      'pickerGroup.foreground': scheme.ui.fg.alpha(0.5).hex(),

      // DEBUG
      'debugToolBar.background': scheme.ui.panel.bg.hex(),
      'debugIcon.breakpointForeground': scheme.syntax.operator.hex(),
      'debugIcon.breakpointDisabledForeground': scheme.syntax.operator.alpha(0.5).hex(),
      'debugConsoleInputIcon.foreground': scheme.common.accent.tint.hex(),
      // 'debugToolBar.border': '',

      // WELCOME PAGE
      'welcomePage.tileBackground': scheme.ui.bg.hex(),
      'welcomePage.tileShadow': scheme.ui.panel.shadow.hex(),
      'welcomePage.progress.background': scheme.editor.line.hex(),
      'welcomePage.buttonBackground': scheme.common.accent.tint.alpha(0.4).hex(),
      // 'welcomePage.buttonHoverBackground': '?'
      'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg.hex(),

      // GIT
      'gitDecoration.modifiedResourceForeground': scheme.vcs.modified.hex(),
      'gitDecoration.deletedResourceForeground': scheme.vcs.removed.hex(),
      'gitDecoration.untrackedResourceForeground': scheme.vcs.added.hex(),
      'gitDecoration.ignoredResourceForeground': scheme.ui.fg.alpha(0.5).hex(),
      'gitDecoration.conflictingResourceForeground': '',
      'gitDecoration.submoduleResourceForeground': scheme.syntax.constant.hex(),

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
      'terminal.ansiBrightWhite': terminalColors[variant].brightWhite,
      'terminalCommandGuide.foreground': scheme.ui.fg.alpha(0.3).hex(),
      // 'terminalStickyScroll.background':
      'terminalStickyScroll.border': scheme.ui.line.hex(),
      'terminalStickyScroll.shadow': scheme.ui.panel.shadow.hex(),
      'terminalStickyScrollHover.background': scheme.ui.selection.normal.hex(),

      // COMMAND CENTER
      'commandCenter.foreground': scheme.ui.fg.hex(),
      'commandCenter.activeForeground': scheme.ui.fg.hex(),
      'commandCenter.background': scheme.editor.bg.hex(),
      'commandCenter.activeBackground': scheme.ui.selection.active.hex(),
      'commandCenter.border': scheme.ui.line.hex(),
      'commandCenter.inactiveBorder': scheme.ui.line.hex(),
      'commandCenter.activeBorder': scheme.ui.selection.active.alpha(0).hex(),
      // 'commandCenter.debuggingBackground': scheme.syntax.operator.alpha(0.2).hex(),

      // PROFILE BADGE
      'profileBadge.background': scheme.common.accent.tint.hex(),
      'profileBadge.foreground': scheme.common.accent.on.hex(),

      // CHAT
      'chat.requestBorder': scheme.ui.selection.active.hex(),
      'chat.requestBackground': scheme.common.error.hex(),
      'chat.requestBubbleBackground': scheme.ui.selection.normal.hex(),
      'chat.requestBubbleHoverBackground': scheme.ui.selection.active.hex(),
      // 'chat.requestCodeBorder': scheme.common.error.hex(),
      'chat.slashCommandBackground': scheme.syntax.tag.alpha(0.2).hex(),
      'chat.slashCommandForeground': scheme.syntax.tag.hex(),
      'chat.editedFileForeground': scheme.vcs.modified.hex(),
      'chat.checkpointSeparator': scheme.syntax.comment.hex(),

      // INLINE CHAT
      'inlineChat.background': scheme.ui.panel.bg.hex(),
      'inlineChat.foreground': scheme.editor.fg.hex(),
      'inlineChat.border': scheme.ui.line.hex(),
      'inlineChat.shadow': scheme.ui.panel.shadow.hex(),
      'inlineChatInput.border': scheme.ui.line.hex(),
      'inlineChatInput.focusBorder': scheme.common.accent.tint.alpha(0.7).hex(),
      'inlineChatInput.placeholderForeground': scheme.ui.fg.alpha(0.5).hex(),
      'inlineChatInput.background': scheme.editor.bg.hex(),
      'inlineChatDiff.inserted': scheme.vcs.added.alpha(0.2).hex(),
      'inlineChatDiff.removed': scheme.vcs.removed.alpha(0.2).hex(),

      // INLINE EDIT
      'inlineEdit.gutterIndicator.background': scheme.ui.line.hex(),
      'inlineEdit.gutterIndicator.primaryBorder': scheme.common.accent.tint.hex(),
      'inlineEdit.gutterIndicator.primaryForeground': scheme.common.accent.tint.hex(),
      'inlineEdit.gutterIndicator.primaryBackground': scheme.common.accent.tint.alpha(0.1).hex(),
      'inlineEdit.gutterIndicator.secondaryBorder': scheme.ui.fg.alpha(0.5).hex(),
      'inlineEdit.gutterIndicator.secondaryForeground': scheme.ui.fg.hex(),
      'inlineEdit.gutterIndicator.secondaryBackground': scheme.ui.fg.alpha(0.1).hex(),
      'inlineEdit.gutterIndicator.successfulBorder': scheme.vcs.added.hex(),
      'inlineEdit.gutterIndicator.successfulForeground': scheme.vcs.added.hex(),
      'inlineEdit.gutterIndicator.successfulBackground': scheme.vcs.added.alpha(0.1).hex(),
      'inlineEdit.originalBackground': scheme.vcs.removed.alpha(0.1).hex(),
      'inlineEdit.modifiedBackground': scheme.vcs.added.alpha(0.1).hex(),
      'inlineEdit.originalChangedLineBackground': scheme.vcs.removed.alpha(0.15).hex(),
      'inlineEdit.originalChangedTextBackground': scheme.vcs.removed.alpha(0.25).hex(),
      'inlineEdit.modifiedChangedLineBackground': scheme.vcs.added.alpha(0.15).hex(),
      'inlineEdit.modifiedChangedTextBackground': scheme.vcs.added.alpha(0.25).hex(),
      'inlineEdit.originalBorder': scheme.vcs.removed.alpha(0.5).hex(),
      'inlineEdit.modifiedBorder': scheme.vcs.added.alpha(0.5).hex(),

      // MULTI DIFF EDITOR
      'multiDiffEditor.headerBackground': scheme.ui.panel.bg.hex(),
      'multiDiffEditor.background': scheme.ui.bg.hex(),
      'multiDiffEditor.border': scheme.ui.line.hex(),

      // SYMBOL ICONS
      'symbolIcon.arrayForeground': scheme.syntax.entity.hex(),
      'symbolIcon.booleanForeground': scheme.syntax.constant.hex(),
      'symbolIcon.classForeground': scheme.syntax.entity.hex(),
      'symbolIcon.colorForeground': scheme.syntax.special.hex(),
      'symbolIcon.constantForeground': scheme.syntax.constant.hex(),
      'symbolIcon.constructorForeground': scheme.syntax.func.hex(),
      'symbolIcon.enumeratorForeground': scheme.syntax.entity.hex(),
      'symbolIcon.enumeratorMemberForeground': scheme.syntax.constant.hex(),
      'symbolIcon.eventForeground': scheme.syntax.special.hex(),
      'symbolIcon.fieldForeground': scheme.syntax.markup.hex(),
      'symbolIcon.fileForeground': scheme.ui.fg.hex(),
      'symbolIcon.folderForeground': scheme.ui.fg.hex(),
      'symbolIcon.functionForeground': scheme.syntax.func.hex(),
      'symbolIcon.interfaceForeground': scheme.syntax.entity.hex(),
      'symbolIcon.keyForeground': scheme.syntax.tag.hex(),
      'symbolIcon.keywordForeground': scheme.syntax.keyword.hex(),
      'symbolIcon.methodForeground': scheme.syntax.func.hex(),
      'symbolIcon.moduleForeground': scheme.syntax.string.hex(),
      'symbolIcon.namespaceForeground': scheme.syntax.string.hex(),
      'symbolIcon.nullForeground': scheme.syntax.constant.hex(),
      'symbolIcon.numberForeground': scheme.syntax.constant.hex(),
      'symbolIcon.objectForeground': scheme.syntax.entity.hex(),
      'symbolIcon.operatorForeground': scheme.syntax.operator.hex(),
      'symbolIcon.packageForeground': scheme.syntax.string.hex(),
      'symbolIcon.propertyForeground': scheme.syntax.markup.hex(),
      'symbolIcon.referenceForeground': scheme.syntax.entity.hex(),
      'symbolIcon.snippetForeground': scheme.syntax.special.hex(),
      'symbolIcon.stringForeground': scheme.syntax.string.hex(),
      'symbolIcon.structForeground': scheme.syntax.entity.hex(),
      'symbolIcon.textForeground': scheme.editor.fg.hex(),
      'symbolIcon.typeParameterForeground': scheme.syntax.entity.hex(),
      'symbolIcon.unitForeground': scheme.syntax.constant.hex(),
      'symbolIcon.variableForeground': scheme.editor.fg.hex()
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
        scope: [
          'variable.function',
          'variable.annotation',
          'meta.function-call.generic',
          'support.function.go'
        ],
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
        scope: [
          'punctuation.definition.tag.end',
          'punctuation.definition.tag.begin',
          'punctuation.definition.tag'
        ],
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
        name: 'CSS pseudo-class',
        scope: ['entity.other.attribute-name.pseudo-class'],
        settings: {
          foreground: scheme.syntax.regexp.hex()
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
        scope: [
          'meta.decorator variable.other',
          'meta.decorator punctuation.decorator',
          'storage.type.annotation'
        ],
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
        name: 'Markup Italic/Emphasis',
        scope: ['markup.italic', 'emphasis'],
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
        name: 'Markup Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline'
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
        name: 'Markup strong',
        scope: ['markup.strong'],
        settings: {
          fontStyle: 'bold'
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
      // namespace

      class: scheme.syntax.entity.hex(),
      'class.defaultLibrary': scheme.syntax.tag.hex(),
      enum: scheme.syntax.entity.hex(),
      'enum.defaultLibrary': scheme.syntax.tag.hex(),
      interface: scheme.syntax.tag.hex(),
      'interface.defaultLibrary': {
        foreground: scheme.syntax.tag.hex(),
        italic: true
      },
      struct: scheme.syntax.entity.hex(),
      'struct.defaultLibrary': scheme.syntax.tag.hex(),
      // typeParameter
      type: scheme.syntax.entity.hex(),
      'type.defaultLibrary': scheme.syntax.tag.hex(),

      // parameter
      // variable
      // property
      enumMember: scheme.syntax.regexp.hex(),
      // decorator
      event: scheme.syntax.operator.hex(),
      function: scheme.syntax.func.hex(),
      method: scheme.syntax.func.hex(),
      macro: scheme.syntax.special.hex(),
      // label
      comment: scheme.syntax.comment.hex(),
      string: scheme.syntax.string.hex(),
      keyword: scheme.syntax.keyword.hex(),
      number: scheme.syntax.constant.hex(),
      regexp: scheme.syntax.regexp.hex(),
      operator: scheme.syntax.operator.hex()
    }
  }
}
