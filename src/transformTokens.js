const StyleDictionary = require("style-dictionary");
const { getConfig } = require("./config");
const { javascriptEsm } = require("./format/javascriptEsm");
const { webShadows } = require("./transform/webShadows");

function log(x) {
  console.log(`🤖 ${x}`);
}

const supportedThemes = ["light", "dark", "a11y"];

StyleDictionary.registerFilter({
  name: "validToken",
  matcher: function (token) {
    return [
      "dimension",
      "string",
      "number",
      "color",
      "custom-spacing",
      "custom-gradient",
      "custom-fontStyle",
      "custom-radius",
      "custom-shadow",
    ].includes(token.type);
  },
});

StyleDictionary.registerTransform({
  name: "custom/web/shadow",
  ...webShadows,
});
StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: [...StyleDictionary.transformGroup.css, "custom/web/shadow"],
});
StyleDictionary.registerTransformGroup({
  name: "custom/js",
  transforms: [...StyleDictionary.transformGroup.js, "custom/web/shadow"],
});

supportedThemes.map((theme) => {
  log(`Compiling tokens for the ${theme.toUpperCase()} theme`);

  StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents }) => {
      const tokens = JSON.parse(contents);
      return {
        color: tokens.color[theme],
        effect: tokens.effect[theme],
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
