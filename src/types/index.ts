export type HEX = `#${string}`;
export type RGB = { r: number, g: number, b: number };

export interface Theme {
  name: string
  constants: {
    MAIN_DARK: HEX
    MAIN: HEX
    MAIN_OVERLAY: HEX
    MAIN_LIGHT: HEX
    GRAY_DARK: HEX
    GRAY_DARK_TP: HEX
    GRAY: HEX
    GRAY_LIGHT: HEX
    GRAY_SELECTION: HEX
    TEXT?: HEX
    LIGHT?: HEX
    WHITE?: HEX
    TRANSPARENT?: HEX
  }
}
