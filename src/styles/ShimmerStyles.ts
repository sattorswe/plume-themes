import { plumeCssValues, plumeCssVariables, shimmerCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import type { StyleKeyframes, StyleRule } from "@/types/StyleSheetTypes.ts";

const shimmer = "plume-shimmer";

const languageLabel = 'body .monaco-workbench [id="plume.plume-themes.plume.languageVersion"] .statusbar-item-label';

export const shimmerKeyframes: readonly StyleKeyframes[] = [
  {
    name: shimmer,
    frames: {
      from: { "background-position": "125% 0" },
      to: { "background-position": "-25% 0" },
    },
  },
];

export const shimmerStyles: readonly StyleRule[] = [
  {
    selectors: ["body .monaco-workbench.monaco-enable-motion"],
    declarations: { [shimmerCssVariables.animation.name]: shimmer },
  },
  {
    selectors: ["body .monaco-workbench.monaco-enable-motion:has(.part.titlebar.inactive)"],
    declarations: { [shimmerCssVariables.animation.name]: "none" },
  },
  {
    selectors: [languageLabel],
    declarations: {
      "font-weight": "bold",
      "background-image": plumeCssValues.shimmerGradient,
      "background-size": "250% 100%",
      "-webkit-background-clip": "text",
      "background-clip": "text",
      color: "transparent",
    },
    important: true,
  },
  {
    selectors: [languageLabel],
    declarations: {
      "animation-name": shimmerCssVariables.animation.value,
      "animation-duration": "1.8s",
      "animation-timing-function": "linear",
      "animation-iteration-count": "infinite",
    },
  },
  {
    selectors: [languageLabel],
    declarations: {
      [shimmerCssVariables.base.name]: plumeCssVariables.accent.value,
      [shimmerCssVariables.glow.name]: plumeCssVariables.accentGlow.value,
    },
  },
];
