import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // ←←← COMMENT OUT ALL REPLIT PLUGINS FOR VERCEL ←←←
    // ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    //   ? [
    //       await import("@replit/vite-plugin-cartographer").then((m) =>
    //         m.cartographer(),
    //       ),
    //       await import("@replit/vite-plugin-dev-banner").then((m) =>
    //         m.devBanner(),
    //       ),
    //     ]
    //   : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),  // ← FIXED: Use __dirname for absolute path
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // ←←← REMOVED THE CUSTOM ROOT ←←← This was the problem — build from repo root now
  // root: path.resolve(import.meta.dirname, "client"),

  build: {
    outDir: "dist",
    emptyOutDir: true,
    // ←←← ADD THIS TO ENSURE PROPER INDEX.HTML ←←←
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client/index.html"),  // ← Point directly to your HTML entry
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
