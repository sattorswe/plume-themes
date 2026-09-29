import { format } from "node:util";
import { type Disposable, StatusBarAlignment, type TextEditor, window, workspace } from "vscode";
import { languageRuntimeRegistry } from "@/runtime/LanguageRuntimeRegistry.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

export const createLanguageVersionStatusItem = (): Disposable[] => {
  const { id, name, priority, text, command } = runtimeConfig.statusItem;
  const item = window.createStatusBarItem(id, StatusBarAlignment.Left, priority);

  item.name = name;
  item.command = command;

  const render = async (editor: TextEditor | undefined): Promise<void> => {
    const runtime = editor && languageRuntimeRegistry.get(editor.document.languageId);

    if (!runtime) {
      return item.hide();
    }

    const version = await runtime.resolveVersion(editor.document);

    if (window.activeTextEditor !== editor) {
      return;
    }

    item.text = version ? format(text, runtime.label, version) : runtime.label;
    item.show();
  };

  void render(window.activeTextEditor);

  return [
    item,
    window.onDidChangeActiveTextEditor(render),
    workspace.onDidOpenTextDocument(() => render(window.activeTextEditor)),
  ];
};
