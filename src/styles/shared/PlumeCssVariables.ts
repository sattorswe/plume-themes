import type { CssVariable, CssVariableRole, ShimmerVariableRole } from "@/types/StyleSheetTypes.ts";

export const plumeCssVariables: Readonly<Record<CssVariableRole, CssVariable>> = {
  text: { name: "--plume-text", value: "var(--plume-text)" },
  hover: { name: "--plume-hover", value: "var(--plume-hover)" },
  divider: { name: "--plume-divider", value: "var(--plume-divider)" },
  accent: { name: "--plume-accent", value: "var(--plume-accent)" },
  accentMist: { name: "--plume-accent-mist", value: "var(--plume-accent-mist)" },
  accentGlow: { name: "--plume-accent-glow", value: "var(--plume-accent-glow)" },
  textGlow: { name: "--plume-text-glow", value: "var(--plume-text-glow)" },
  shadow: { name: "--plume-shadow", value: "var(--plume-shadow)" },
  hairline: { name: "--plume-hairline", value: "var(--plume-hairline)" },
};

export const shimmerCssVariables: Readonly<Record<ShimmerVariableRole, CssVariable>> = {
  base: { name: "--plume-shimmer-base", value: "var(--plume-shimmer-base)" },
  glow: { name: "--plume-shimmer-glow", value: "var(--plume-shimmer-glow)" },
  animation: { name: "--plume-shimmer-animation", value: "var(--plume-shimmer-animation, none)" },
};

export const plumeCssValues = {
  cardShadow: "0 10px 34px var(--plume-shadow), 0 0 0 1px var(--plume-hairline)",
  compactCardShadow: "0 2px 8px var(--plume-shadow), 0 0 0 1px var(--plume-hairline)",
  shimmerGradient:
    "linear-gradient(90deg, var(--plume-shimmer-base) 0%, var(--plume-shimmer-base) 40%, var(--plume-shimmer-glow) 50%, var(--plume-shimmer-base) 60%, var(--plume-shimmer-base) 100%)",
} as const;
