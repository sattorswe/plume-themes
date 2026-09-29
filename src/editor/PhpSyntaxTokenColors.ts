import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const phpSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "PHP tags",
    scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
    settings: { foreground: palette.phpTag },
  },
];
