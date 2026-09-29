import type { ExtensionContext } from "vscode";
import { createLanguageVersionStatusItem } from "@/runtime/statusbar/CreateLanguageVersionStatusItem.ts";

export const activate = (context: ExtensionContext): void => {
  context.subscriptions.push(...createLanguageVersionStatusItem());
};
