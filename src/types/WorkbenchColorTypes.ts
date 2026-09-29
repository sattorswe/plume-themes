import type { HexColor } from "@/types/PaletteTypes.ts";

export type EditorSurfaceColorId =
  | "editor.background"
  | "editor.foreground"
  | "editorCursor.foreground"
  | "editor.selectionBackground"
  | "editor.inactiveSelectionBackground"
  | "editor.lineHighlightBorder"
  | "editor.findMatchBackground"
  | "editor.findMatchHighlightBackground"
  | "editorIndentGuide.background1"
  | "editorIndentGuide.activeBackground1";

export type EditorGutterColorId =
  | "editorGutter.background"
  | "editorLineNumber.foreground"
  | "editorLineNumber.activeForeground";

export type EditorBracketColorId =
  | "editorBracketHighlight.foreground1"
  | "editorBracketHighlight.foreground2"
  | "editorBracketHighlight.foreground3";

export type EditorDiffColorId =
  | "diffEditor.insertedTextBackground"
  | "diffEditor.removedTextBackground"
  | "diffEditor.insertedLineBackground"
  | "diffEditor.removedLineBackground"
  | "diffEditorGutter.insertedLineBackground"
  | "diffEditorGutter.removedLineBackground"
  | "diffEditor.diagonalFill"
  | "diffEditor.border"
  | "diffEditor.unchangedRegionBackground"
  | "diffEditor.unchangedRegionForeground"
  | "editorGutter.addedBackground"
  | "editorGutter.modifiedBackground"
  | "editorGutter.deletedBackground"
  | "editorOverviewRuler.addedForeground"
  | "editorOverviewRuler.modifiedForeground"
  | "editorOverviewRuler.deletedForeground";

export type EditorDiagnosticColorId =
  | "editorError.foreground"
  | "editorWarning.foreground"
  | "editorInfo.foreground"
  | "editorOverviewRuler.errorForeground"
  | "editorOverviewRuler.warningForeground"
  | "editorOverviewRuler.infoForeground"
  | "editorMarkerNavigation.background"
  | "editorMarkerNavigationError.background"
  | "editorMarkerNavigationWarning.background"
  | "editorMarkerNavigationInfo.background";

export type SideBarColorId =
  | "sideBar.background"
  | "sideBarTitle.background"
  | "sideBarSectionHeader.background"
  | "sideBarStickyScroll.background";

export type ActivityBarColorId = "activityBar.background" | "activityBar.foreground" | "activityBar.inactiveForeground";

export type TitleBarColorId =
  | "titleBar.activeBackground"
  | "titleBar.inactiveBackground"
  | "titleBar.activeForeground"
  | "titleBar.inactiveForeground";

export type StatusBarColorId =
  | "statusBar.background"
  | "statusBar.foreground"
  | "statusBar.noFolderBackground"
  | "statusBarItem.hoverBackground"
  | "statusBarItem.remoteBackground"
  | "statusBarItem.remoteForeground"
  | "statusBarItem.prominentBackground"
  | "statusBarItem.prominentForeground"
  | "statusBarItem.prominentHoverBackground";

export type TreeColorId = "tree.indentGuidesStroke" | "tree.inactiveIndentGuidesStroke";

export type SashColorId = "sash.hoverBorder";

export type ScrollbarColorId =
  | "scrollbarSlider.background"
  | "scrollbarSlider.hoverBackground"
  | "scrollbarSlider.activeBackground"
  | "scrollbar.shadow";

export type QuickInputColorId =
  | "quickInput.background"
  | "quickInput.foreground"
  | "quickInputTitle.background"
  | "quickInputList.focusBackground"
  | "quickInputList.focusForeground"
  | "quickInputList.focusIconForeground"
  | "pickerGroup.foreground"
  | "pickerGroup.border"
  | "keybindingLabel.background"
  | "keybindingLabel.foreground"
  | "keybindingLabel.border"
  | "keybindingLabel.bottomBorder";

export type ListColorId =
  | "list.highlightForeground"
  | "list.focusHighlightForeground"
  | "list.activeSelectionBackground"
  | "list.activeSelectionForeground"
  | "list.activeSelectionIconForeground"
  | "list.inactiveSelectionBackground"
  | "list.inactiveSelectionForeground"
  | "list.hoverBackground"
  | "list.focusBackground"
  | "list.focusOutline"
  | "list.inactiveFocusOutline"
  | "list.focusAndSelectionOutline";

export type InputColorId =
  | "input.background"
  | "input.foreground"
  | "input.border"
  | "input.placeholderForeground"
  | "inputOption.activeBackground"
  | "inputOption.activeForeground"
  | "inputOption.activeBorder"
  | "focusBorder";

export type EditorWidgetColorId =
  | "editorWidget.background"
  | "editorWidget.border"
  | "widget.shadow"
  | "editorHoverWidget.background"
  | "editorHoverWidget.foreground"
  | "editorHoverWidget.border"
  | "editorHoverWidget.highlightForeground"
  | "editorHoverWidget.statusBarBackground"
  | "editorSuggestWidget.background"
  | "editorSuggestWidget.foreground"
  | "editorSuggestWidget.border"
  | "editorSuggestWidget.selectedBackground"
  | "editorSuggestWidget.selectedForeground"
  | "editorSuggestWidget.selectedIconForeground"
  | "editorSuggestWidget.highlightForeground"
  | "editorSuggestWidget.focusHighlightForeground";

export type PanelColorId =
  | "panel.background"
  | "panel.border"
  | "panelTitle.activeForeground"
  | "panelTitle.activeBorder"
  | "panelTitle.inactiveForeground"
  | "panelInput.border";

