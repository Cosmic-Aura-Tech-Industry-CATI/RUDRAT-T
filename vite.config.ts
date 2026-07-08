// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { buildSitemapXml } from "./src/lib/sitemap";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      {
        name: "generate-sitemap",
        apply: "build",
        buildStart() {
          const today = new Date().toISOString().slice(0, 10);
          const xml = buildSitemapXml("https://www.toursbyrudra.com", today);
          writeFileSync(resolve(process.cwd(), "public", "sitemap.xml"), xml, "utf8");
        },
      },
    ],
  },
});
