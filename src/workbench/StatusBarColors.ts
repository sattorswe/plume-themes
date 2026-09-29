import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { StatusBarColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const statusBarColors = (palette: ThemePalette): WorkbenchColors<StatusBarColorId> => ({
  "statusBar.background": palette.surface,
  "statusBar.foreground": palette.text,
  "statusBar.noFolderBackground": palette.surface,
  "statusBarItem.hoverBackground": palette.divider,
  "statusBarItem.remoteBackground": palette.surface,
  "statusBarItem.remoteForeground": palette.text,
  "statusBarItem.prominentBackground": palette.surface,
  "statusBarItem.prominentForeground": palette.text,
  "statusBarItem.prominentHoverBackground": palette.divider,
});
