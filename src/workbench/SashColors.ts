import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { SashColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const sashColors = (palette: ThemePalette): WorkbenchColors<SashColorId> => ({
  "sash.hoverBorder": palette.guide,
});
