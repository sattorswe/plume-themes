import { vsCodeCssValues } from "@/styles/shared/VsCodeCssValues.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const explorerTreeStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-tl-indent > .indent-guide.active"],
    declarations: {
      "border-left-color": "transparent",
      "background-image": vsCodeCssValues.dottedIndentGuide,
      "background-size": "1px 3px",
      "background-repeat": "repeat-y",
      "background-position": "0 0",
    },
  },
  {
    selectors: ["body .monaco-workbench .explorer-folders-view .monaco-list-row.selected:not([aria-expanded]) .label-name"],
    declarations: { "font-weight": "bold" },
  },
];
