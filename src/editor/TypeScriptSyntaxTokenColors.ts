import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const typeScriptSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Primitive types",
    scope: ["support.type.primitive", "support.type.builtin"],
    settings: { foreground: palette.keyword },
  },
  {
    name: "Template expression delimiters",
    scope: ["punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end"],
    settings: { foreground: palette.keyword },
  },
  {
    name: "Template expression content",
    scope: ["meta.template.expression"],
    settings: { foreground: palette.text },
  },
];
