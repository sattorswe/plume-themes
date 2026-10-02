import type { ExtensionContext } from "vscode";
import { createLanguageVersionStatusItem } from "@/runtime/statusbar/CreateLanguageVersionStatusItem.ts";
import { applyPlumeStyleSheet } from "@/runtime/stylesheet/ApplyPlumeStyleSheet.ts";

export const activate = (context: ExtensionContext): void => {
  context.subscriptions.push(...createLanguageVersionStatusItem());
  void applyPlumeStyleSheet(context).catch(console.error);
};
