const StyleDictionary = require("style-dictionary");
const assert = require("node:assert");
const { getConfig } = require("./config");

const args = process.argv.slice(2).reduce((acc, pairStr) => {
  const [_key, value] = pairStr.split("=");
  const key = _key.replace("--", "");
  return { ...acc, [key]: value };
}, {});

assert(args.theme, 'Must provide "--theme" arg');
const baseConfig = getConfig(args.theme);

console.log(`🤖 Compiling tokens with the ${args.theme.toUpperCase()} theme`);

StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents, filePath }) => {
    return {
      color: JSON.parse(contents).color[args.theme],
    };
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
