import { readFile, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import process from "node:process";
import archiver from "archiver";
import colors from "picocolors";
import { PNG } from "pngjs";
import { version } from "../package.json";
import mappings from "./mappings";
import themes from "./themes";
import type { HEX, RGB, Theme } from "./types";

async function generatePalette({ name, constants }: Theme): Promise<void> {
  const originalPalette: string = await readFile("./src/palettes/original.tdesktop-palette", "utf8");
  const lines: string[] = originalPalette.split("\n").map((line) => {
    const constant = line.substring(0, line.indexOf(":"));
    return mappings[constant] ? line.replace(/#[^;]+/g, mappings[constant]) : line;
  });
  const themeMappings = `${Object.entries(constants).map((line) => line.join(": ")).join(";\n")};`;

  let result = `// Telegram Vanilla Dark ${name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  return writeFile(`./src/palettes/vanilla-dark_${name.toLowerCase()}.tdesktop-palette`, result, "utf8");
}

function hexToRgb(hex: HEX): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: Number.parseInt(result[1], 16),
    g: Number.parseInt(result[2], 16),
    b: Number.parseInt(result[3], 16)
  };
}

function generateBackground({ name, constants }: Theme): Promise<void> {
  const size = 16;
  const png = new PNG({ width: size, height: size });
  const { r, g, b } = hexToRgb(constants.GRAY_DARK);
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = 255;
    }
  }

  return new Promise((resolve, reject) => {
    const output = createWriteStream(`./src/backgrounds/${name.toLowerCase()}.png`);
    png.pack().pipe(output).on("finish", resolve).on("error", reject);
  });
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

async function main() {
  const themeInput: string | undefined = process.argv[2];
  const availableThemes = themes.map((theme) => theme.name).join(", ");

  if (!themeInput) {
    console.log(colors.red("Aborting: theme name not specified."));
    console.log(colors.yellow(`Available themes: ${availableThemes}`));
    process.exit();
  }

  if (themeInput === "all") {
    await Promise.all(themes.map(async(theme) => {
      await Promise.all([generatePalette(theme), generateBackground(theme)]);
      await buildTheme(theme);
    }));
    console.log(colors.green("Generation finished!"));
  } else {
    const themeData = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
    if (themeData) {
      await Promise.all([generatePalette(themeData), generateBackground(themeData)]);
      await buildTheme(themeData);
      console.log(colors.green("Generation finished!"));
    } else {
      console.log(colors.red("Aborting: incorrect theme name."));
      console.log(colors.yellow(`Available themes: ${availableThemes}`));
    }
  }
}

main().catch(console.error);
