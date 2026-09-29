import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TextContentColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const textContentColors = (palette: ThemePalette): WorkbenchColors<TextContentColorId> => ({
  "textLink.foreground": palette.accent,
  "textLink.activeForeground": palette.accent,
  "textPreformat.foreground": palette.inlineCode,
  "textPreformat.background": palette.hover,
  "textCodeBlock.background": palette.hover,
  "textBlockQuote.background": palette.hover,
  "textBlockQuote.border": palette.guide,
});
