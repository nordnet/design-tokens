const fs = require("fs");

const currentTokensPath = "./tokens/designTokens.json";

describe("JSON file", () => {
  describe("should have color tokens", () => {
    it("with all our themes", () => {
      const data = fs.readFileSync(currentTokensPath);
      const colorTokens = JSON.parse(data).color;

      expect(colorTokens.light).toBeDefined();
      expect(colorTokens.dark).toBeDefined();
      expect(colorTokens.a11y).toBeDefined();
    });

    it("with the same categories", () => {
      const data = fs.readFileSync(currentTokensPath);
      const colorTokens = JSON.parse(data).color;

      const lightKeys = Object.keys(colorTokens.light).sort();
      const darkKeys = Object.keys(colorTokens.dark).sort();
      const a11yKeys = Object.keys(colorTokens.a11y).sort();

      expect(lightKeys).toEqual(darkKeys);
      expect(lightKeys).toEqual(a11yKeys);
    });

    it("with the same token names", () => {
      const data = fs.readFileSync(currentTokensPath);
      const colorTokens = JSON.parse(data).color;

      const lightKeys = Object.keys(colorTokens.light).sort();

      lightKeys.forEach((key) => {
        const tokenNamesLight = Object.keys(colorTokens.light[key])
          .sort()
          .map((x) => `${key}.${x}`);
        const tokenNamesDark = Object.keys(colorTokens.dark[key])
          .sort()
          .map((x) => `${key}.${x}`);
        const tokenNamesA11y = Object.keys(colorTokens.a11y[key])
          .sort()
          .map((x) => `${key}.${x}`);

        expect(tokenNamesLight).toEqual(tokenNamesDark);
        expect(tokenNamesLight).toEqual(tokenNamesA11y);
      });
    });
  });

  describe("should have effect tokens", () => {
    it("with all our themes", () => {
      const data = fs.readFileSync(currentTokensPath);
      const effectTokens = JSON.parse(data).effect;

      expect(effectTokens.light).toBeDefined();
      expect(effectTokens.dark).toBeDefined();
      expect(effectTokens.a11y).toBeDefined();
    });

    it("with the same categories", () => {
      const data = fs.readFileSync(currentTokensPath);
      const effectTokens = JSON.parse(data).effect;

      const lightKeys = Object.keys(effectTokens.light).sort();
      const darkKeys = Object.keys(effectTokens.dark).sort();
      const a11yKeys = Object.keys(effectTokens.a11y).sort();

      expect(lightKeys).toEqual(darkKeys);
      expect(lightKeys).toEqual(a11yKeys);
    });

    it("with the same token names", () => {
      const data = fs.readFileSync(currentTokensPath);
      const effectTokens = JSON.parse(data).effect;

      const lightKeys = Object.keys(effectTokens.light).sort();

      lightKeys.forEach((key) => {
        const tokenNamesLight = Object.keys(effectTokens.light[key])
          .sort()
          .map((x) => `${key}.${x}`);
        const tokenNamesDark = Object.keys(effectTokens.dark[key])
          .sort()
          .map((x) => `${key}.${x}`);
        const tokenNamesA11y = Object.keys(effectTokens.a11y[key])
          .sort()
          .map((x) => `${key}.${x}`);

        expect(tokenNamesLight).toEqual(tokenNamesDark);
        expect(tokenNamesLight).toEqual(tokenNamesA11y);
      });
    });
  });
});
