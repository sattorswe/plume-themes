import type { HexColor } from "@/types/PaletteTypes.ts";

type FontStyle = "bold" | "italic" | "strikethrough";

interface TokenColorSettings {
  readonly foreground?: HexColor;
  readonly fontStyle?: FontStyle;
}

export interface TokenColorRule {
  readonly name: string;
  readonly scope: readonly string[];
  readonly settings: TokenColorSettings;
}
