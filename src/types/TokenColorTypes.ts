import type { HexColor } from "@/types/PaletteTypes.ts";

interface TokenColorSettings {
  readonly foreground: HexColor;
}

export interface TokenColorRule {
  readonly name: string;
  readonly scope: readonly string[];
  readonly settings: TokenColorSettings;
}
