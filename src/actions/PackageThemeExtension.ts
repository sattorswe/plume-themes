import { buildThemeExtension } from "@/actions/BuildThemeExtension.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { runCommand } from "@/support/RunCommand.ts";

export const packageThemeExtension = async (vsix: string): Promise<void> => {
  await buildThemeExtension();
  await runCommand([...buildConfig.extension.package, vsix]);
};
