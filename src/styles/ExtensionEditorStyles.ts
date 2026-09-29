import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const extensionEditorStyles: readonly StyleRule[] = [
  {
    selectors: ["body .extension-editor > .header .actions-status-container .action-item.action-dropdown-item"],
    declarations: { gap: plumeShape.gap.button },
  },
  {
    selectors: ["body .extension-editor > .header .actions-status-container .action-item .extension-action.label"],
    declarations: { "border-radius": plumeShape.radius.medium, "border-left-width": "1px" },
    important: true,
  },
  {
    selectors: ["body .extension-editor > .header .actions-status-container .action-item > .action-dropdown-item-separator"],
    declarations: { display: "none" },
    important: true,
  },
];
