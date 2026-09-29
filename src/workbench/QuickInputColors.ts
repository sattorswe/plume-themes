import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { QuickInputColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const quickInputColors = (palette: ThemePalette): WorkbenchColors<QuickInputColorId> => ({
  "quickInput.background": palette.surface,
  "quickInput.foreground": palette.text,
  "quickInputTitle.background": palette.surface,
  "quickInputList.focusBackground": palette.accentMist,
  "quickInputList.focusForeground": palette.accent,
  "quickInputList.focusIconForeground": palette.accent,
  "pickerGroup.foreground": palette.muted,
  "pickerGroup.border": palette.transparent,
  "keybindingLabel.background": palette.hover,
  "keybindingLabel.foreground": palette.subtle,
  "keybindingLabel.border": palette.transparent,
  "keybindingLabel.bottomBorder": palette.transparent,
});
