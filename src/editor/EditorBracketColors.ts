import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorBracketColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorBracketColors = (palette: ThemePalette): WorkbenchColors<EditorBracketColorId> => ({
  "editorBracketHighlight.foreground1": palette.bracket1,
  "editorBracketHighlight.foreground2": palette.bracket2,
  "editorBracketHighlight.foreground3": palette.bracket3,
});
