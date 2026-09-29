import { plumeCssValues } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleDeclarations } from "@/types/StyleSheetTypes.ts";

export const softCardDeclarations: StyleDeclarations = {
  "border-radius": plumeShape.radius.large,
  "box-shadow": plumeCssValues.cardShadow,
  overflow: "hidden",
};
