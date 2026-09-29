import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const commonSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Comments",
    scope: ["comment", "punctuation.definition.comment"],
    settings: { foreground: palette.comment },
  },
  {
    name: "Documentation tags",
    scope: [
      "comment keyword",
      "comment storage",
      "comment entity",
      "comment variable",
      "comment support",
      "comment punctuation",
    ],
    settings: { foreground: palette.comment },
  },
  {
    name: "Strings",
    scope: ["string", "punctuation.definition.string"],
    settings: { foreground: palette.string },
  },
  {
    name: "Regular expressions",
    scope: ["string.regexp"],
    settings: { foreground: palette.regexp },
  },
  {
    name: "Escape characters",
    scope: ["constant.character.escape"],
    settings: { foreground: palette.escape },
  },
  {
    name: "Numbers",
    scope: ["constant.numeric"],
    settings: { foreground: palette.number },
  },
  {
    name: "Keywords",
    scope: ["keyword", "storage", "constant.language", "variable.language"],
    settings: { foreground: palette.keyword },
  },
  {
    name: "Operators",
    scope: ["keyword.operator"],
    settings: { foreground: palette.text },
  },
  {
    name: "Word operators",
    scope: ["keyword.operator.new", "keyword.operator.expression"],
    settings: { foreground: palette.keyword },
  },
];
