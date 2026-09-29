import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { ProblemColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const problemColors = (palette: ThemePalette): WorkbenchColors<ProblemColorId> => ({
  "problemsErrorIcon.foreground": palette.error,
  "problemsWarningIcon.foreground": palette.warning,
  "problemsInfoIcon.foreground": palette.accent,
  "list.errorForeground": palette.error,
  "list.warningForeground": palette.warning,
  errorForeground: palette.error,
});
