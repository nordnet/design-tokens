const StyleDictionary = require("style-dictionary");
const { getConfig } = require("./config");
const { javascriptEsm } = require("./format/javascriptEsm");

function log(x) {
  console.log(`🤖 ${x}`);
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
    formatter: javascriptEsm,
  });

  const config = getConfig(theme);
  const StyleDictionaryExtended = StyleDictionary.extend(config);

  StyleDictionaryExtended.buildAllPlatforms();
});
