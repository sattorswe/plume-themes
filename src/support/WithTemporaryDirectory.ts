import { mkdtemp, rm } from "node:fs/promises";

export const withTemporaryDirectory = async <T>(prefix: string, task: (dir: string) => Promise<T>): Promise<T> => {
  const dir = await mkdtemp(prefix);

  try {
    return await task(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};
