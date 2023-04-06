const StyleDictionary = require("style-dictionary");
const fs = require("node:fs");
const { format } = require("prettier");
const jsonToTs = require("json-to-ts");
const { getConfig } = require("./config");
const { jsonToNestedValue } = require("./src/utils/jsonToNestedValue");

function log(x) {
  console.log(`🤖 ${x}`);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const { fileHeader } = StyleDictionary.formatHelpers;
const supportedThemes = ["light", "dark", "accessibility"];
const incomingUpdatesFilePath = "./tokens/updates/colors.json";
const currentTokensPath = "./tokens/colors.json";

if (fs.existsSync(incomingUpdatesFilePath)) {
  log("Found new tokens");
  const incomingUpdatesFile = fs.readFileSync(incomingUpdatesFilePath);
  const incomingUpdates = JSON.parse(incomingUpdatesFile);
  const themesToReplace = Object.keys(incomingUpdates.color);

  const currentTokensFile = fs.readFileSync(currentTokensPath);
  const currentTokens = JSON.parse(currentTokensFile);
  let updatedTokens = currentTokens;

  themesToReplace.map((theme) => {
    updatedTokens.color[theme] = incomingUpdates.color[theme];
  });

  const updatedTokensJson = JSON.stringify(updatedTokens, null, 2);
  fs.writeFileSync(currentTokensPath, updatedTokensJson);
  log("Updated tokens");

  fs.unlink(incomingUpdatesFilePath, (err) => {
    if (err) {
      throw err;
    }
  });
}

supportedThemes.map((theme) => {
  log(`Compiling tokens for the ${theme.toUpperCase()} theme`);

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
            return `export declare const ${token.name}: '${token.value}';`;
          })
          .join("\n")
      );
    },
  });

  StyleDictionary.registerFormat({
    name: "custom/javascript/esm",
    formatter: function ({
      dictionary,
      file,
      options: _options,
      platform = {},
    }) {
      const typesName = `${capitalizeFirstLetter(theme)}Theme`;
      const { prefix } = platform;
      const tokens = prefix
        ? { [prefix]: dictionary.tokens }
        : dictionary.tokens;

      const nestedValues = jsonToNestedValue(tokens);
      const types = jsonToTs(nestedValues, { rootName: `${typesName}` }).join(
        "\n"
      );

      const output =
        fileHeader({ file }) +
        `export ${types}` +
        `export const colors: ${typesName} = \n${JSON.stringify(
          nestedValues,
          null,
          2
        )}\n`;
      return format(output, { parser: "typescript", printWidth: 500 });
    },
  });

  const config = getConfig(theme);
  const StyleDictionaryExtended = StyleDictionary.extend(config);

  StyleDictionaryExtended.buildAllPlatforms();
});
