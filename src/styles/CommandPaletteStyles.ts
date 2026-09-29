import { plumeCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import { plumeShape } from "@/styles/shared/PlumeShape.ts";
import { softCardDeclarations } from "@/styles/shared/SoftCardDeclarations.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const commandPaletteStyles: readonly StyleRule[] = [
  {
    selectors: ["body .quick-input-widget"],
    declarations: softCardDeclarations,
  },
  {
    selectors: ["body .quick-input-widget .quick-input-header"],
    declarations: {
      padding: "10px 12px",
      "border-bottom-width": "1px",
      "border-bottom-style": "solid",
      "border-bottom-color": plumeCssVariables.divider.value,
    },
  },
  {
    selectors: ["body .quick-input-widget .quick-input-box .monaco-inputbox"],
    declarations: {
      "border-color": "transparent",
      "background-color": "transparent",
      "outline-color": "transparent",
    },
    important: true,
  },
  {
    selectors: ["body .quick-input-widget .quick-input-list .monaco-list"],
    declarations: { padding: "6px 0 8px 8px", "box-sizing": "border-box" },
  },
  {
    selectors: ["body .quick-input-widget .quick-input-list .monaco-list-row"],
    declarations: { "border-radius": plumeShape.radius.medium, width: "calc(100% - 12px)" },
  },
  {
    selectors: ["body .quick-input-widget .quick-input-list .monaco-list-row.focused .label-name"],
    declarations: { "font-weight": "bold" },
  },
  {
    selectors: ["body .quick-input-widget .monaco-keybinding > .monaco-keybinding-key"],
    declarations: { "border-radius": plumeShape.radius.key },
  },
];
