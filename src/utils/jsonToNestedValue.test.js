const { jsonToNestedValue } = require("./jsonToNestedValue");

const MockedColors = {
  color: {
    light: {
      neutral: {
        text_default: {
          description: "[DEPRECATED]",
          type: "color",
          value: "#212121ff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:b5017daa298129ffa56fb0288819233e3996fc00,",
              exportKey: "color",
            },
          },
        },
        text_weak: {
          description: "[DEPRECATED]",
          type: "color",
          value: "#6e6e6eff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:26d37025ac1fae8167856a3ba9b9097ae8021df5,",
              exportKey: "color",
            },
          },
        },
        border_brand: {
          description: "",
          type: "color",
          value: "#0000001a",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:b5042cf842dc52a19aeafaf44f794f8b3381bf2c,",
              exportKey: "color",
            },
          },
        },
      },
      action: {
        text_default: {
          description: "",
          type: "color",
          value: "#336bffff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:2eafa038f7698fc712cb4c4f70ea5f737e96adea,",
              exportKey: "color",
            },
          },
        },
      },
    },
  },
};

describe("jsonToNestedValues", () => {
  it("should return a nested object with only token names and values", () => {
    const result = jsonToNestedValue(MockedColors);
    expect(result).toEqual({
      color: {
        light: {
          action: {
            text_default: "#336bffff",
          },
          neutral: {
            border_brand: "#0000001a",
            text_default: "#212121ff",
            text_weak: "#6e6e6eff",
          },
        },
      },
    });
  });
});
