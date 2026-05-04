// Paperline build — transforms src/ JSX + CSS into the browser-global dist/ files.
// No deps. Uses string transforms keyed to specific anchors in each source file.
// If transforms break, the file shape changed in src/ — update the anchors here.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const read = (p) => readFileSync(join(ROOT, p), "utf8");

const banner = (kind) =>
  `// AUTO-GENERATED from src/ by scripts/build.mjs — do not edit by hand.\n` +
  `// ${kind} bundle for browser-global usage with Babel Standalone.\n\n`;

const buildIcons = (src) => {
  let out = src
    .replace(/^export const Icon =/m, "const Icon =")
    .replace(/^export const I =/m, "const I =")
    .replace(/if \(typeof window !== "undefined"\) \{\s*window\.I = I;\s*\}/m, "window.I = I;");
  return banner("Icons") + out;
};

const buildComponents = (src) => {
  let out = src
    .replace(
      /^import React,\s*\{[^}]+\}\s*from\s*"react";\s*\nimport \{ I \} from "\.\/icons\.jsx";\s*\n/m,
      (m) => {
        const namedMatch = m.match(/\{\s*([^}]+)\s*\}/);
        const named = namedMatch ? namedMatch[1].trim() : "";
        return `const { ${named} } = React;\n`;
      }
    )
    .replace(/^export \{[\s\S]*?\};\s*\n/m, "")
    .replace(
      /if \(typeof window !== "undefined"\) \{\s*Object\.assign\(window, \{([\s\S]*?)\}\);\s*\}/m,
      (_m, body) => `Object.assign(window, {${body}});`
    );
  return banner("Components") + out;
};

const buildCss = (src) => `/* AUTO-GENERATED from src/styles/paperline.css */\n${src}`;

const targets = [
  { src: "src/icons.jsx",          dest: "dist/paperline-icons.global.jsx",      transform: buildIcons },
  { src: "src/components.jsx",     dest: "dist/paperline-components.global.jsx", transform: buildComponents },
  { src: "src/styles/paperline.css", dest: "dist/paperline.css",                 transform: buildCss },
];

const isCheck = process.argv.includes("--check");
let failed = 0;

for (const { src, dest, transform } of targets) {
  const out = transform(read(src));
  if (isCheck) {
    const onDisk = read(dest);
    if (onDisk !== out) {
      console.error(`drift: ${dest} differs from build of ${src}`);
      failed++;
    }
  } else {
    writeFileSync(join(ROOT, dest), out);
    console.log(`built ${dest}`);
  }
}

if (isCheck) {
  if (failed) {
    console.error(`\n${failed} dist file(s) out of sync with src/. Run \`npm run build\`.`);
    process.exit(1);
  }
  console.log("dist/ is in sync with src/.");
}
