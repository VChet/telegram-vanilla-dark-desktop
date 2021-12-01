import { createCanvas } from "canvas";
import { readFile, writeFile } from "fs/promises";
import { green, red, yellow } from "picocolors";
import { version } from "../package.json";
import mappings from "./mappings";
import themes from "./themes";
import { Theme } from "./types/Theme";

async function generatePalette({ name, constants }: Theme): Promise<void> {
  const originalPalette: string = await readFile("./src/palettes/original.tdesktop-palette", "utf8");
  const lines: Array<string> = originalPalette.split("\n").map((line) => {
    const constant = line.substring(0, line.indexOf(":"));
    return mappings[constant] ?
      line.replace(/[#][^;]+/gm, mappings[constant]) :
      line;
  });
  const themeMappings = `${Object.entries(constants).map((line) => line.join(": ")).join(";\n")};`;

  let result = `// Telegram Vanilla Dark ${name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  return writeFile(`./src/palettes/vanilla-dark_${name}.tdesktop-palette`, result, "utf8");
}

function generateBackground({ name, constants }: Theme): Promise<void> {
  const size = 16;
  const canvas = createCanvas(size, size);
  const context = canvas.getContext("2d");
  context.fillStyle = constants.GRAY_DARK;
  context.fillRect(0, 0, size, size);
  return writeFile(`./src/backgrounds/bgTile_${name}.png`, canvas.toBuffer("image/png"));
}

(async () => {
  const themeInput: string | undefined = process.argv[2];
  const availableThemes = themes.map((theme) => theme.name).join(", ");

  if (!themeInput) {
    console.log(red("Aborting: theme name not specified."));
    console.log(yellow(`Available themes: ${availableThemes}`));
    process.exit();
  }

  if (themeInput === "all") {
    await Promise.all(themes.map((theme) => Promise.all([generatePalette(theme), generateBackground(theme)])));
    console.log(green("Generation finished!"));
    process.exit();
  }

  const themeData = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
  if (themeData) {
    await Promise.all([generatePalette(themeData), generateBackground(themeData)]);
    console.log(green("Generation finished!"));
  } else {
    console.log(red("Aborting: incorrect theme name."));
    console.log(yellow(`Available themes: ${availableThemes}`));
  }
})();
