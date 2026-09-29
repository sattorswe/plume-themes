import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { BadgeColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const badgeColors = (palette: ThemePalette): WorkbenchColors<BadgeColorId> => ({
  "badge.background": palette.accentMist,
  "badge.foreground": palette.accent,
  "activityBarBadge.background": palette.accentStrong,
  "activityBarBadge.foreground": palette.onAccentStrong,
});
