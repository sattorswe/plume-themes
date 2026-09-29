import type { TextDocument } from "vscode";

type LanguageVersionResolver = (document: TextDocument) => Promise<string | undefined>;

export interface LanguageRuntime {
  readonly label: string;
  readonly resolveVersion: LanguageVersionResolver;
}

export interface PackageManifest {
  readonly version: string;
}
