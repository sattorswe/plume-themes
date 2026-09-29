import type { TextDocument } from "vscode";
import { resolveCommandVersion } from "@/runtime/actions/ResolveCommandVersion.ts";
import { resolveTypeScriptVersion } from "@/runtime/actions/ResolveTypeScriptVersion.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";
import { typedEntries } from "@/support/TypedEntries.ts";
import type { VersionCommand } from "@/types/LanguageVersionTypes.ts";

const typeScriptLanguages: ReadonlySet<string> = new Set(runtimeConfig.typeScript.languages);
const versionCommands: ReadonlyMap<string, VersionCommand> = new Map(typedEntries(runtimeConfig.versionCommands));

export const resolveLanguageVersion = async (document: TextDocument): Promise<string | undefined> => {
  const command = versionCommands.get(document.languageId);

  if (typeScriptLanguages.has(document.languageId)) {
    return resolveTypeScriptVersion(document);
  }

  return command && resolveCommandVersion(command);
};
