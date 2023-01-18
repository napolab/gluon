import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import run from "@rollup/plugin-run";

export default defineConfig({
  input: ["src/dev.ts"],
  watch: true,
  output: {
    sourcemap: true,
    format: "esm",
    file: "dist/index.js",
  },
  plugins: [esbuild(), run()],
  watch: {
    clearScreen: true,
  },
});
