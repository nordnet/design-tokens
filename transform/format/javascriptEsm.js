const { format } = require("prettier");
const jsonToTs = require("json-to-ts");
const {
  jsonToNestedValue,
} = require("../../transform/utils/jsonToNestedValue");

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

function javascriptEsm({ dictionary, options: _options, platform = {} }) {
  const typeRootName = "Theme";
  const { prefix } = platform;
  const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;

  const nestedValues = jsonToNestedValue(tokens);

  const pathsToDeprecatedTokens = dictionary.allTokens
    .map((token) => {
      if (token.description && token.description.includes("[DEPRECATED]")) {
        return token.path;
      }
    })
    .filter(Boolean);

  const types = jsonToTs(nestedValues, { rootName: `${typeRootName}` }).join(
    "\n"
  );
  const typesWithDeprecations = deprecateTokens(pathsToDeprecatedTokens, types);

  const output =
    `export ${typesWithDeprecations}` +
    `export const theme: ${typeRootName} = \n${JSON.stringify(
      nestedValues,
      null,
      2
    )}\n`;
  return format(output, { parser: "typescript", printWidth: 500 });
}

module.exports = {
  javascriptEsm,
};
