const StyleDictionary = require("style-dictionary");
const { format } = require("prettier");
const jsonToTs = require("json-to-ts");
const { getConfig } = require("./config");
const { jsonToNestedValue } = require("./utils/jsonToNestedValue");

function log(x) {
  console.log(`🤖 ${x}`);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addDeprecationComment(interfaceString, category, propertyName) {
  const regex = new RegExp(`(?<=${category} {[\\s\\S]*?)${propertyName}`);
  return interfaceString.replace(regex, "/** @deprecated */\n" + propertyName);
}

function deprecateTokens(paths, interfaceString) {
  let output = interfaceString;
  paths.forEach((path) => {
    const interfaceName = path[path.length - 2];
    const propertyName = path[path.length - 1];
    output = addDeprecationComment(
      output,
      capitalizeFirstLetter(interfaceName),
      propertyName
    );
  });
  return output;
}

const supportedThemes = ["light", "dark", "a11y"];

supportedThemes.map((theme) => {
  log(`Compiling tokens for the ${theme.toUpperCase()} theme`);

  StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents }) => {
      const tokens = JSON.parse(contents);
      return {
        color: tokens.color[theme],
        // effect: tokens.effect[theme],
      };
    },
  });

  StyleDictionary.registerFormat({
    name: "custom/javascript/esm",
    formatter: function ({ dictionary, options: _options, platform = {} }) {
      const typesName = `${capitalizeFirstLetter(theme)}Theme`;
      const { prefix } = platform;
      const tokens = prefix
        ? { [prefix]: dictionary.tokens }
        : dictionary.tokens;

      const nestedValues = jsonToNestedValue(tokens);

      const pathsToDeprecatedTokens = dictionary.allTokens
        .map((token) => {
          if (token.description.includes("[DEPRECATED]")) {
            return token.path;
          }
        })
        .filter(Boolean);

      const types = jsonToTs(nestedValues, { rootName: `${typesName}` }).join(
        "\n"
      );
      const typesWithDeprecations = deprecateTokens(
        pathsToDeprecatedTokens,
        types
      );

      const output =
        `export ${typesWithDeprecations}` +
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
