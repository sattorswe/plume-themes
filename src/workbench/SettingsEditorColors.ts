import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { SettingsEditorColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const settingsEditorColors = (palette: ThemePalette): WorkbenchColors<SettingsEditorColorId> => ({
  "settings.headerForeground": palette.text,
  "settings.modifiedItemIndicator": palette.accent,
  "settings.focusedRowBackground": palette.hover,
  "settings.rowHoverBackground": palette.hover,
  "settings.focusedRowBorder": palette.transparent,
  "settings.headerBorder": palette.divider,
  "settings.sashBorder": palette.divider,
  "settings.dropdownBackground": palette.surface,
  "settings.dropdownBorder": palette.guide,
  "settings.dropdownListBorder": palette.divider,
  "settings.checkboxBackground": palette.surface,
  "settings.checkboxBorder": palette.guide,
  "settings.textInputBackground": palette.surface,
  "settings.textInputBorder": palette.guide,
  "settings.numberInputBackground": palette.surface,
  "settings.numberInputBorder": palette.guide,
});
