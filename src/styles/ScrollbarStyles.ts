import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const scrollbarStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-scrollable-element:not(.editor-scrollable) > .scrollbar.vertical > .slider"],
    declarations: { "clip-path": "inset(8px 3px 8px calc(100% - 7px) round 2px)" },
  },
  {
    selectors: ["body .monaco-scrollable-element:not(.editor-scrollable) > .scrollbar.horizontal > .slider"],
    declarations: { "clip-path": "inset(calc(100% - 7px) 8px 3px 8px round 2px)" },
  },
];
