import archiver from "archiver";
import { createCanvas } from "canvas";
import { green, red, yellow } from "picocolors";
import { readFile, writeFile } from "fs/promises";
import { createWriteStream } from "fs";
import { version } from "../package.json";
import mappings from "./mappings";
import themes from "./themes";
import type { Theme } from "./types/Theme";

async function generatePalette({ name, constants }: Theme): Promise<void> {
  const originalPalette: string = await readFile("./src/palettes/original.tdesktop-palette", "utf8");
  const lines: Array<string> = originalPalette.split("\n").map((line) => {
    const constant = line.substring(0, line.indexOf(":"));
    return mappings[constant] ?
      line.replace(/#[^;]+/gm, mappings[constant]) :
      line;
  });
  const themeMappings = `${Object.entries(constants).map((line) => line.join(": ")).join(";\n")};`;

  let result = `// Telegram Vanilla Dark ${name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  return writeFile(`./src/palettes/vanilla-dark_${name.toLowerCase()}.tdesktop-palette`, result, "utf8");
}

function generateBackground({ name, constants }: Theme): Promise<void> {
  const size = 16;
  const canvas = createCanvas(size, size);
  const context = canvas.getContext("2d");
  context.fillStyle = constants.GRAY_DARK;
  context.fillRect(0, 0, size, size);
  return writeFile(`./src/backgrounds/${name.toLowerCase()}.png`, canvas.toBuffer("image/png"));
}

function buildTheme({ name }: Theme) {
  const filename = name.toLowerCase();
  return new Promise((resolve, reject) => {
    const archive = archiver("zip");
    archive.on("warning", (err) => console.log(err));
    archive.on("error", (err) => reject(err));

    const output = createWriteStream(`./src/themes/${filename}.tdesktop-theme`);
    output.on("close", () => resolve(`${filename}.tdesktop-theme: ${archive.pointer()} bytes`));

    archive.pipe(output);
    archive.file(
      `./src/palettes/vanilla-dark_${filename}.tdesktop-palette`,
      { name: "colors.tdesktop-palette", date: new Date(0) }
    );
    archive.file(
      `./src/backgrounds/${filename}.png`,
      { name: "background.png", date: new Date(0) }
    );
    archive.finalize();
  });
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
    await Promise.all(themes.map(async (theme) => {
      await Promise.all([generatePalette(theme), generateBackground(theme)]);
      await buildTheme(theme);
    }));
    console.log(green("Generation finished!"));
  } else {
    const themeData = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
    if (themeData) {
      await Promise.all([generatePalette(themeData), generateBackground(themeData)]);
      await buildTheme(themeData);
      console.log(green("Generation finished!"));
    } else {
      console.log(red("Aborting: incorrect theme name."));
      console.log(yellow(`Available themes: ${availableThemes}`));
    }
  }
})();
