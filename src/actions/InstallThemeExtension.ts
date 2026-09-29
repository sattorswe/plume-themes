import { format } from "node:path";
import { buildThemeExtension } from "@/actions/BuildThemeExtension.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { runCommand } from "@/support/RunCommand.ts";
import { withTemporaryDirectory } from "@/support/WithTemporaryDirectory.ts";

export const installThemeExtension = async (): Promise<void> => {
  const { name, ext, package: packageCommand, install: installCommand } = buildConfig.extension;

  await buildThemeExtension();
  await withTemporaryDirectory(buildConfig.workspace.prefix, async (workspace) => {
    const vsix = format({ dir: workspace, name, ext });

    await runCommand([...packageCommand, vsix]);
    await runCommand([...installCommand, vsix]);
  });
};
