import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
               @use "@/theme/abstracts/variables" as *;
                @use "@/theme/abstracts/mixins" as *;
`,
      },
    },
  },
});
