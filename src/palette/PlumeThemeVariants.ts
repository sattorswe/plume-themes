import { buildConfig } from "@/BuildConfig.ts";
import { plumeDarkPalette } from "@/palette/PlumeDarkPalette.ts";
import { plumeLightPalette } from "@/palette/PlumeLightPalette.ts";
import type { ThemeVariant } from "@/types/ThemeVariantTypes.ts";

export const plumeThemeVariants: readonly ThemeVariant[] = [
  { ...buildConfig.themes.light, palette: plumeLightPalette },
  { ...buildConfig.themes.dark, palette: plumeDarkPalette },
];
