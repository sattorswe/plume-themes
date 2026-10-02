import { commands, type ExtensionContext, extensions, Uri } from "vscode";
import { plumeConfig } from "@/PlumeConfig.ts";
import { confirmPrompt } from "@/runtime/actions/ConfirmPrompt.ts";
import { installCustomStyleLoader } from "@/runtime/actions/InstallCustomStyleLoader.ts";
import { resolveStyleSheetApplied } from "@/runtime/actions/ResolveStyleSheetApplied.ts";
import { syncCustomStyleImports } from "@/runtime/actions/SyncCustomStyleImports.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const applyPlumeStyleSheet = async ({ extensionUri, globalState }: ExtensionContext): Promise<void> => {
  const { loaderId, applyCommand, quitCommand, prompts } = runtimeConfig.customStyles;
  const styleSheet = Uri.joinPath(extensionUri, plumeConfig.output.dir, plumeConfig.styles.file);
  const loaderReady = extensions.getExtension(loaderId) !== undefined || (await installCustomStyleLoader(globalState));

  if (!loaderReady) {
    return;
  }

  await syncCustomStyleImports(styleSheet);

  if ((await resolveStyleSheetApplied(styleSheet)) || !(await confirmPrompt(prompts.apply))) {
    return;
  }

  await commands.executeCommand(applyCommand);

  if (await confirmPrompt(prompts.restart)) {
    await commands.executeCommand(quitCommand);
  }
};
