import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";

export default defineConfig({
  input: ["src/prod.ts"],
  output: {
    format: "esm",
    file: "dist/index.js",
  },
  plugins: [esbuild()],
  watch: {
    clearScreen: true,
  },
});
