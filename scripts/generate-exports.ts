/**
 * Generate package.json exports map from src/ folder
 *
 * Scans source files to generate exports entries like:
 * "./button": { "types": "./dist/components/ui/button.d.ts", "import": "./dist/components/ui/button.js" }
 *
 * Run this BEFORE vite build to ensure package.json is in sync with source.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, basename } from "path";
import { globSync } from "glob";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "src");
const PACKAGE_JSON_PATH = join(ROOT, "package.json");

interface ExportEntry {
  types: string;
  import: string;
}

type ExportsMap = Record<string, ExportEntry | string>;

function generateExports(): ExportsMap {
  const exports: ExportsMap = {};

  // Add base styles CSS export (must be imported before any theme)
  exports["./styles"] = "./src/styles/styles.css";

  // Add theme CSS exports
  exports["./themes/purple-dawn"] = "./src/styles/themes/purple-dawn.css";
  exports["./themes/first-light"] = "./src/styles/themes/first-light.css";

  // Add component exports from ui folder (scan .tsx files in src)
  const componentFiles = globSync("components/ui/*.tsx", { cwd: SRC });
  componentFiles.forEach((file) => {
    const name = basename(file, ".tsx");
    // Skip story files and index files
    if (name.endsWith(".stories") || name === "index") return;
    const exportKey = `./${name}`;
    exports[exportKey] = {
      types: `./dist/components/ui/${name}.d.ts`,
      import: `./dist/components/ui/${name}.js`,
    };
  });

  // Add neynar component exports (barrel files from subdirectories)
  const neynarDirs = globSync("components/neynar/*/index.ts", { cwd: SRC });
  neynarDirs.forEach((file) => {
    // Extract folder name from path like "components/neynar/color-mode/index.ts"
    const parts = file.split("/");
    const name = parts[parts.length - 2]; // Get the folder name (e.g., "color-mode")
    const exportKey = `./${name}`;
    exports[exportKey] = {
      types: `./dist/components/neynar/${name}/index.d.ts`,
      import: `./dist/components/neynar/${name}/index.js`,
    };
  });

  // Add utils export
  if (existsSync(join(SRC, "lib/utils.ts"))) {
    exports["./utils"] = {
      types: "./dist/lib/utils.d.ts",
      import: "./dist/lib/utils.js",
    };
  }

  // Add hook exports
  const hookFiles = globSync("hooks/*.ts", { cwd: SRC });
  hookFiles.forEach((file) => {
    const name = basename(file, ".ts");
    // Skip index files
    if (name === "index") return;
    const exportKey = `./${name}`;
    exports[exportKey] = {
      types: `./dist/hooks/${name}.d.ts`,
      import: `./dist/hooks/${name}.js`,
    };
  });

  return exports;
}

function main() {
  // Verify src exists
  if (!existsSync(SRC)) {
    console.error("Error: src/ folder not found.");
    process.exit(1);
  }

  // Read existing package.json
  const pkg = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf-8"));

  // Generate new exports
  const exports = generateExports();

  // Update package.json
  pkg.exports = exports;

  // Write back
  writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2) + "\n");

  const count = Object.keys(exports).length;
  console.log(`Generated ${count} exports in package.json`);

  // Log some examples
  const examples = Object.entries(exports).slice(0, 5);
  console.log("\nExamples:");
  examples.forEach(([key, value]) => {
    if (typeof value === "string") {
      console.log(`  "${key}": "${value}"`);
    } else {
      console.log(`  "${key}": { import: "${value.import}" }`);
    }
  });

  if (count > 5) {
    console.log(`  ... and ${count - 5} more`);
  }
}

main();
