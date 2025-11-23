import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  base: "/ZetaBot/", // <--- importante
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "docs"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        formulario: resolve(__dirname, "src/formulario.html"),
        chat: resolve(__dirname, "src/chat.html"),
      },
    },
  },
});
