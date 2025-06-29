import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public'
  },
  server: {
    proxy: {
      "/anecdotes": {
        target: "http://localhost:3001/anecdotes",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/anecdotes/, ""),
      },
    },
  },
});
