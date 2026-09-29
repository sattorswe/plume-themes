import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { EditorDiagnosticColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const editorDiagnosticColors = (palette: ThemePalette): WorkbenchColors<EditorDiagnosticColorId> => ({
  "editorError.foreground": palette.error,
  "editorWarning.foreground": palette.warning,
  "editorInfo.foreground": palette.accent,
  "editorOverviewRuler.errorForeground": palette.error,
  "editorOverviewRuler.warningForeground": palette.warning,
  "editorOverviewRuler.infoForeground": palette.accent,
  "editorMarkerNavigation.background": palette.surface,
  "editorMarkerNavigationError.background": palette.error,
  "editorMarkerNavigationWarning.background": palette.warning,
  "editorMarkerNavigationInfo.background": palette.accent,
});
