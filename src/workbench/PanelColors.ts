import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { PanelColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const panelColors = (palette: ThemePalette): WorkbenchColors<PanelColorId> => ({
  "panel.background": palette.surface,
  "panel.border": palette.transparent,
  "panelTitle.activeForeground": palette.accent,
  "panelTitle.activeBorder": palette.transparent,
  "panelTitle.inactiveForeground": palette.muted,
  "panelInput.border": palette.guide,
});
