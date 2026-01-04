import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { globSync } from "glob";
import pkg from "./package.json" with { type: "json" };

// Externalize peer dependencies (consumer provides these)
// Dependencies are bundled as implementation details
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  // Match sub-paths like react/jsx-runtime, date-fns/format, etc.
  /^react\//,
  /^react-dom\//,
  /^date-fns\//,
  /^recharts\//,
];

// Build entry object from all component files, utils, and hooks
function buildEntries() {
  const entries: Record<string, string> = {};

  // Add all ui components (excluding stories)
  const componentFiles = globSync("src/components/ui/*.tsx", {
    cwd: __dirname,
    ignore: ["**/*.stories.tsx"],
  });
  componentFiles.forEach((file) => {
    const match = file.match(/([^/]+)\.tsx$/);
    if (match) {
      const name = match[1];
      entries[`components/ui/${name}`] = resolve(__dirname, file);
    }
  });

  // Add neynar components (barrel files from subdirectories)
  const neynarDirs = globSync("src/components/neynar/*/index.ts", {
    cwd: __dirname,
  });
  neynarDirs.forEach((file) => {
    const parts = file.split("/");
    const name = parts[parts.length - 2]; // Get folder name (e.g., "theme")
    entries[`components/neynar/${name}/index`] = resolve(__dirname, file);
  });

  // Add utils
  entries["lib/utils"] = resolve(__dirname, "src/lib/utils.ts");

  // Add hooks
  const hookFiles = globSync("src/hooks/*.ts", { cwd: __dirname });
  hookFiles.forEach((file) => {
    const match = file.match(/([^/]+)\.ts$/);
    if (match) {
      const name = match[1];
      entries[`hooks/${name}`] = resolve(__dirname, file);
    }
  });

  return entries;
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(), // Resolves @/ aliases during build
    dts({
      outDir: "dist",
      entryRoot: "src",
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: buildEntries(),
      formats: ["es"],
    },
    rollupOptions: {
      external,
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings and related sourcemap errors
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        if (
          warning.code === "SOURCEMAP_ERROR" &&
          warning.message.includes("Can't resolve original location")
        ) {
          return;
        }
        warn(warning);
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: false,
  },
  esbuild: {
    jsx: "automatic",
  },
});
