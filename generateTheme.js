"use strict"

const fs = require("fs");
const chalk = require("chalk");
const { version } = require('./package.json');

const themes = {
  aqua: "./themes/aqua.json",
  cream: "./themes/cream.json",
  green: "./themes/green.json",
  red: "./themes/red.json",
};

let themeName = process.argv[2];
if (!themes[themeName]) {
  themeName = "cream";
  console.log(chalk.yellow("Theme name wasn't specified or was incorrect. Generating `Cream` theme."));
  console.log(chalk.yellow(`Available themes: ${Object.keys(themes)}`));
}

const theme = require(themes[themeName]);
const paletteFile = "vanilla-dark";
const { mappings } = require("./mappings");

fs.readFile(`${paletteFile}_original.tdesktop-palette`, "utf8", function(error, data) {
  if (error) return console.log(error);

  const lines = data.split("\n").map(line => {
    const constant = line.substring(0, line.indexOf(":"));
    if (mappings[constant]) {
      line = line.replace(/[#][^;]+/gm, mappings[constant]);
    }
    return line;
  });

  const themeString = Object.entries(theme).map(line => line.join(": ")).join(";\n") + ";";

  let result = `// Telegram Vanilla Dark (${themeName}) ${version}\n`;
  result += lines.join("\n").replace("{{THEME}}", themeString);
  fs.writeFile(`${paletteFile}_${themeName}.tdesktop-palette`, result, "utf8", error => {
    if (error) return console.log(error);
  });
});
