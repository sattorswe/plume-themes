import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { runtimeConfig } from "@/runtime/RuntimeConfig.ts";

const run = promisify(execFile);
const [binary, ...args] = runtimeConfig.php.command;

let phpVersion: Promise<string | undefined> | undefined;

export const resolvePhpVersion = (): Promise<string | undefined> =>
  (phpVersion ??= run(binary, args).then(
    ({ stdout }) => stdout.trim(),
    () => undefined,
  ));
