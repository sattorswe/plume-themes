import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { WelcomePageColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const welcomePageColors = (palette: ThemePalette): WorkbenchColors<WelcomePageColorId> => ({
  "welcomePage.background": palette.surface,
  "welcomePage.tileBackground": palette.surface,
  "welcomePage.tileHoverBackground": palette.hover,
  "welcomePage.tileBorder": palette.divider,
  "welcomePage.progress.background": palette.divider,
  "welcomePage.progress.foreground": palette.accent,
  "walkThrough.embeddedEditorBackground": palette.hover,
  "walkthrough.stepTitle.foreground": palette.text,
});
