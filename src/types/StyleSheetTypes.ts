import type { PaletteRole } from "@/types/PaletteTypes.ts";

export type StyleDeclarations = Readonly<Record<string, string>>;

export interface StyleRule {
  readonly selectors: readonly string[];
  readonly declarations: StyleDeclarations;
  readonly important?: boolean;
}

export interface StyleKeyframes {
  readonly name: string;
  readonly frames: Readonly<Record<string, StyleDeclarations>>;
}

export interface CssVariable {
  readonly name: string;
  readonly value: string;
}

export type CssVariableRole = Extract<
  PaletteRole,
  "text" | "hover" | "divider" | "accent" | "accentMist" | "accentGlow" | "textGlow" | "shadow" | "hairline"
>;

export type ShimmerVariableRole = "base" | "glow" | "animation";
