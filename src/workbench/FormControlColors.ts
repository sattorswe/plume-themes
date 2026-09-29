import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { FormControlColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const formControlColors = (palette: ThemePalette): WorkbenchColors<FormControlColorId> => ({
  "dropdown.background": palette.surface,
  "dropdown.foreground": palette.text,
  "dropdown.border": palette.guide,
  "dropdown.listBackground": palette.surface,
  "checkbox.background": palette.surface,
  "checkbox.foreground": palette.text,
  "checkbox.border": palette.guide,
});
