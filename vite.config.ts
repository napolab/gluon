import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";
import { viteSingleFile } from 'vite-plugin-singlefile'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), viteSingleFile()],
  build: {
    emptyOutDir: false,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
  resolve: {
    alias: {
      "~": join(__dirname, "src/client"),
    },
  },
});
