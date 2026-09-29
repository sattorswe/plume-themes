import type { TokenColorRule } from "@/types/TokenColorTypes.ts";
import type { WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export type ColorThemeType = "light" | "dark";

export interface ColorTheme {
  readonly $schema: string;
  readonly name: string;
  readonly type: ColorThemeType;
  readonly semanticHighlighting: boolean;
  readonly colors: WorkbenchColors;
  readonly tokenColors: readonly TokenColorRule[];
}
