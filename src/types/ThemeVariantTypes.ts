import type { ColorThemeType } from "@/types/ColorThemeTypes.ts";
import type { ThemePalette } from "@/types/PaletteTypes.ts";

export interface ThemeVariant {
  readonly name: string;
  readonly type: ColorThemeType;
  readonly file: string;
  readonly scope: readonly string[];
  readonly palette: ThemePalette;
}
