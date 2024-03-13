export type ThemeType = typeof theme;
export type SizingType = keyof typeof sizing;
export type SpacingType = keyof typeof spacing;
export type IntentType = keyof typeof intent;
export type ColoursType = typeof colours;
export type ColoursPathType =
  | "primary.main"
  | "primary.darkest"
  | "primary.lighter"
  | "primary.contrast"
  | "secondary.main"
  | "secondary.darkest"
  | "secondary.lighter"
  | "secondary.contrast"
  | "common.white"
  | "common.black"
  | "intent.warning"
  | "intent.info"
  | "intent.error"
  | "intent.success"
  | "neutrals.0"
  | "neutrals.1"
  | "neutrals.2"
  | "neutrals.3"
  | "neutrals.4"
  | "neutrals.5"
  | "neutrals.6"
  | "neutrals.7"
  | "neutrals.8"
  | "neutrals.9"
  | "neutrals.10"
  | "neutrals.11"
  | "neutrals.12"
  | "neutrals.13"
  | "neutrals.14"
  | "neutrals.15"
  | "neutrals.16"
  | "neutrals.17"
  | "neutrals.18"
  | "neutrals.19"
  | "neutrals.20"
  | "disabled.main"
  | "disabled.contrast";

const sizing = {
  xxs: "1px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px",
  xxl: "64px",
  xxxl: "128px",
  inputSmall: "150px",
  inputMedium: "200px",
  inputLarge: "250px",
  containerSmall: "400px",
  containerMedium: "800px",
  containerLarge: "1200px",
  full: "100%",
  tableRowMedium: "50px",
  tableRowLarge: "100px",
  checkbox: "20px",
};

const spacing = {
  xxs: "1px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px",
  xxl: "64px",
};

const intent = {
  success: {
    darkest: "#2a9d48",
    main: "#34c759",
    lighter: "#60d77e",
    contrast: "#ffffff",
  },
  warning: {
    darkest: "#cca300",
    main: "#ffcc00",
    lighter: "#ffdc32",
    contrast: "#ffffff",
  },
  error: {
    darkest: "#e33028",
    main: "#ff3a30",
    lighter: "#ff5e57",
    contrast: "#ffffff",
  },
  info: {
    darkest: "#0069d9",
    main: "#007bff",
    lighter: "#339bff",
    contrast: "#ffffff",
  },
};

const colours = {
  primary: {
    darkest: "#b74821",
    main: "#df5a2a",
    lighter: "#f87c4f",
    contrast: "#ffffff",
  },
  secondary: {
    darkest: "#999a9c",
    main: "#c9c9ca",
    lighter: "#dbdbdc",
    contrast: "#ffffff",
  },
  common: {
    white: "#ffffff",
    black: "#000000",
  },
  disabled: {
    main: "#e0e0e0",
    contrast: "#a6a6a6",
  },
  neutrals: {
    "0": "#ffffff",
    "1": "#fafbfb",
    "2": "#f8f8f8",
    "3": "#f4f4f4",
    "4": "#ededed",
    "5": "#e8e9e9",
    "6": "#e4e4e4",
    "7": "#dbdbdc",
    "8": "#d2d2d3",
    "9": "#c9c9ca",
    "10": "#c4c5c6",
    "11": "#bbbcbd",
    "12": "#b0b1b2",
    "13": "#a4a5a7",
    "14": "#999a9c",
    "15": "#898b8c",
    "16": "#77797a",
    "17": "#606264",
    "18": "#494c4e",
    "19": "#333538",
    "20": "#1c1f22",
  },
  intent,
};

