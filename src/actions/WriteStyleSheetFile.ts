import { resolveOutputPath } from "@/support/ResolveOutputPath.ts";

export const writeStyleSheetFile = async (file: string, styleSheet: string): Promise<void> => {
  await Bun.write(resolveOutputPath(file), styleSheet);
};
