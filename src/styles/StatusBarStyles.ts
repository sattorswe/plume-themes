import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const statusBarStyles: readonly StyleRule[] = [
  {
    selectors: [
      'body .monaco-workbench .part.statusbar > .items-container > .statusbar-item:not([id="plume.plume-themes.plume.languageVersion"], [id="status.editor.selection"])',
    ],
    declarations: { display: "none" },
    important: true,
  },
];
