import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TreeColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const treeColors = (palette: ThemePalette): WorkbenchColors<TreeColorId> => ({
  "tree.indentGuidesStroke": palette.guide,
  "tree.inactiveIndentGuidesStroke": palette.transparent,
});
