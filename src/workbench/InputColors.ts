import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { InputColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const inputColors = (palette: ThemePalette): WorkbenchColors<InputColorId> => ({
  "input.background": palette.surface,
  "input.foreground": palette.text,
  "input.border": palette.guide,
  "input.placeholderForeground": palette.muted,
  "inputOption.activeBackground": palette.accentMist,
  "inputOption.activeForeground": palette.accent,
  "inputOption.activeBorder": palette.transparent,
  focusBorder: palette.accent,
});
