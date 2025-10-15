import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/" : "/", // ruta base (por si alojás en subcarpeta)
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist", // carpeta de salida
    sourcemap: false, // desactiva mapas de fuente para producción
    minify: "esbuild", // usa minificación rápida
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // solo en desarrollo
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
