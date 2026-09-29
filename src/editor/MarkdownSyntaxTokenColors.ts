import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const markdownSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Headings",
    scope: ["markup.heading", "entity.name.section.markdown", "punctuation.definition.heading.markdown"],
    settings: { foreground: palette.heading, fontStyle: "bold" },
  },
  {
    name: "Bold",
    scope: ["markup.bold"],
    settings: { fontStyle: "bold" },
  },
  {
    name: "Italic",
    scope: ["markup.italic"],
    settings: { fontStyle: "italic" },
  },
  {
    name: "Strikethrough",
    scope: ["markup.strikethrough"],
    settings: { fontStyle: "strikethrough" },
  },
  {
    name: "Inline code",
    scope: ["markup.inline.raw"],
    settings: { foreground: palette.inlineCode },
  },
  {
    name: "Links",
    scope: ["markup.underline.link", "string.other.link"],
    settings: { foreground: palette.accent },
  },
  {
    name: "Quotes",
    scope: ["markup.quote"],
    settings: { foreground: palette.comment },
  },
];
