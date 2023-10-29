import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function main() {
  const palettesDir = path.join(__dirname, "palettes");
  const files = fs.readdirSync(palettesDir, { withFileTypes: true })
    .filter((file) => file.isFile() && /^vanilla-dark_.*\.tdesktop-palette$/.exec(file.name))
    .map((file) => path.join(palettesDir, file.name));

  files.forEach((filename) => {
    const contents = fs.readFileSync(filename, "utf8");
    const updatedContents = contents.replace(/\b\d+\.\d+\.\d+\b/g, process.env.npm_package_version as string);
    fs.writeFileSync(filename, updatedContents, "utf8");
  });

  execSync("git add .");
}

main();
