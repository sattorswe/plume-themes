import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { TokenColorRule } from "@/types/TokenColorTypes.ts";

export const styleSheetSyntaxTokenColors = (palette: ThemePalette): readonly TokenColorRule[] => [
  {
    name: "Selectors",
    scope: [
      "source.css entity.other.attribute-name",
      "source.css.scss entity.other.attribute-name",
      "source.css.less entity.other.attribute-name",
    ],
    settings: { foreground: palette.selector },
  },
  {
    name: "Properties",
    scope: ["support.type.property-name"],
    settings: { foreground: palette.property },
  },
  {
    name: "Property values",
    scope: [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.color",
      "constant.other.color.rgb-value",
    ],
    settings: { foreground: palette.propertyValue },
  },
  {
    name: "Units",
    scope: ["keyword.other.unit"],
    settings: { foreground: palette.number },
  },
];
