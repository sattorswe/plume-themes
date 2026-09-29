import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { GitDecorationColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const gitDecorationColors = (palette: ThemePalette): WorkbenchColors<GitDecorationColorId> => ({
  "gitDecoration.addedResourceForeground": palette.added,
  "gitDecoration.modifiedResourceForeground": palette.modified,
  "gitDecoration.deletedResourceForeground": palette.deleted,
  "gitDecoration.renamedResourceForeground": palette.added,
  "gitDecoration.untrackedResourceForeground": palette.added,
  "gitDecoration.ignoredResourceForeground": palette.muted,
  "gitDecoration.conflictingResourceForeground": palette.conflict,
  "gitDecoration.stageModifiedResourceForeground": palette.modified,
  "gitDecoration.stageDeletedResourceForeground": palette.deleted,
  "gitDecoration.submoduleResourceForeground": palette.accent,
});
