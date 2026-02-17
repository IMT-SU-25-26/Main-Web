const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IGNORE = ["node_modules", ".next", ".git"];

console.log("🔍 Running Fuzzy Audit (Ignoring extensions)...");

const allAssets = globSync(`${PUBLIC_DIR}/**/*`, { nodir: true });

const sourceFiles = globSync(`**/*.{ts,tsx,js,jsx,css,scss}`, {
  ignore: IGNORE.map((d) => `${d}/**`),
}).map((file) => ({
  path: file,
  content: fs.readFileSync(file, "utf8"),
}));

const unused = [];

allAssets.forEach((assetPath) => {
  const fileName = path.basename(assetPath); 
  const nameWithoutExt = path.parse(fileName).name; 

  const relativePath = assetPath
    .replace(PUBLIC_DIR, "")
    .replace(/\\/g, "/")
    .replace(path.extname(assetPath), "");

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
  console.log("\n✅ No unused assets found.");
}

if (unused.length > 0) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`Do you want to delete these ${unused.length} files? (y/n) `, (answer) => {
    if (answer.toLowerCase() === 'y') {
      unused.forEach(filePath => {
        const fullPath = path.join(process.cwd(), filePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
          console.log(`Deleted: ${filePath}`);
        }
      });
      console.log('Cleanup complete.');
    } else {
      console.log('Deletion cancelled.');
    }
    readline.close();
  });
}