import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  base: "/",  // ← Ensures correct asset paths on Vercel
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Replit plugins disabled for production/Vercel — they cause bundle failures
    // ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined ? [...] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // Build from repo root — no custom root
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client/index.html"),  // Explicit entry
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
