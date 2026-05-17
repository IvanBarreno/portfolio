# Vite

> The next-generation frontend build tool — instant server start, lightning-fast hot reload.

## What is it?

Vite (French for "fast", pronounced "veet") is a frontend build tool created by Evan You (creator of Vue.js) and released in 2020. It serves as a development server and a production bundler, and was designed to be significantly faster than webpack and Create React App.

Vite leverages two key modern technologies:
- **ES Modules (ESM)** in the browser for development — no bundling during development, just serve files as-is
- **Rollup** for optimized production builds

## Why it matters

Before Vite, the standard was webpack-based tools like Create React App. The problem: as applications grew, startup times reached 30–60 seconds and hot reload could take several seconds per change. Vite solved both problems dramatically.

Vite's development server starts in under 300ms regardless of project size, and hot module replacement (HMR) updates are near-instant. This is possible because Vite doesn't bundle the entire application during development — it serves each module directly as an ES module and lets the browser handle dependency resolution.

For production, Vite uses Rollup under the hood to produce optimized, tree-shaken bundles.

## Key Concepts

- **Dev server** — serves files as native ES modules; no bundle step; starts immediately
- **HMR (Hot Module Replacement)** — swaps changed modules in the browser without a full reload; preserves component state
- **`vite.config.ts`** — configuration file: aliases, plugins, proxy, build options
- **Plugins** — Vite has a rich plugin ecosystem (`@vitejs/plugin-react`, `vite-plugin-svgr`, etc.)
- **Environment variables** — `import.meta.env.VITE_API_URL` — variables prefixed with `VITE_` are exposed to client code
- **`dist/` folder** — the output of `vite build`; these are the files you deploy
- **Code splitting** — Vite automatically splits your app into chunks for better caching and loading performance
- **Static assets** — files in `public/` are served as-is; files imported in code are processed and hashed

## Quick Example

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // import from "@/components/..."
    },
  },
  base: "/portafolio/", // for GitHub Pages deployment at /portafolio/
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:8000", // proxy API calls during development
    },
  },
});
```

## Related Technologies

React · TypeScript · Rollup · webpack (predecessor) · ESBuild · GitHub Pages · npm
