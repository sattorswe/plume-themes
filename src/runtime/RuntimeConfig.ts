export const runtimeConfig = {
  statusItem: {
    id: "plume.languageVersion",
    name: "Plume Language Version",
    priority: 1000,
    text: "%s %s",
    command: "workbench.action.editor.changeLanguageMode",
  },
  languages: {
    php: { id: "php", label: "PHP" },
    typeScript: { id: "typescript", label: "TypeScript" },
    typeScriptReact: { id: "typescriptreact", label: "TypeScript" },
  },
  php: { command: ["php", "-r", "echo PHP_VERSION;"] },
  typeScript: {
    workspaceManifest: ["node_modules", "typescript", "package.json"],
    bundledManifest: ["extensions", "node_modules", "typescript", "package.json"],
  },
} as const;
