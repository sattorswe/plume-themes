import { resolvePhpVersion } from "@/runtime/actions/ResolvePhpVersion.ts";
import { resolveTypeScriptVersion } from "@/runtime/actions/ResolveTypeScriptVersion.ts";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";
import type { LanguageRuntime } from "@/types/LanguageVersionTypes.ts";

const { php, typeScript, typeScriptReact } = runtimeConfig.languages;

export const languageRuntimeRegistry: ReadonlyMap<string, LanguageRuntime> = new Map([
  [php.id, { label: php.label, resolveVersion: resolvePhpVersion }],
  [typeScript.id, { label: typeScript.label, resolveVersion: resolveTypeScriptVersion }],
  [typeScriptReact.id, { label: typeScriptReact.label, resolveVersion: resolveTypeScriptVersion }],
]);
