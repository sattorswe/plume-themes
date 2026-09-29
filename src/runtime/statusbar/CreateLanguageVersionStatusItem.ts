import { format } from "node:util";
import { type Disposable, extensions, StatusBarAlignment, type TextEditor, window, workspace } from "vscode";
import { resetLanguageLabels, resolveLanguageLabel } from "@/runtime/actions/ResolveLanguageLabel.ts";
import { resolveLanguageVersion } from "@/runtime/actions/ResolveLanguageVersion.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const createLanguageVersionStatusItem = (): Disposable[] => {
  const { id, name, priority, text, command } = runtimeConfig.statusItem;
  const item = window.createStatusBarItem(id, StatusBarAlignment.Left, priority);

  item.name = name;
  item.command = command;

  const render = async (editor: TextEditor | undefined): Promise<void> => {
    if (!editor) {
      return item.hide();
    }

    const label = resolveLanguageLabel(editor.document.languageId);

    item.text = label;
    item.show();

    const version = await resolveLanguageVersion(editor.document);

    if (version && window.activeTextEditor === editor) {
      item.text = format(text, label, version);
    }
  };

  void render(window.activeTextEditor);

  return [
    item,
    window.onDidChangeActiveTextEditor(render),
    workspace.onDidOpenTextDocument(() => render(window.activeTextEditor)),
    extensions.onDidChange(resetLanguageLabels),
  ];
};
