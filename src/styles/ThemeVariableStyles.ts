import { plumeThemeVariants } from "@/palette/PlumeThemeVariants.ts";
import { plumeCssVariables } from "@/styles/shared/PlumeCssVariables.ts";
import { typedEntries } from "@/support/TypedEntries.ts";
import type { StyleRule } from "@/types/StyleSheetTypes.ts";

export const themeVariableStyles: readonly StyleRule[] = plumeThemeVariants.map(({ scope, palette }) => ({
  selectors: scope,
  declarations: Object.fromEntries(typedEntries(plumeCssVariables).map(([role, { name }]) => [name, palette[role]])),
}));
