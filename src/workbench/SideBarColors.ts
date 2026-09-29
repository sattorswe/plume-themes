import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { SideBarColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const sideBarColors = (palette: ThemePalette): WorkbenchColors<SideBarColorId> => ({
  "sideBar.background": palette.surface,
  "sideBarTitle.background": palette.surface,
  "sideBarSectionHeader.background": palette.surface,
  "sideBarStickyScroll.background": palette.surface,
});
