import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ButtonColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const buttonColors = (palette: ThemePalette): WorkbenchColors<ButtonColorId> => ({
  "button.background": palette.accentStrong,
  "button.foreground": palette.onAccentStrong,
  "button.hoverBackground": palette.accentStrongHover,
  "button.border": palette.transparent,
  "button.secondaryBackground": palette.hover,
  "button.secondaryForeground": palette.text,
  "button.secondaryHoverBackground": palette.divider,
});
