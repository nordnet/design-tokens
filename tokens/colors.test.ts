const fs = require("fs");

describe("My JSON file", () => {
  it("should contain valid JSON", () => {
    const currentTokensPath = "./tokens/colors.json";
    const data = fs.readFileSync(currentTokensPath);
    const jsonData = JSON.parse(data);

    expect(jsonData.color.light).toBeDefined();
    expect(jsonData.color.dark).toBeDefined();
    expect(jsonData.color.accessibility).toBeDefined();
  });

  it("should contain equal amount of category keys", () => {
    const currentTokensPath = "./tokens/colors.json";
    const data = fs.readFileSync(currentTokensPath);
    const jsonData = JSON.parse(data);

    const lightKeys = Object.keys(jsonData.color.light);
    const darkKeys = Object.keys(jsonData.color.dark);
    const a11yKeys = Object.keys(jsonData.color.accessibility);
    expect(lightKeys).toEqual(darkKeys);
    expect(lightKeys).toEqual(a11yKeys);
  });

  it("should contain same keys in each category", () => {
    const currentTokensPath = "./tokens/colors.json";
    const data = fs.readFileSync(currentTokensPath);
    const jsonData = JSON.parse(data);

    const lightKeys = Object.keys(jsonData.color.light);
    lightKeys.forEach((key) => {
      expect(Object.keys(jsonData.color.dark[key]).sort()).toEqual(
        Object.keys(jsonData.color.light[key]).sort()
      );
    });
  });
});
