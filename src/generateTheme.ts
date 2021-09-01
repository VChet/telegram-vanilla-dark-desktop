import { readFileSync, writeFileSync } from "fs";
import { red, yellow, green } from "chalk";

import mappings from "./mappings";
import themes from "./themes";
import { version } from "../package.json";

import { Theme } from "./types/Theme";

function generatePalette(theme: Theme): void {
  const originalPalette: string = readFileSync("./src/palettes/original.tdesktop-palette", "utf8");
  const lines: Array<string> = originalPalette.split("\n").map((line) => {
    const constant = line.substring(0, line.indexOf(":"));
    return mappings[constant] ?
      line.replace(/[#][^;]+/gm, mappings[constant]) :
      line;
  });
  const themeMappings = `${Object.entries(theme.constants).map((line) => line.join(": ")).join(";\n")};`;

  let result = `// Telegram Vanilla Dark ${theme.name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  writeFileSync(`./src/palettes/vanilla-dark_${theme.name}.tdesktop-palette`, result, "utf8");
}

const themeInput: string | undefined = process.argv[2];
const availableThemes = themes.map((theme) => theme.name).join(", ");

if (!themeInput) {
  console.log(red("Aborting: theme name not specified."));
  console.log(yellow(`Available themes: ${availableThemes}`));
  process.exit();
}

if (themeInput === "all") {
  themes.map((theme) => generatePalette(theme));
  console.log(green("Generation finished!"));
  process.exit();
}

const themeData = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
if (themeData) {
  generatePalette(themeData);
  console.log(green("Generation finished!"));
} else {
  console.log(red("Aborting: incorrect theme name."));
  console.log(yellow(`Available themes: ${availableThemes}`));
}
