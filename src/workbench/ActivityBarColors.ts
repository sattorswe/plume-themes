import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ActivityBarColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const activityBarColors = (palette: ThemePalette): WorkbenchColors<ActivityBarColorId> => ({
  "activityBar.background": palette.surface,
  "activityBar.foreground": palette.text,
  "activityBar.inactiveForeground": palette.muted,
});
