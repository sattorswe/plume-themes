import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ScrollbarColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const scrollbarColors = (palette: ThemePalette): WorkbenchColors<ScrollbarColorId> => ({
  "scrollbarSlider.background": palette.sliderIdle,
  "scrollbarSlider.hoverBackground": palette.sliderHover,
  "scrollbarSlider.activeBackground": palette.sliderActive,
  "scrollbar.shadow": palette.transparent,
});
