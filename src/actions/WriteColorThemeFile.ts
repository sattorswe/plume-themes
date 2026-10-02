import { resolveOutputPath } from "@/support/ResolveOutputPath.ts";
import type { ColorTheme } from "@/types/ColorThemeTypes.ts";

export const writeColorThemeFile = async (file: string, theme: ColorTheme): Promise<void> => {
  await Bun.write(resolveOutputPath(file), JSON.stringify(theme));
};
