const nodeVersion = { binary: "node", args: ["--version"] } as const;
const clangVersion = { binary: "clang", args: ["--version"] } as const;

export const runtimeConfig = {
  statusItem: {
    id: "plume.languageVersion",
    name: "Plume Language Version",
    priority: 1000,
    text: "%s %s",
    command: "workbench.action.editor.changeLanguageMode",
  },
  customStyles: {
    loaderId: "be5invis.vscode-custom-css",
    section: "vscode_custom_css",
    importsKey: "imports",
    plumeImportPattern: /\/plume\.plume-themes-[^/]+\/dist\/plume\.css$/,
    workbenchPage: ["out", "vs", "code", "electron-browser", "workbench", "workbench.html"],
    applyCommand: "extension.updateCustomCSS",
    installCommand: "workbench.extensions.installExtension",
    quitCommand: "workbench.action.quit",
    loaderPromptedKey: "plume.loaderPrompted",
    prompts: {
      install: {
        message: "Plume needs the Custom CSS and JS Loader for its rounded interface and font. Install it now?",
        action: "Install Loader",
      },
      apply: { message: "Plume styles changed. Apply them now?", action: "Apply Styles" },
      restart: { message: "Plume styles are applied. Quit VS Code and open it again to see them.", action: "Quit VS Code" },
    },
  },
  typeScript: {
    languages: ["typescript", "typescriptreact"],
    workspaceManifest: ["node_modules", "typescript", "package.json"],
    bundledManifest: ["extensions", "node_modules", "typescript", "package.json"],
  },
  versionPattern: /(?<version>\d+(?:\.\d+)+)/,
  versionTimeout: 5000,
  versionCommands: {
    php: { binary: "php", args: ["-r", "echo PHP_VERSION;"] },
    javascript: nodeVersion,
    javascriptreact: nodeVersion,
    python: { binary: "python3", args: ["--version"] },
    go: { binary: "go", args: ["version"] },
    rust: { binary: "rustc", args: ["--version"] },
    java: { binary: "java", args: ["--version"] },
    ruby: { binary: "ruby", args: ["--version"] },
    dart: { binary: "dart", args: ["--version"] },
    swift: { binary: "swift", args: ["--version"], pattern: /Swift version (?<version>\d+(?:\.\d+)+)/ },
    c: clangVersion,
    cpp: clangVersion,
    "objective-c": clangVersion,
    shellscript: { binary: "bash", args: ["--version"] },
  },
} as const;
