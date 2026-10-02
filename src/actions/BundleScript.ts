import { buildConfig } from "@/BuildConfig.ts";
import type { ScriptBundle } from "@/types/ScriptBundleTypes.ts";

export const bundleScript = async ({ entry, file, target, format, external, minify }: ScriptBundle): Promise<void> => {
  await Bun.build({
    entrypoints: [entry],
    outdir: buildConfig.output.dir,
    naming: file,
    target,
    format,
    external: [...external],
    minify,
  });
};
