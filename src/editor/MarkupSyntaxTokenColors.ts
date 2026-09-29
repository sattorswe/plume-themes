import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const markupSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Tags",
    scope: ["entity.name.tag"],
    settings: { foreground: palette.tag },
  },
  {
    name: "Attributes",
    scope: ["entity.other.attribute-name"],
    settings: { foreground: palette.attribute },
  },
];
