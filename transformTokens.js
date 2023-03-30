const StyleDictionary = require("style-dictionary");
const fs = require("node:fs");
const { getConfig } = require("./config");

function log(x) {
  console.log(`🤖 ${x}`);
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

  const config = getConfig(theme);
  const StyleDictionaryExtended = StyleDictionary.extend(config);

  StyleDictionaryExtended.buildAllPlatforms();
});
