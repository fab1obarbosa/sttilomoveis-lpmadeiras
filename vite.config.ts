import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  base: isDev ? "/" : "/sttilomoveis-lpmadeiras/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
