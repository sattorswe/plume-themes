import { window } from "vscode";
import type { RuntimePrompt } from "@/types/RuntimePromptTypes.ts";

export const confirmPrompt = async ({ message, action }: RuntimePrompt): Promise<boolean> =>
  (await window.showInformationMessage(message, action)) === action;
