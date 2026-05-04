import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const required = [
  "package.json",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "src/index.jsx",
  "src/components.jsx",
  "src/icons.jsx",
  "src/styles/paperline.css",
  "dist/paperline.css",
  "dist/paperline-components.global.jsx",
  "dist/paperline-icons.global.jsx",
  // compiled ESM outputs
  "dist/esm/index.js",
  "dist/esm/components.js",
  "dist/esm/icons.js",
  // compiled CJS outputs
  "dist/cjs/index.cjs",
  "dist/cjs/components.cjs",
  "dist/cjs/icons.cjs",
  "scripts/build.mjs",
  "docs/index.html",
  "examples/browser.html",
];

const missing = required.filter((file) => !existsSync(join(root, file)));
if (missing.length) {
  console.error(`Missing required files:\n${missing.map((f) => `- ${f}`).join("\n")}`);
  process.exit(1);
}

const docs = readFileSync("docs/index.html", "utf8");
const expectedRefs = [
  "../dist/paperline.css",
  "../dist/paperline-icons.global.jsx",
  "../dist/paperline-components.global.jsx",
];
const missingRefs = expectedRefs.filter((r) => !docs.includes(r));
if (missingRefs.length) {
  console.error(`docs/index.html is missing references:\n${missingRefs.map((r) => `- ${r}`).join("\n")}`);
  process.exit(1);
}

// Parity check: re-run build in --check mode to ensure dist/ matches src/.
const buildCheck = spawnSync("node", ["scripts/build.mjs", "--check"], { stdio: "inherit" });
if (buildCheck.status !== 0) process.exit(1);

// Symbol parity: every PL* exported in src/components.jsx must be assigned to window in dist.
const srcComponents = readFileSync("src/components.jsx", "utf8");
const distComponents = readFileSync("dist/paperline-components.global.jsx", "utf8");
const exportBlock = srcComponents.match(/^export \{([\s\S]*?)\};/m);
if (!exportBlock) {
  console.error("Could not find export block in src/components.jsx");
  process.exit(1);
}
const symbols = exportBlock[1]
  .split(",")
  .map((s) => s.trim())
  .filter((s) => s.startsWith("PL"));
const missingSymbols = symbols.filter((s) => !distComponents.includes(s));
if (missingSymbols.length) {
  console.error(`dist/paperline-components.global.jsx missing symbols:\n${missingSymbols.map((s) => `- ${s}`).join("\n")}`);
  process.exit(1);
}

// Index parity: every PL* in src/components.jsx export should be re-exported by src/index.jsx.
const indexSrc = readFileSync("src/index.jsx", "utf8");
const missingFromIndex = symbols.filter((s) => !indexSrc.includes(s));
if (missingFromIndex.length) {
  console.error(`src/index.jsx does not re-export:\n${missingFromIndex.map((s) => `- ${s}`).join("\n")}`);
  process.exit(1);
}

// Icon parity: every key in src I should appear in dist icons.
const srcIcons = readFileSync("src/icons.jsx", "utf8");
const distIcons = readFileSync("dist/paperline-icons.global.jsx", "utf8");
const iconKeys = [...srcIcons.matchAll(/^\s{2}([A-Z][A-Za-z]+):\s*\(/gm)].map((m) => m[1]);
const missingIcons = iconKeys.filter((k) => !distIcons.includes(`${k}:`));
if (missingIcons.length) {
  console.error(`dist/paperline-icons.global.jsx missing icons:\n${missingIcons.map((k) => `- ${k}`).join("\n")}`);
  process.exit(1);
}

// Exports map sanity: package.json must point at compiled outputs, not raw src JSX.
const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const mainEntry = pkg.exports?.["."]?.import ?? pkg.main ?? "";
if (mainEntry.includes("src/")) {
  console.error(`package.json exports["."] still points at src/ (${mainEntry}). Update to dist/esm/index.js.`);
  process.exit(1);
}

console.log(`Paperline package structure is valid. (${symbols.length} components, ${iconKeys.length} icons)`);