export type TerminalColorId =
  | "terminal.background"
  | "terminal.foreground"
  | "terminalCursor.foreground"
  | "terminal.selectionBackground"
  | "terminal.inactiveSelectionBackground"
  | "terminal.border"
  | "terminal.tab.activeBorder"
  | "terminal.ansiBlack"
  | "terminal.ansiRed"
  | "terminal.ansiGreen"
  | "terminal.ansiYellow"
  | "terminal.ansiBlue"
  | "terminal.ansiMagenta"
  | "terminal.ansiCyan"
  | "terminal.ansiWhite"
  | "terminal.ansiBrightBlack"
  | "terminal.ansiBrightRed"
  | "terminal.ansiBrightGreen"
  | "terminal.ansiBrightYellow"
  | "terminal.ansiBrightBlue"
  | "terminal.ansiBrightMagenta"
  | "terminal.ansiBrightCyan"
  | "terminal.ansiBrightWhite";

export type BadgeColorId =
  | "badge.background"
  | "badge.foreground"
  | "activityBarBadge.background"
  | "activityBarBadge.foreground";

export type NotificationColorId =
  | "notifications.background"
  | "notifications.foreground"
  | "notifications.border"
  | "notificationToast.border"
  | "notificationCenter.border"
  | "notificationCenterHeader.background"
  | "notificationCenterHeader.foreground"
  | "notificationLink.foreground"
  | "notificationsInfoIcon.foreground"
  | "notificationsWarningIcon.foreground"
  | "notificationsErrorIcon.foreground";

export type ButtonColorId =
  | "button.background"
  | "button.foreground"
  | "button.hoverBackground"
  | "button.border"
  | "button.secondaryBackground"
  | "button.secondaryForeground"
  | "button.secondaryHoverBackground";

export type ProblemColorId =
  | "problemsErrorIcon.foreground"
  | "problemsWarningIcon.foreground"
  | "problemsInfoIcon.foreground"
  | "list.errorForeground"
  | "list.warningForeground"
  | "errorForeground";

export type GitDecorationColorId =
  | "gitDecoration.addedResourceForeground"
  | "gitDecoration.modifiedResourceForeground"
  | "gitDecoration.deletedResourceForeground"
  | "gitDecoration.renamedResourceForeground"
  | "gitDecoration.untrackedResourceForeground"
  | "gitDecoration.ignoredResourceForeground"
  | "gitDecoration.conflictingResourceForeground"
  | "gitDecoration.stageModifiedResourceForeground"
  | "gitDecoration.stageDeletedResourceForeground"
  | "gitDecoration.submoduleResourceForeground";

export type FormControlColorId =
  | "dropdown.background"
  | "dropdown.foreground"
  | "dropdown.border"
  | "dropdown.listBackground"
  | "checkbox.background"
  | "checkbox.foreground"
  | "checkbox.border";

export type TextContentColorId =
  | "textLink.foreground"
  | "textLink.activeForeground"
  | "textPreformat.foreground"
  | "textPreformat.background"
  | "textCodeBlock.background"
  | "textBlockQuote.background"
  | "textBlockQuote.border";

export type SettingsEditorColorId =
  | "settings.headerForeground"
  | "settings.modifiedItemIndicator"
  | "settings.focusedRowBackground"
  | "settings.rowHoverBackground"
  | "settings.focusedRowBorder"
  | "settings.headerBorder"
  | "settings.sashBorder"
  | "settings.dropdownBackground"
  | "settings.dropdownBorder"
  | "settings.dropdownListBorder"
  | "settings.checkboxBackground"
  | "settings.checkboxBorder"
  | "settings.textInputBackground"
  | "settings.textInputBorder"
  | "settings.numberInputBackground"
  | "settings.numberInputBorder";

export type WelcomePageColorId =
  | "welcomePage.background"
  | "welcomePage.tileBackground"
  | "welcomePage.tileHoverBackground"
  | "welcomePage.tileBorder"
  | "welcomePage.progress.background"
  | "welcomePage.progress.foreground"
  | "walkThrough.embeddedEditorBackground"
  | "walkthrough.stepTitle.foreground";

export type ExtensionColorId =
  | "extensionButton.background"
  | "extensionButton.foreground"
  | "extensionButton.hoverBackground"
  | "extensionButton.separator"
  | "extensionButton.prominentBackground"
  | "extensionButton.prominentForeground"
  | "extensionButton.prominentHoverBackground"
  | "extensionIcon.starForeground"
  | "extensionIcon.verifiedForeground"
  | "extensionBadge.remoteBackground"
  | "extensionBadge.remoteForeground";

type WorkbenchColorId =
  | EditorSurfaceColorId
  | EditorGutterColorId
  | EditorBracketColorId
  | EditorDiffColorId
  | EditorDiagnosticColorId
  | SideBarColorId
  | ActivityBarColorId
  | TitleBarColorId
  | StatusBarColorId
  | TreeColorId
  | SashColorId
  | ScrollbarColorId
  | QuickInputColorId
  | ListColorId
  | NotificationColorId
  | ButtonColorId
  | InputColorId
  | BadgeColorId
  | EditorWidgetColorId
  | PanelColorId
  | TerminalColorId
  | ProblemColorId
  | GitDecorationColorId
  | FormControlColorId
  | TextContentColorId
  | SettingsEditorColorId
  | WelcomePageColorId
  | ExtensionColorId;

export type WorkbenchColors<Id extends WorkbenchColorId = WorkbenchColorId> = Readonly<Record<Id, HexColor>>;
