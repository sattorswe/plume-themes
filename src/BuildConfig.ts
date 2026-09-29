export const buildConfig = {
  output: { dir: "dist", indent: 2 },
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
  styles: { file: "plume.css" },
  bundles: {
    runtime: { entry: "src/runtime/PlumeExtension.ts", file: "extension.cjs", target: "node", format: "cjs", external: ["vscode"] },
  },
} as const;
