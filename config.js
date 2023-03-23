function getConfig(theme) {
  return {
    source: ["tokens/*.json"],
    platforms: {
      css: {
        buildPath: `dist/css/`,
        files: [
          {
            destination: `${theme}Theme.css`,
            format: "css/variables",
            options: {
              showFileHeader: false,
            },
          },
        ],
        transformGroup: "css",
      },
      jsonFlat: {
        buildPath: `dist/json/`,
        files: [
          {
            destination: `${theme}Theme.json`,
            format: "json/flat",
          },
        ],
        transformGroup: "js",
        transforms: ["name/cti/camel"],
      },
      js: {
        buildPath: `dist/js/`,
        files: [
          {
            destination: `${theme}Theme.js`,
            format: "javascript/es6",
          },
          {
            destination: `${theme}Theme.d.ts`,
            format: "custom/typescript/es6-declarations",
          },
        ],
        transformGroup: "js",
        transforms: ["name/cti/camel"],
      },
    },
  };
}

module.exports = { getConfig };
