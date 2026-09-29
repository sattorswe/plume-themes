import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleDeclarations } from "@/types/StyleSheetTypes.ts";

export const insetRowDeclarations: StyleDeclarations = {
  "border-radius": plumeShape.radius.medium,
  width: plumeShape.insetRow.width,
  left: plumeShape.insetRow.left,
};
