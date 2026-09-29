import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorWidgetColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorWidgetColors = (palette: ThemePalette): WorkbenchColors<EditorWidgetColorId> => ({
  "editorWidget.background": palette.surface,
  "editorWidget.border": palette.transparent,
  "widget.shadow": palette.shadow,
  "editorHoverWidget.background": palette.surface,
  "editorHoverWidget.foreground": palette.text,
  "editorHoverWidget.border": palette.transparent,
  "editorHoverWidget.highlightForeground": palette.accent,
  "editorHoverWidget.statusBarBackground": palette.surface,
  "editorSuggestWidget.background": palette.surface,
  "editorSuggestWidget.foreground": palette.text,
  "editorSuggestWidget.border": palette.transparent,
  "editorSuggestWidget.selectedBackground": palette.accentMist,
  "editorSuggestWidget.selectedForeground": palette.accent,
  "editorSuggestWidget.selectedIconForeground": palette.accent,
  "editorSuggestWidget.highlightForeground": palette.accent,
  "editorSuggestWidget.focusHighlightForeground": palette.text,
});
