// node scripts/audit.js

import { readFileSync, existsSync, unlinkSync } from "fs";
import { join, basename, parse, extname } from "path";
import { globSync } from "glob";
import readline from "readline";

const PUBLIC_DIR = join(process.cwd(), "public");
const IGNORE = ["node_modules", ".next", ".git"];

console.log("Running Fuzzy Audit (Ignoring extensions)...\n");

const allAssets = globSync(`${PUBLIC_DIR}/**/*`, { nodir: true });

const sourceFiles = globSync(`**/*.{ts,tsx,js,jsx,css,scss}`, {
  ignore: IGNORE.map((d) => `${d}/**`),
}).map((file) => ({
  path: file,
  content: readFileSync(file, "utf8"),
}));

const unused = [];

allAssets.forEach((assetPath) => {
  const fileName = basename(assetPath);
  const nameWithoutExt = parse(fileName).name;

  const relativePath = assetPath
    .replace(PUBLIC_DIR, "")
    .replace(/\\/g, "/")
    .replace(extname(assetPath), "");

  let isUsed = false;

  for (const file of sourceFiles) {
    if (
      file.content.includes(fileName) ||
      file.content.includes(nameWithoutExt) ||
      (relativePath !== "" && file.content.includes(relativePath))
    ) {
      isUsed = true;
      break;
    }
  }

  if (!isUsed) {
    unused.push(assetPath.replace(process.cwd(), ""));
  }
});

if (unused.length > 0) {
  console.log(`\n❌ Found ${unused.length} potentially unused assets:`);
  unused.forEach((u) => console.log(`  - ${u}`));
} else {
  console.log("\nNo unused assets found.");
}

if (unused.length > 0) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `\nDo you want to delete these ${unused.length} files? (y/n) \n`,
    (answer) => {
      if (String(answer).toLowerCase() === "y") {
        unused.forEach((filePath) => {
          const fullPath = join(process.cwd(), filePath);
          if (existsSync(fullPath)) {
            unlinkSync(fullPath);
            console.log(`Deleted: ${filePath}`);
          }
        });
        console.log("\nCleanup complete.");
      } else {
        console.log("\nDeletion cancelled.");
      }
      rl.close();
    },
  );
}
