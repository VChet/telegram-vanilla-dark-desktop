import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const palettesDir = path.join(__dirname, "palettes");
const files = readdirSync(palettesDir, { withFileTypes: true })
  .filter((file) => file.isFile() && /^vanilla-dark_.*\.tdesktop-palette$/.exec(file.name))
  .map((file) => path.join(palettesDir, file.name));

for (const filename of files) {
  const contents = readFileSync(filename, "utf8");
  const updatedContents = contents.replace(/\b\d+\.\d+\.\d+\b/g, process.env.npm_package_version as string);
  writeFileSync(filename, updatedContents, "utf8");
}

execSync("git add .");
