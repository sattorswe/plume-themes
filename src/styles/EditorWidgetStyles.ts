import { plumeCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { softCardDeclarations } from "@/styles/shared/SoftCardDeclarations.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const editorWidgetStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-editor .monaco-resizable-hover",
      "body .monaco-editor .suggest-widget",
      "body .monaco-editor .suggest-details-container .suggest-details",
    ],
    declarations: softCardDeclarations,
  },
  {
    selectors: ["body .monaco-editor .monaco-hover .hover-row .verbosity-actions"],
    declarations: { "border-right-color": plumeCssVariables.divider.value },
  },
  {
    selectors: ["body .monaco-editor .monaco-hover .hover-row.hover-row-with-copy"],
    declarations: { "padding-right": "40px" },
  },
  {
    selectors: ["body .monaco-editor .monaco-hover .hover-copy-button"],
    declarations: { right: "16px", "border-radius": plumeShape.radius.small },
  },
  {
    selectors: ["body .monaco-editor .suggest-widget .monaco-list .monaco-list-row"],
    declarations: { "border-radius": plumeShape.radius.medium, width: "calc(100% - 8px)", left: "4px" },
  },
];
