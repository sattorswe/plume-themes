import type { StyleRule } from "@/types/StyleSheetTypes.ts";
import { plumeTypography } from "@/typography/PlumeTypography.ts";

export const userInterfaceFontStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-workbench.mac", "body .monaco-workbench.windows", "body .monaco-workbench.linux"],
    declarations: { "font-family": plumeTypography.userInterface },
  },
];
