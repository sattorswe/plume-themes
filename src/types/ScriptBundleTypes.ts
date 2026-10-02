export interface ScriptBundle {
  readonly entry: string;
  readonly file: string;
  readonly target: "node";
  readonly format: "cjs";
  readonly external: readonly string[];
  readonly minify: boolean;
}
