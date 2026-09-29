import { mkdir, rm } from "node:fs/promises";

export const resetDirectory = async (dir: string): Promise<void> => {
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir);
};
