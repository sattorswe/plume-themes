import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const dataSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Data keys",
    scope: ["support.type.property-name.json", "support.type.property-name.toml", "entity.name.tag.yaml"],
    settings: { foreground: palette.dataKey },
  },
];
