import { commands, type Memento } from "vscode";
import { confirmPrompt } from "@/runtime/actions/ConfirmPrompt.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const installCustomStyleLoader = async (state: Memento): Promise<boolean> => {
  const { loaderId, loaderPromptedKey, installCommand, prompts } = runtimeConfig.customStyles;

  if (state.get(loaderPromptedKey, false)) {
    return false;
  }

  await state.update(loaderPromptedKey, true);

  if (!(await confirmPrompt(prompts.install))) {
    return false;
  }

  await commands.executeCommand(installCommand, loaderId);

  return true;
};
