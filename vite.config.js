import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import vitePluginPrettier from "vite-plugin-prettier";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPrettier()],
});
