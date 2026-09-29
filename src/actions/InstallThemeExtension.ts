import { format } from "node:path";
import { packageThemeExtension } from "@/actions/PackageThemeExtension.ts";
import { buildConfig } from "@/BuildConfig.ts";
import { runCommand } from "@/support/RunCommand.ts";
import { withTemporaryDirectory } from "@/support/WithTemporaryDirectory.ts";

export const installThemeExtension = async (): Promise<void> => {
  const { name, ext, install } = buildConfig.extension;

  await withTemporaryDirectory(buildConfig.workspace.prefix, async (workspace) => {
    const vsix = format({ dir: workspace, name, ext });

    await packageThemeExtension(vsix);
    await runCommand([...install, vsix]);
  });
};
