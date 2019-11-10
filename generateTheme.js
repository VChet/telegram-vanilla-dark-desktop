"use strict"

const fs = require("fs");
const chalk = require("chalk");

const paletteFile = "vanilla-dark";

const themes = {
  // aqua: "./themes/aqua.json",
  cream: "./themes/cream.json",
  // green: "./themes/green.json",
  // red: "./themes/red.json",
};

let themeName = process.argv[2];
if (!themes[themeName]) {
  themeName = "cream";
  console.log(chalk.yellow("Theme name wasn't specified or was incorrect. Generating `Cream` theme."));
  console.log(chalk.yellow(`Available themes: ${Object.keys(themes)}`));
}
const theme = require(themes[themeName]);

const mappings = {
  windowBg: "GRAY",
  windowBgOver: "GRAY_LIGHT",
  windowBgRipple: "GRAY_SELECTION",
  lightButtonBg: "GRAY",
  lightButtonBgOver: "GRAY_LIGHT",
  outlineButtonBgOver: "GRAY_LIGHT",
  menuBg: "GRAY",
  placeholderFg: "LIGHT",
  placeholderFgActive: "TEXT",
  filterInputBorderFg: "GRAY_LIGHT",
  filterInputInactiveBg: "GRAY_LIGHT",
  titleBg: "GRAY_LIGHT",
  trayCounterBg: "MAIN",
  trayCounterBgMute: "MAIN_DARK",
  trayCounterFg: "GRAY_DARK",
  trayCounterBgMacInvert: "GRAY_DARK",
  trayCounterFgMacInvert: "GRAY_DARK_TP",
  boxSearchBg: "GRAY",
  contactsBgOver: "GRAY",
  dialogsNameFg: "LIGHT",
  dialogsDateFg: "#B3B3B3",
  dialogsTextFg: "LIGHT",
  dialogsVerifiedIconFg: "GRAY",
  dialogsUnreadBgMuted: "MAIN_DARK",
  dialogsUnreadBg: "MAIN",
  dialogsUnreadFg: "GRAY_DARK",
  dialogsBgOver: "GRAY_LIGHT",
  dialogsNameFgOver: "LIGHT",
  dialogsDateFgOver: "#B3B3B3",
  dialogsUnreadBgOver: "MAIN_DARK",
  dialogsUnreadBgMutedOver: "MAIN",
  dialogsBgActive: "MAIN_DARK",
  dialogsRippleBg: "GRAY_SELECTION",
  dialogsRippleBgActive: "MAIN",
  searchedBarBg: "GRAY_LIGHT",
  topBarBg: "GRAY",
  emojiPanCategories: "GRAY",
  historyTextInFg: "LIGHT",
  historyTextInFgSelected: "#B3B3B3",
  historyTextOutFg: "LIGHT",
  historyTextOutFgSelected: "historyTextInFgSelected",
  historyUnreadBarBg: "GRAY_LIGHT",
  msgInBg: "GRAY_LIGHT",
  msgInBgSelected: "#484848",
  msgOutBg: "GRAY_LIGHT",
  msgOutBgSelected: "#484848",
  msgOutServiceFg: "MAIN",
  msgInDateFg: "LIGHT",
  msgInDateFgSelected: "msgInDateFg",
  msgOutDateFg: "msgInDateFg",
  msgOutDateFgSelected: "msgInDateFgSelected",
  msgServiceFg: "LIGHT",
  msgServiceBg: "GRAY_DARK",
  msgServiceBgSelected: "MAIN_DARK",
  msgInMonoFg: "#EFEBDA",
  msgFileOutBg: "MAIN",
  historyFileInIconFg: "GRAY_LIGHT",
  historyFileInIconFgSelected: "MAIN_DARK",
  historyFileInRadialFg: "GRAY_LIGHT",
  historyFileOutIconFg: "GRAY_LIGHT",
  historyFileOutIconFgSelected: "MAIN_DARK",
  historyFileOutRadialFgSelected: "MAIN_DARK",
  msgWaveformOutActive: "MAIN",
  historyToDownBg: "GRAY",
  historyToDownBgOver: "GRAY_LIGHT",
  historyToDownBgRipple: "GRAY_SELECTION",
  historyComposeAreaBg: "GRAY",
  mainMenuCoverBg: "MAIN_DARK",
  filterInputActiveBg: "GRAY_LIGHT",
  botKbBg: "GRAY_LIGHT",
};

fs.readFile(`${paletteFile}_original.tdesktop-palette`, "utf8", function(error, data) {
  if (error) return console.log(error);

  const lines = data.split("\n").map(line => {
    const constant = line.substring(0, line.indexOf(":"));
    const color = line.substring(line.indexOf(": ") + 1, line.indexOf(";"));
    if (mappings[constant]) {
      line = line.replace(/[#][^;]+/gm, mappings[constant]);
    }
    return line;
  });

  const themeString = Object.entries(theme).map(line => line.join(": ")).join(";\n") + ";";

  const result = lines.join("\n").replace("{{THEME}}", themeString);
  fs.writeFile(`${paletteFile}_${themeName}.tdesktop-palette`, result, "utf8", error => {
    if (error) return console.log(error);
  });
});
