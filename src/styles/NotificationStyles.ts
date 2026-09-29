import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { softCardDeclarations } from "@/styles/shared/SoftCardDeclarations.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const notificationStyles: readonly StyleRule[] = [
  {
    selectors: [
      "body .monaco-workbench > .notifications-toasts .notifications-list-container",
      "body .monaco-workbench > .notifications-center",
    ],
    declarations: softCardDeclarations,
  },
  {
    selectors: ["body .monaco-workbench > .notifications-center"],
    declarations: { "border-color": "transparent" },
  },
  {
    selectors: ["body .monaco-workbench .notification-list-item-buttons-container .monaco-button"],
    declarations: { "border-radius": plumeShape.radius.medium, padding: "4px 12px" },
  },
];
