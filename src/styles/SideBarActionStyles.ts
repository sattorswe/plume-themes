import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const sideBarActionStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-workbench .part.sidebar .action-item:has(.codicon-toolbar-more)"],
    declarations: { display: "none" },
  },
];
