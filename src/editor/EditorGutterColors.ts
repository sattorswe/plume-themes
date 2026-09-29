import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorGutterColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorGutterColors = (palette: ThemePalette): WorkbenchColors<EditorGutterColorId> => ({
  "editorGutter.background": palette.surface,
  "editorLineNumber.foreground": palette.text,
  "editorLineNumber.activeForeground": palette.text,
});
