import { env, type TextDocument, Uri, workspace } from "vscode";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";
import { parseJson } from "@/support/ParseJson.ts";
import type { PackageManifest } from "@/types/LanguageVersionTypes.ts";

const readManifestVersion = async (file: Uri): Promise<string | undefined> => {
  const bytes = await Promise.resolve(workspace.fs.readFile(file)).catch(() => undefined);
  const manifest = bytes && parseJson<PackageManifest>(new TextDecoder().decode(bytes));

  return manifest?.version;
};

export const resolveTypeScriptVersion = async (document: TextDocument): Promise<string | undefined> => {
  const folder = workspace.getWorkspaceFolder(document.uri);
  const workspaceVersion = folder && (await readManifestVersion(Uri.joinPath(folder.uri, ...runtimeConfig.typeScript.workspaceManifest)));

  return workspaceVersion ?? readManifestVersion(Uri.joinPath(Uri.file(env.appRoot), ...runtimeConfig.typeScript.bundledManifest));
};
