const StyleDictionary = require("style-dictionary");
const assert = require("node:assert");
const { getConfig } = require("./config");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function commonjsTemplate(token) {
  let output = '';
  if (token.deprecated || token.comment) {
    output += '  /**\n';
    if (token.deprecated) {
      output += `   * @deprecated ${token.name} is deprecated`;
      if (token.deprecated_comment) {
        output += ` (${token.deprecated_comment})`;
      }
      output += '\n';
    }
    if (token.comment) {
      output += `   * ${token.comment}\n`;
    }
    output += '   */\n';
  }
  output += `  ${token.name}: '${token.value}',\n`;
  return output;
}

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

StyleDictionary.registerFormat({
  formatter: (args) => {
    const symbols = args.dictionary.allProperties.map(commonjsTemplate).join('');
    return `module.exports = {\n${symbols}};\n`;
  },
  name: 'custom/format/javascript/module',
});

StyleDictionary.registerFormat({
  name: `typescript`,
  formatter: function ({ dictionary }) {
    function getValues() {
      return dictionary.allTokens
        .map((token) => {
          let value = JSON.stringify(token.value);
          // the `dictionary` object now has `usesReference()` and
          // `getReferences()` methods. `usesReference()` will return true if
          // the value has a reference in it. `getReferences()` will return
          // an array of references to the whole tokens so that you can access their
          // names or any other attributes.
          if (dictionary.usesReference(token.original.value)) {
            // Note: make sure to use `token.original.value` because
            // `token.value` is already resolved at this point.
            const refs = dictionary.getReferences(token.original.value);
            refs.forEach((ref) => {
              value = value.replace(ref.value, function () {
                return `${ref.name}`;
              });
            });
          }
          return `${token.name}: ${typeof value};`;
        })
        .join(`\n`);
    }

    return `export type ${capitalizeFirstLetter(
      args.theme
    )}Theme = { \n${getValues()}\n };`;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
