const fs = require("fs");

const currentTokensPath = "./src/tokens/designTokens.json";

describe("JSON file", () => {
  it("should contain our themes", () => {
    const data = fs.readFileSync(currentTokensPath);
    const jsonData = JSON.parse(data);

    expect(jsonData.color.light).toBeDefined();
    expect(jsonData.color.dark).toBeDefined();
    expect(jsonData.color.a11y).toBeDefined();
  });

  it("light and dark themes should have the same categories", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();
    const darkKeys = Object.keys(colorTokens.dark).sort();

    expect(lightKeys).toEqual(darkKeys);
  });

  it("light and ally themes should have the same categories", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();
    const a11yKeys = Object.keys(colorTokens.a11y).sort();

    expect(lightKeys).toEqual(a11yKeys);
  });

  it("light and dark themes should have the same token names", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();

    lightKeys.forEach((key) => {
      expect(Object.keys(colorTokens.dark[key]).sort()).toEqual(
        Object.keys(colorTokens.light[key]).sort()
      );

      const lightThemeTokenNames = Object.keys(colorTokens.light[key])
        .sort()
        .map((x) => `${key}.${x}`);
      const darkThemeTokenNames = Object.keys(colorTokens.dark[key])
        .sort()
        .map((x) => `${key}.${x}`);

      expect(lightThemeTokenNames).toEqual(darkThemeTokenNames);
    });
  });

  it("light and a11y themes should have the same token names", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();

    lightKeys.forEach((key) => {
      const lightThemeTokenNames = Object.keys(colorTokens.light[key])
        .sort()
        .map((x) => `${key}.${x}`);
      const a11yThemeTokenNames = Object.keys(colorTokens.a11y[key])
        .sort()
        .map((x) => `${key}.${x}`);

      expect(lightThemeTokenNames).toEqual(a11yThemeTokenNames);
    });
  });
});
