import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ListColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const listColors = (palette: ThemePalette): WorkbenchColors<ListColorId> => ({
  "list.highlightForeground": palette.accent,
  "list.focusHighlightForeground": palette.text,
  "list.activeSelectionBackground": palette.accentMist,
  "list.activeSelectionForeground": palette.accent,
  "list.activeSelectionIconForeground": palette.accent,
  "list.inactiveSelectionBackground": palette.hover,
  "list.inactiveSelectionForeground": palette.text,
  "list.hoverBackground": palette.hover,
  "list.focusBackground": palette.transparent,
  "list.focusOutline": palette.transparent,
  "list.inactiveFocusOutline": palette.transparent,
  "list.focusAndSelectionOutline": palette.transparent,
});
