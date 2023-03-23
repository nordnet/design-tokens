const StyleDictionary = require("style-dictionary");
const assert = require("node:assert");
const { getConfig } = require("./config");

const { fileHeader } = StyleDictionary.formatHelpers;

const args = process.argv.slice(2).reduce((acc, pairStr) => {
  const [_key, value] = pairStr.split("=");
  const key = _key.replace("--", "");
  return { ...acc, [key]: value };
}, {});

assert(args.theme, 'Must provide "--theme" arg');
const baseConfig = getConfig(args.theme);

console.log(`🤖 Compiling tokens for the ${args.theme.toUpperCase()} theme`);

StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents }) => {
    return {
      color: JSON.parse(contents).color[args.theme],
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

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
