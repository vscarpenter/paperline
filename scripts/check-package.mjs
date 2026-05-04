import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const required = [
  "package.json",
  "README.md",
  "LICENSE",
  "src/index.jsx",
  "src/components.jsx",
  "src/icons.jsx",
  "src/styles/paperline.css",
  "dist/paperline.css",
  "dist/paperline-components.global.jsx",
  "dist/paperline-icons.global.jsx",
  "docs/index.html",
  "examples/browser.html",
];

const missing = required.filter((file) => !existsSync(join(process.cwd(), file)));

if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const docs = readFileSync("docs/index.html", "utf8");
const expectedRefs = [
  "../dist/paperline.css",
  "../dist/paperline-icons.global.jsx",
  "../dist/paperline-components.global.jsx",
];

const missingRefs = expectedRefs.filter((ref) => !docs.includes(ref));

if (missingRefs.length) {
  console.error(`docs/index.html is missing references:\n${missingRefs.map((ref) => `- ${ref}`).join("\n")}`);
  process.exit(1);
}

console.log("Paperline package structure is valid.");
