"use strict"

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { mappings } = require("./mappings");
const { version } = require('./package.json');
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function getThemes() {
  const files = fs.readdirSync("./themes/");
  let themes = [];
  files.map(function(file) {
    if (path.extname(file) === ".json") {
      themes.push({
        name: capitalize(path.basename(file, ".json")),
        path: `./themes/${file}`
      });
    }
  });
  return themes
}

function generatePalette(theme) {
  const originalPalette = fs.readFileSync(`original.tdesktop-palette`, "utf8");
  const lines = originalPalette.split("\n").map(line => {
    const constant = line.substring(0, line.indexOf(":"));
    if (mappings[constant]) {
      line = line.replace(/[#][^;]+/gm, mappings[constant]);
    }
    return line;
  });
  const themeMappings = Object.entries(require(theme.path)).map(line => line.join(": ")).join(";\n") + ";";

  let result = `// Telegram Vanilla Dark ${theme.name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  fs.writeFileSync(`vanilla-dark_${theme.name}.tdesktop-palette`, result, "utf8");
}

const themeInput = process.argv[2];
const themes = getThemes();

if (themeInput === "all") {
  themes.map((theme) => generatePalette(theme));
  return;
}
try {
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
  generatePalette(theme);
} catch (error) {
  const availableThemes = themes.map((theme) => theme.name).join(", ");
  console.log(chalk.red("Aborting: theme name wasn't specified or was incorrect."));
  console.log(chalk.yellow(`Available themes: ${availableThemes}`));
}
