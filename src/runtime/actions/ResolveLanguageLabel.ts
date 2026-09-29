import { extensions } from "vscode";
import type { ExtensionManifest } from "@/types/LanguageVersionTypes.ts";

let languageLabels: ReadonlyMap<string, string> | undefined;

const collectLanguageLabels = (): ReadonlyMap<string, string> =>
  new Map(
    extensions.all
      .flatMap((extension) => {
        const manifest: ExtensionManifest = extension.packageJSON;

        return (manifest.contributes?.languages ?? []).flatMap(({ id, aliases = [] }) =>
          aliases.slice(0, 1).map((label) => [id, label] as const),
        );
      })
      .reverse(),
  );

export const resolveLanguageLabel = (languageId: string): string =>
  (languageLabels ??= collectLanguageLabels()).get(languageId) ?? languageId;

export const resetLanguageLabels = (): void => {
  languageLabels = undefined;
};
