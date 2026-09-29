export type HexColor = string;

type SurfaceRole = "surface" | "text" | "muted" | "subtle" | "divider" | "hover" | "guide" | "guideActive";

type AccentRole =
  | "accent"
  | "accentMist"
  | "accentGlow"
  | "accentStrong"
  | "accentStrongHover"
  | "onAccentStrong"
  | "textGlow";

type EditorRole = "selection" | "inactiveSelection" | "findMatch" | "findMatchHighlight";

type SyntaxRole =
  | "keyword"
  | "string"
  | "comment"
  | "number"
  | "phpTag"
  | "tag"
  | "attribute"
  | "selector"
  | "property"
  | "propertyValue"
  | "dataKey"
  | "regexp"
  | "escape"
  | "heading"
  | "inlineCode"
  | "bracket1"
  | "bracket2"
  | "bracket3";

type EffectRole = "sliderIdle" | "sliderHover" | "sliderActive" | "shadow" | "hairline" | "transparent";

type AnsiRole =
  | "ansiBlack"
  | "ansiRed"
  | "ansiGreen"
  | "ansiYellow"
  | "ansiBlue"
  | "ansiMagenta"
  | "ansiCyan"
  | "ansiWhite"
  | "ansiBrightBlack"
  | "ansiBrightRed"
  | "ansiBrightGreen"
  | "ansiBrightYellow"
  | "ansiBrightBlue"
  | "ansiBrightMagenta"
  | "ansiBrightCyan"
  | "ansiBrightWhite";

export type PaletteRole = SurfaceRole | AccentRole | EditorRole | SyntaxRole | EffectRole | AnsiRole;

export type ThemePalette = Readonly<Record<PaletteRole, HexColor>>;
