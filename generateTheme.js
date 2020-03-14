const fs = require("fs");
const chalk = require("chalk");

const { mappings } = require("./mappings");
const { themes } = require("./themes");
const { version } = require("./package.json");

function generatePalette(theme) {
  const originalPalette = fs.readFileSync(`original.tdesktop-palette`, "utf8");
  const lines = originalPalette.split("\n").map(line => {
    const constant = line.substring(0, line.indexOf(":"));
    if (mappings[constant]) {
      return line.replace(/[#][^;]+/gm, mappings[constant]);
    }
    return line;
  });
  const themeMappings = `${Object.entries(theme.constants).map(line => line.join(": ")).join(";\n")};`;

  let result = `// Telegram Vanilla Dark ${theme.name} (${version})\n`;
  result += lines.join("\n").replace("{{THEME}}", themeMappings);
  fs.writeFileSync(`vanilla-dark_${theme.name}.tdesktop-palette`, result, "utf8");
}

const themeInput = process.argv[2];

if (themeInput === "all") {
  themes.map((theme) => generatePalette(theme));
  process.exit();
}
try {
  const themeData = themes.find((theme) => theme.name.toLowerCase() === themeInput.toLowerCase());
  generatePalette(themeData);
} catch (error) {
  const availableThemes = themes.map((theme) => theme.name).join(", ");
  console.log(chalk.red("Aborting: theme name wasn't specified or was incorrect."));
  console.log(chalk.yellow(`Available themes: ${availableThemes}`));
}
