import { Theme } from "./types/Theme";

const common: Record<string, string> = {
  TEXT: "#AAAAAA",
  LIGHT: "#CCCCCC",
  WHITE: "#FFFFFF",
  TRANSPARENT: "#00000000"
};

const themes: Array<Theme> = [{
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
    MAIN_OVERLAY: "#B9B3844C",
    MAIN_LIGHT: "#D0CA94",
    GRAY_DARK: "#191919",
    GRAY_DARK_TP: "#19191901",
    GRAY: "#222222",
    GRAY_LIGHT: "#272727",
    GRAY_SELECTION: "#2C2C2C"
  }
}, {
  name: "Green",
  constants: {
    ...common,
    MAIN_DARK: "#4B8B60",
    MAIN: "#63B97F",
    MAIN_OVERLAY: "#63B97F4C",
    MAIN_LIGHT: "#7AD08F",
    GRAY_DARK: "#19191A",
    GRAY_DARK_TP: "#19191A01",
    GRAY: "#212122",
    GRAY_LIGHT: "#2A2A2C",
    GRAY_SELECTION: "#2F2F31"
  }
}, {
  name: "Red",
  constants: {
    ...common,
    MAIN_DARK: "#B35843",
    MAIN: "#FF7B5D",
    MAIN_OVERLAY: "#FF7B5D4C",
    MAIN_LIGHT: "#FF926D",
    GRAY_DARK: "#262A2E",
    GRAY_DARK_TP: "#262A2E01",
    GRAY: "#2B3034",
    GRAY_LIGHT: "#2F353A",
    GRAY_SELECTION: "#33393E"
  }
}];

export default themes;
