import { env, Uri, workspace } from "vscode";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

const readText = async (file: Uri): Promise<string> => new TextDecoder().decode(await workspace.fs.readFile(file));

export const resolveStyleSheetApplied = async (styleSheet: Uri): Promise<boolean> => {
  const workbenchPage = Uri.joinPath(Uri.file(env.appRoot), ...runtimeConfig.customStyles.workbenchPage);

  return Promise.all([readText(workbenchPage), readText(styleSheet)]).then(
    ([page, css]) => page.includes(css),
    () => true,
  );
};
