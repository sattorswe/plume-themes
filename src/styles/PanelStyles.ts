import { insetRowDeclarations } from "@/styles/shared/InsetRowDeclarations.ts";
import { plumeCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const panelStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-workbench .part.panel > .title > .composite-bar-container > .composite-bar > .monaco-action-bar .action-item .action-label",
    ],
    declarations: { "border-radius": plumeShape.radius.medium },
  },
  {
    selectors: [
      "body .monaco-workbench .part.panel > .title > .composite-bar-container > .composite-bar > .monaco-action-bar .action-item:hover .action-label",
    ],
    declarations: { "background-color": plumeCssVariables.hover.value },
  },
  {
    selectors: [
      "body .monaco-workbench .part.panel > .title > .composite-bar-container > .composite-bar > .monaco-action-bar .action-item.checked .action-label",
    ],
    declarations: { "background-color": plumeCssVariables.accentMist.value },
  },
  {
    selectors: ["body .monaco-workbench .part.panel .composite-bar .active-item-indicator"],
    declarations: { display: "none" },
    important: true,
  },
  {
    selectors: ["body .monaco-workbench .pane-body.integrated-terminal .tabs-list .monaco-list-row"],
    declarations: insetRowDeclarations,
  },
];
