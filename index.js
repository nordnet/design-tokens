const { AccessibilityTheme } = require('./build/types/accessibilityTheme');
const { DarkTheme } = require('./build/types/darkTheme');
const { LightTheme } = require('./build/types/lightTheme');

const accessibilityTheme = require('./build/json/lightTheme.json');
const darkTheme = require('./build/json/lightTheme.json');
const lightTheme = require('./build/json/lightTheme.json');

export {
    accessibilityTheme,
    darkTheme,
    lightTheme,
    AccessibilityTheme,
    DarkTheme,
    LightTheme
}
