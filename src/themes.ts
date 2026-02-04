import type { HEX, Theme } from "./types";

const common: Readonly<Record<string, HEX>> = {
  TEXT: "#AAAAAA",
  LIGHT: "#CCCCCC",
  WHITE: "#FFFFFF",
  TRANSPARENT: "#00000000"
};

const themes: Theme[] = [{
  name: "Aqua",
  constants: {
    ...common,
    MAIN_DARK: "#5B8E90",
    MAIN: "#77BABC",
    MAIN_OVERLAY: "#77BABC4C",
    MAIN_LIGHT: "#8ED1CC",
    GRAY_DARK: "#1D1D24",
    GRAY_DARK_TP: "#1D1D2401",
    GRAY: "#23232D",
    GRAY_LIGHT: "#2C2C36",
    GRAY_SELECTION: "#31313B"
  }
}, {
  name: "Cream",
  constants: {
    ...common,
    MAIN_DARK: "#908B67",
    MAIN: "#B9B384",
    MAIN_OVERLAY: "#B9B38426",
    MAIN_LIGHT: "#D0CA94",
    GRAY_DARK: "#1B1A17",
    GRAY_DARK_TP: "#1B1A1701",
    GRAY: "#201F1B",
    GRAY_LIGHT: "#27261F",
    GRAY_SELECTION: "#2C2B26"
  }
}, {
  name: "Mint",
  constants: {
    ...common,
    MAIN_DARK: "#4B8B60",
    MAIN: "#63B97F",
    MAIN_OVERLAY: "#63B97F4C",
    MAIN_LIGHT: "#7AD08F",
    GRAY_DARK: "#1B1B1C",
    GRAY_DARK_TP: "#1B1B1C01",
    GRAY: "#212121",
    GRAY_LIGHT: "#2A2A2A",
    GRAY_SELECTION: "#313131"
  }
}, {
  name: "Rose",
  constants: {
    ...common,
    MAIN_DARK: "#A95244",
    MAIN: "#FF7B5D",
    MAIN_OVERLAY: "#FF7B5D26",
    MAIN_LIGHT: "#FF926D",
    GRAY_DARK: "#1F1A18",
    GRAY_DARK_TP: "#1F1A1801",
    GRAY: "#26211E",
    GRAY_LIGHT: "#2B2623",
    GRAY_SELECTION: "#322B28"
  }
}];

export default themes;
