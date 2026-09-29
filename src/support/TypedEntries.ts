export const typedEntries = <K extends string, V>(record: Readonly<Record<K, V>>): [K, V][] =>
  Object.entries(record) as [K, V][];
