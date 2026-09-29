import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TerminalColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const terminalColors = (palette: ThemePalette): WorkbenchColors<TerminalColorId> => ({
  "terminal.background": palette.surface,
  "terminal.foreground": palette.text,
  "terminalCursor.foreground": palette.accent,
  "terminal.selectionBackground": palette.selection,
  "terminal.inactiveSelectionBackground": palette.inactiveSelection,
  "terminal.border": palette.transparent,
  "terminal.tab.activeBorder": palette.transparent,
  "terminal.ansiBlack": palette.ansiBlack,
  "terminal.ansiRed": palette.ansiRed,
  "terminal.ansiGreen": palette.ansiGreen,
  "terminal.ansiYellow": palette.ansiYellow,
  "terminal.ansiBlue": palette.ansiBlue,
  "terminal.ansiMagenta": palette.ansiMagenta,
  "terminal.ansiCyan": palette.ansiCyan,
  "terminal.ansiWhite": palette.ansiWhite,
  "terminal.ansiBrightBlack": palette.ansiBrightBlack,
  "terminal.ansiBrightRed": palette.ansiBrightRed,
  "terminal.ansiBrightGreen": palette.ansiBrightGreen,
  "terminal.ansiBrightYellow": palette.ansiBrightYellow,
  "terminal.ansiBrightBlue": palette.ansiBrightBlue,
  "terminal.ansiBrightMagenta": palette.ansiBrightMagenta,
  "terminal.ansiBrightCyan": palette.ansiBrightCyan,
  "terminal.ansiBrightWhite": palette.ansiBrightWhite,
});
