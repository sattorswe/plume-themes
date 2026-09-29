import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorDiffColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorDiffColors = (palette: ThemePalette): WorkbenchColors<EditorDiffColorId> => ({
  "diffEditor.insertedTextBackground": palette.insertedText,
  "diffEditor.removedTextBackground": palette.removedText,
  "diffEditor.insertedLineBackground": palette.insertedLine,
  "diffEditor.removedLineBackground": palette.removedLine,
  "diffEditorGutter.insertedLineBackground": palette.insertedLine,
  "diffEditorGutter.removedLineBackground": palette.removedLine,
  "diffEditor.diagonalFill": palette.divider,
  "diffEditor.border": palette.divider,
  "diffEditor.unchangedRegionBackground": palette.hover,
  "diffEditor.unchangedRegionForeground": palette.muted,
  "editorGutter.addedBackground": palette.added,
  "editorGutter.modifiedBackground": palette.modified,
  "editorGutter.deletedBackground": palette.deleted,
  "editorOverviewRuler.addedForeground": palette.added,
  "editorOverviewRuler.modifiedForeground": palette.modified,
  "editorOverviewRuler.deletedForeground": palette.deleted,
});
