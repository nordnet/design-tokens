function getConfig(theme) {
  return {
    source: ["tokens/*.json"],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: `dist/${theme}Theme/css/`,
        files: [
          {
            destination: `_tokens.css`,
            format: "css/variables",
            options: {
              showFileHeader: false,
            },
          },
        ]
      },
      jsonFlat: {
        transformGroup: "js",
        buildPath: `dist/${theme}Theme/json/`,
        files: [
          {
            destination: `tokens.json`,
            format: "json/flat",
          },
        ],
        transforms: ['name/cti/camel'],
      },
      js: {
        buildPath: `dist/${theme}Theme/js/`,
        files: [
          {
            destination: `tokens.mjs`,
            format: 'javascript/es6',
          },
          {
            destination: `tokens.cjs`,
            format: 'custom/format/javascript/module',
          },
        ],
        transformGroup: 'js',
        transforms: ['name/cti/camel'],
      },
      ts: {
        buildPath: `dist/${theme}Theme/js/`,
        files: [
          {
            destination: `tokens.d.ts`,
            format: 'typescript/es6-declarations',
          }
        ],
        transformGroup: 'js',
        transforms: ['name/cti/pascal'],
      },
    },
  };
}

module.exports = { getConfig };
