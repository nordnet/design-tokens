const { AccessibilityTheme } = require("./build/types/accessibilityTheme");
const { DarkTheme } = require("./build/types/darkTheme");
const { LightTheme } = require("./build/types/lightTheme");

const accessibilityTheme = require("./build/js/lightTheme.js");
const darkTheme = require("./build/js/lightTheme.js");
const lightTheme = require("./build/js/lightTheme.js");

export {
  accessibilityTheme,
  darkTheme,
  lightTheme,
  AccessibilityTheme,
  DarkTheme,
  LightTheme,
};
