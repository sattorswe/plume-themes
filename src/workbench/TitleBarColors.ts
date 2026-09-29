import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TitleBarColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const titleBarColors = (palette: ThemePalette): WorkbenchColors<TitleBarColorId> => ({
  "titleBar.activeBackground": palette.surface,
  "titleBar.inactiveBackground": palette.surface,
  "titleBar.activeForeground": palette.text,
  "titleBar.inactiveForeground": palette.muted,
});
