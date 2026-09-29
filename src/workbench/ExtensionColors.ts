import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ExtensionColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const extensionColors = (palette: ThemePalette): WorkbenchColors<ExtensionColorId> => ({
  "extensionButton.background": palette.accentStrong,
  "extensionButton.foreground": palette.onAccentStrong,
  "extensionButton.hoverBackground": palette.accentStrongHover,
  "extensionButton.separator": palette.transparent,
  "extensionButton.prominentBackground": palette.accentStrong,
  "extensionButton.prominentForeground": palette.onAccentStrong,
  "extensionButton.prominentHoverBackground": palette.accentStrongHover,
  "extensionIcon.starForeground": palette.warning,
  "extensionIcon.verifiedForeground": palette.accent,
  "extensionBadge.remoteBackground": palette.accentStrong,
  "extensionBadge.remoteForeground": palette.onAccentStrong,
});
