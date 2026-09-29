import { insetRowDeclarations } from "@/styles/shared/InsetRowDeclarations.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const sideBarViewStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-workbench .search-view .monaco-list-row",
      "body .monaco-workbench .scm-view .monaco-list-row",
      "body .monaco-workbench .extensions-viewlet .monaco-list-row",
    ],
    declarations: insetRowDeclarations,
  },
  {
    selectors: [
      "body .monaco-workbench .part.sidebar .monaco-inputbox",
      "body .monaco-workbench .scm-view .scm-editor-container",
      "body .monaco-workbench .scm-view .scm-editor-container .monaco-editor",
      "body .monaco-workbench .scm-view .scm-editor-container .monaco-editor .overflow-guard",
      "body .monaco-workbench .part.sidebar .monaco-button",
    ],
    declarations: { "border-radius": plumeShape.radius.medium },
  },
  {
    selectors: ["body .monaco-workbench .part.sidebar .monaco-button-dropdown"],
    declarations: { gap: plumeShape.gap.button },
  },
  {
    selectors: ["body .monaco-workbench .part.sidebar .monaco-button-dropdown > .monaco-button-dropdown-separator"],
    declarations: { display: "none" },
  },
];
