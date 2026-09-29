import { format } from "node:path";
import { packageThemeExtension } from "@/actions/PackageThemeExtension.ts";
import { buildConfig } from "@/BuildConfig.ts";

const { name, ext } = buildConfig.extension;

await packageThemeExtension(format({ name, ext }));
