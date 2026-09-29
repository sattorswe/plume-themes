import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";
import type { VersionCommand } from "@/types/LanguageVersionTypes.ts";

const run = promisify(execFile);
const versions = new Map<VersionCommand, Promise<string | undefined>>();

const extractVersion = (output: string, pattern: RegExp): string | undefined => pattern.exec(output)?.groups?.version;

const readVersion = ({ binary, args, pattern = runtimeConfig.versionPattern }: VersionCommand): Promise<string | undefined> =>
  run(binary, [...args]).then(
    ({ stdout, stderr }) => extractVersion(stdout, pattern) ?? extractVersion(stderr, pattern),
    () => undefined,
  );

export const resolveCommandVersion = (command: VersionCommand): Promise<string | undefined> => {
  const version = versions.get(command) ?? readVersion(command);

  versions.set(command, version);

  return version;
};
