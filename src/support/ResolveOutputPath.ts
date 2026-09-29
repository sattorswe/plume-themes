import { format } from "node:path";
import { buildConfig } from "@/BuildConfig.ts";

export const resolveOutputPath = (file: string): string => format({ dir: buildConfig.output.dir, base: file });
