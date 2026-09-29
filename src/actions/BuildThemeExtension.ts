import { bundleScript } from "@/actions/BundleScript.ts";
import { createColorTheme } from "@/actions/CreateColorTheme.ts";
import { createPlumeStyleSheet } from "@/actions/CreatePlumeStyleSheet.ts";
import { writeColorThemeFile } from "@/actions/WriteColorThemeFile.ts";
import { writeStyleSheetFile } from "@/actions/WriteStyleSheetFile.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { plumeThemeVariants } from "@/palette/PlumeThemeVariants.ts";
import { resetDirectory } from "@/support/ResetDirectory.ts";

export const buildThemeExtension = async (): Promise<void> => {
  await resetDirectory(buildConfig.output.dir);
  await Promise.all(plumeThemeVariants.map((variant) => writeColorThemeFile(variant.file, createColorTheme(variant))));
  await writeStyleSheetFile(buildConfig.styles.file, createPlumeStyleSheet());
  await bundleScript(buildConfig.bundles.runtime);
};
