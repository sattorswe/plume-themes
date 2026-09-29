import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const welcomePageStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-workbench .part.editor > .content .gettingStartedContainer .getting-started-category",
      "body .monaco-workbench .part.editor > .content .gettingStartedContainer .getting-started-step",
    ],
    declarations: { "border-radius": plumeShape.radius.medium },
    important: true,
  },
];
