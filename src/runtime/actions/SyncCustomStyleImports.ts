import { ConfigurationTarget, type Uri, workspace } from "vscode";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const syncCustomStyleImports = async (styleSheet: Uri): Promise<void> => {
  const { section, importsKey, plumeImportPattern } = runtimeConfig.customStyles;
  const settings = workspace.getConfiguration(section);
  const imports = settings.get<readonly string[]>(importsKey, []);
  const plumeImport = styleSheet.toString();

  if (imports.includes(plumeImport)) {
    return;
  }

  const userImports = imports.filter((entry) => !plumeImportPattern.test(entry));

  await settings.update(importsKey, [...userImports, plumeImport], ConfigurationTarget.Global);
};
