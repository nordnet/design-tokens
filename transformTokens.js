const StyleDictionary = require("style-dictionary");
const { getConfig } = require("./config");

const { fileHeader } = StyleDictionary.formatHelpers;

const supportedThemes = ["light", "dark", "accessibility"];

// TODO: we need to allow for partial exports from designers, maybe save tokens/colors-${PR_number}.json and marge programatically into tokens/colors.json

supportedThemes.map((theme) => {
  console.log(`🤖 Compiling tokens for the ${theme.toUpperCase()} theme`);

  StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents }) => {
      return {
        color: JSON.parse(contents).color[theme],
      };
    },
  });

  StyleDictionary.registerFormat({
    name: "custom/typescript/es6-declarations",
    formatter: function ({ dictionary, file }) {
      return (
        fileHeader({ file }) +
        dictionary.allTokens
          .map(function (token) {
            return `export declare const ${token.name}: string;`;
          })
          .join("\n")
      );
    },
  });

  const config = getConfig(theme);
  const StyleDictionaryExtended = StyleDictionary.extend(config);

  StyleDictionaryExtended.buildAllPlatforms();
});
