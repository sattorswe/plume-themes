import { plumeCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { vsCodeCssValues } from "@/styles/shared/VsCodeCssValues.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const explorerSelectionStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row"],
    declarations: {
      "background-color": "transparent",
      "outline-color": "transparent",
    },
    important: true,
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row.monaco-tree-sticky-row"],
    declarations: { "background-color": vsCodeCssValues.stickyScrollBackground },
    important: true,
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row .monaco-icon-name-container"],
    declarations: { "border-radius": plumeShape.radius.small, padding: "2px 6px" },
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row:hover .monaco-icon-name-container"],
    declarations: { "background-color": plumeCssVariables.hover.value },
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row.selected"],
    declarations: { color: plumeCssVariables.text.value },
    important: true,
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row.selected .monaco-icon-name-container"],
    declarations: { "background-color": plumeCssVariables.accentMist.value },
    important: true,
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row.selected .label-name"],
    declarations: { color: plumeCssVariables.accent.value },
    important: true,
  },
];
