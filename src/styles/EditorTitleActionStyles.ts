import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const editorTitleActionStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-workbench .part.editor .title .title-actions .action-item:has(.codicon-toolbar-more, .codicon-split-horizontal, .codicon-split-vertical)",
      "body .monaco-workbench .part.editor .title .editor-actions .action-item:has(.codicon-toolbar-more, .codicon-split-horizontal, .codicon-split-vertical)",
      "body .monaco-workbench .part.editor .title .editor-layout-actions",
    ],
    declarations: { display: "none" },
  },
];