export const theme = {
  spacing,
  sizing,
  colours,
  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
  },
  border: {
    thin: "1px solid",
    medium: "2px solid",
  },
  font: {
    size: {
      h1: "6rem",
      h2: "3.75rem",
      h3: "3rem",
      h4: "2.125rem",
      h5: "1.5rem",
      h6: "1.25rem",
      body1: "16px",
      body2: "14px",
      caption: "12px",
    },
  },
  elevation: [
    "none",
    "0px 2px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 0px rgba(0, 0, 0, 0.06)",
    "0px 3px 1px -2px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.07), 0px 1px 5px 0px rgba(0, 0, 0, 0.06)",
    "0px 3px 3px -2px rgba(0, 0, 0, 0.1), 0px 3px 4px 0px rgba(0, 0, 0, 0.07), 0px 1px 8px 0px rgba(0, 0, 0, 0.06)",
    "0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.06)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.1), 0px 5px 8px 0px rgba(0, 0, 0, 0.07), 0px 1px 14px 0px rgba(0, 0, 0, 0.06)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.1), 0px 6px 10px 0px rgba(0, 0, 0, 0.07), 0px 1px 18px 0px rgba(0, 0, 0, 0.06)",
    "0px 4px 5px -2px rgba(0, 0, 0, 0.1), 0px 7px 10px 1px rgba(0, 0, 0, 0.07), 0px 2px 16px 1px rgba(0, 0, 0, 0.06)",
    "0px 5px 5px -3px rgba(0, 0, 0, 0.1), 0px 8px 10px 1px rgba(0, 0, 0, 0.07), 0px 3px 14px 2px rgba(0, 0, 0, 0.06)",
    "0px 5px 6px -3px rgba(0, 0, 0, 0.1), 0px 9px 12px 1px rgba(0, 0, 0, 0.07), 0px 3px 16px 2px rgba(0, 0, 0, 0.06)",
    "0px 6px 6px -3px rgba(0, 0, 0, 0.1), 0px 10px 14px 1px rgba(0, 0, 0, 0.07), 0px 4px 18px 3px rgba(0, 0, 0, 0.06)",
    "0px 6px 7px -4px rgba(0, 0, 0, 0.1), 0px 11px 15px 1px rgba(0, 0, 0, 0.07), 0px 4px 20px 3px rgba(0, 0, 0, 0.06)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.1), 0px 12px 17px 2px rgba(0, 0, 0, 0.07), 0px 5px 22px 4px rgba(0, 0, 0, 0.06)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.1), 0px 13px 19px 2px rgba(0, 0, 0, 0.07), 0px 5px 24px 4px rgba(0, 0, 0, 0.06)",
    "0px 7px 9px -4px rgba(0, 0, 0, 0.1), 0px 14px 21px 2px rgba(0, 0, 0, 0.07), 0px 5px 26px 4px rgba(0, 0, 0, 0.06)",
    "0px 8px 9px -5px rgba(0, 0, 0, 0.1), 0px 15px 22px 2px rgba(0, 0, 0, 0.07), 0px 6px 28px 5px rgba(0, 0, 0, 0.06)",
    "0px 8px 10px -5px rgba(0, 0, 0, 0.1), 0px 16px 24px 2px rgba(0, 0, 0, 0.07), 0px 6px 30px 5px rgba(0, 0, 0, 0.06)",
    "0px 8px 11px -5px rgba(0, 0, 0, 0.1), 0px 17px 26px 2px rgba(0, 0, 0, 0.07), 0px 6px 32px 5px rgba(0, 0, 0, 0.06)",
    "0px 9px 11px -5px rgba(0, 0, 0, 0.1), 0px 18px 28px 2px rgba(0, 0, 0, 0.07), 0px 7px 34px 6px rgba(0, 0, 0, 0.06)",
    "0px 9px 12px -6px rgba(0, 0, 0, 0.1), 0px 19px 29px 2px rgba(0, 0, 0, 0.07), 0px 7px 36px 6px rgba(0, 0, 0, 0.06)",
    "0px 10px 13px -6px rgba(0, 0, 0, 0.1), 0px 20px 31px 3px rgba(0, 0, 0, 0.07), 0px 8px 38px 7px rgba(0, 0, 0, 0.06)",
    "0px 10px 13px -6px rgba(0, 0, 0, 0.1), 0px 21px 33px 3px rgba(0, 0, 0, 0.07), 0px 8px 40px 7px rgba(0, 0, 0, 0.06)",
    "0px 10px 14px -6px rgba(0, 0, 0, 0.1), 0px 22px 35px 3px rgba(0, 0, 0, 0.07), 0px 8px 42px 7px rgba(0, 0, 0, 0.06)",
    "0px 11px 14px -7px rgba(0, 0, 0, 0.1), 0px 23px 36px 3px rgba(0, 0, 0, 0.07), 0px 9px 44px 8px rgba(0, 0, 0, 0.06)",
    "0px 11px 15px -7px rgba(0, 0, 0, 0.1), 0px 24px 38px 3px rgba(0, 0, 0, 0.07), 0px 9px 46px 8px rgba(0, 0, 0, 0.06)",
  ],
};
