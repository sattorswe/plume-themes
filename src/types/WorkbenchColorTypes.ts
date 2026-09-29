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
  | "notificationsInfoIcon.foreground";

export type ButtonColorId =
  | "button.background"
  | "button.foreground"
  | "button.hoverBackground"
  | "button.border"
  | "button.secondaryBackground"
  | "button.secondaryForeground"
  | "button.secondaryHoverBackground";

type WorkbenchColorId =
  | EditorSurfaceColorId
  | EditorGutterColorId
  | EditorBracketColorId
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
  | TerminalColorId;

export type WorkbenchColors<Id extends WorkbenchColorId = WorkbenchColorId> = Readonly<Record<Id, HexColor>>;
