import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorSurfaceColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorSurfaceColors = (palette: ThemePalette): WorkbenchColors<EditorSurfaceColorId> => ({
  "editor.background": palette.surface,
  "editor.foreground": palette.text,
  "editorCursor.foreground": palette.accent,
  "editor.selectionBackground": palette.selection,
  "editor.inactiveSelectionBackground": palette.inactiveSelection,
  "editor.lineHighlightBorder": palette.divider,
  "editor.findMatchBackground": palette.findMatch,
  "editor.findMatchHighlightBackground": palette.findMatchHighlight,
  "editorIndentGuide.background1": palette.guide,
  "editorIndentGuide.activeBackground1": palette.guideActive,
});
