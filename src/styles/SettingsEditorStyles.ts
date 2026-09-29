import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { vsCodeCssValues } from "@/styles/shared/VsCodeCssValues.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const settingsEditorStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .settings-editor > .settings-header > .search-container > .suggest-input-container",
      "body .settings-editor .settings-tree-container .settings-row-inner-container",
      "body .settings-editor .settings-toc-container .monaco-list-row",
      "body .settings-editor .setting-item-control .monaco-inputbox",
      "body .settings-editor .settings-tree-container .setting-item-contents .monaco-select-box",
    ],
    declarations: { "border-radius": plumeShape.radius.medium },
    important: true,
  },
  {
    selectors: ["body .settings-editor > .settings-header > .search-container > .suggest-input-container"],
    declarations: { "border-color": vsCodeCssValues.inputBorder },
    important: true,
  },
  {
    selectors: ["body .settings-editor .settings-tree-container .setting-item-bool .setting-value-checkbox"],
    declarations: { "border-radius": plumeShape.radius.key },
    important: true,
  },
];
