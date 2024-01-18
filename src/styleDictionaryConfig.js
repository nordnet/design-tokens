function getConfig(theme) {
  return {
    source: ["src/tokens/*.json"],
    platforms: {
      css: {
        buildPath: `src/generated/css/`,
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
      json: {
        buildPath: `src/generated/json/`,
        files: [
          {
            destination: `${theme}Theme.json`,
            format: "json/nested",
          },
        ],
        transformGroup: "js",
        transforms: ["name/cti/camel"],
      },
      js: {
        buildPath: `src/generated/js/`,
        files: [
          {
            destination: `${theme}Theme.ts`,
            format: "custom/javascript/esm",
          },
        ],
        transformGroup: "js",
        transforms: ["name/cti/camel"],
      },
    },
  };
}

module.exports = { getConfig };
