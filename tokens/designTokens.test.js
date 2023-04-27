const fs = require("fs");

const currentTokensPath = "./tokens/colors.json";

describe("JSON file", () => {
  it("should contain our themes", () => {
    const data = fs.readFileSync(currentTokensPath);
    const jsonData = JSON.parse(data);

    expect(jsonData.color.light).toBeDefined();
    expect(jsonData.color.dark).toBeDefined();
    expect(jsonData.color.accessibility).toBeDefined();
  });

  it("the different themes should have the same categories", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();
    const darkKeys = Object.keys(colorTokens.dark).sort();
    const a11yKeys = Object.keys(colorTokens.accessibility).sort();

    expect(lightKeys).toEqual(darkKeys);
    expect(lightKeys).toEqual(a11yKeys);
  });

  it("all themes should have the same token names", () => {
    const data = fs.readFileSync(currentTokensPath);
    const colorTokens = JSON.parse(data).color;

    const lightKeys = Object.keys(colorTokens.light).sort();

    lightKeys.forEach((key) => {
      expect(Object.keys(colorTokens.dark[key]).sort()).toEqual(
        Object.keys(colorTokens.light[key]).sort()
      );
      expect(Object.keys(colorTokens.accessibility[key]).sort()).toEqual(
        Object.keys(colorTokens.light[key]).sort()
      );
    });
  });
});
