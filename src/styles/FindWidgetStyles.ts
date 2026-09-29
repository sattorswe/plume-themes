import { plumeCssValues } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { softCardDeclarations } from "@/styles/shared/SoftCardDeclarations.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const findWidgetStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-editor .find-widget"],
    declarations: { ...softCardDeclarations, "border-color": "transparent" },
  },
  {
    selectors: ["body .monaco-workbench .simple-find-part"],
    declarations: {
      "border-color": "transparent",
      "border-radius": plumeShape.radius.medium,
      "box-shadow": plumeCssValues.compactCardShadow,
    },
  },
  {
    selectors: ["body .monaco-editor .find-widget .monaco-inputbox", "body .monaco-workbench .simple-find-part .monaco-inputbox"],
    declarations: { "border-radius": plumeShape.radius.medium },
  },
  {
    selectors: ["body .monaco-editor .find-widget .button", "body .monaco-workbench .simple-find-part .button"],
    declarations: { "border-radius": plumeShape.radius.small },
  },
];
