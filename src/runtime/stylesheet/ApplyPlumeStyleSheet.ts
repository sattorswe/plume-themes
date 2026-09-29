import { commands, extensions, Uri, window } from "vscode";
import { buildConfig } from "@/BuildConfig.ts";
import { resolveStyleSheetApplied } from "@/runtime/actions/ResolveStyleSheetApplied.ts";
import { syncCustomStyleImports } from "@/runtime/actions/SyncCustomStyleImports.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const applyPlumeStyleSheet = async (extensionUri: Uri): Promise<void> => {
  const { loaderId, applyCommand, prompt, action } = runtimeConfig.customStyles;
  const styleSheet = Uri.joinPath(extensionUri, buildConfig.output.dir, buildConfig.styles.file);

  if (!extensions.getExtension(loaderId)) {
    return;
  }

  await syncCustomStyleImports(styleSheet);

  if (await resolveStyleSheetApplied(styleSheet)) {
    return;
  }

  if ((await window.showInformationMessage(prompt, action)) === action) {
    await commands.executeCommand(applyCommand);
  }
};
