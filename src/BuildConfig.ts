import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { plumeConfig } from "@/PlumeConfig.ts";

export const buildConfig = {
  output: { dir: plumeConfig.output.dir },
  workspace: { prefix: resolve(tmpdir(), "plume-themes-") },
  schema: "vscode://schemas/color-theme",
  themes: {
    light: {
      name: "Plume Light",
      type: "light",
      file: "plume-light-color-theme.json",
      scope: ["body.vs", "body .monaco-workbench.vs"],
    },
    dark: {
      name: "Plume Dark",
      type: "dark",
      file: "plume-dark-color-theme.json",
      scope: ["body.vs-dark", "body .monaco-workbench.vs-dark"],
    },
  },
  styles: { file: plumeConfig.styles.file },
  bundles: {
    runtime: { entry: "src/runtime/PlumeExtension.ts", file: "extension.cjs", target: "node", format: "cjs", external: ["vscode"], minify: true },
  },
  extension: {
    name: plumeConfig.extension.name,
    ext: ".vsix",
    package: ["vsce", "package", "--no-dependencies", "--out"],
    install: ["code", "--force", "--install-extension"],
  },
} as const;
