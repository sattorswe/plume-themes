export interface VersionCommand {
  readonly binary: string;
  readonly args: readonly string[];
  readonly pattern?: RegExp;
}

export interface PackageManifest {
  readonly version: string;
}

interface LanguageContribution {
  readonly id: string;
  readonly aliases?: readonly string[];
}

export interface ExtensionManifest {
  readonly contributes?: {
    readonly languages?: readonly LanguageContribution[];
  };
}
