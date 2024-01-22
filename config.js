function getConfig(theme) {
  return {
    source: ["tokens/*.json"],
    platforms: {
      css: {
        transformGroup: "custom/css",
        buildPath: `src/generated/css/`,
        files: [
          {
            destination: `${theme}Theme.css`,
            format: "css/variables",
            filter: "validToken",
            options: {
              showFileHeader: false,
            },
          },
        ],
      },
      json: {
        transformGroup: "custom/js",
        buildPath: `src/generated/json/`,
        files: [
          {
            destination: `${theme}Theme.json`,
            format: "json/nested",
            filter: "validToken",
          },
        ],
      },
      js: {
        transformGroup: "custom/js",
        buildPath: `src/generated/js/`,
        files: [
          {
            destination: `${theme}Theme.ts`,
            format: "custom/javascript/esm",
            filter: "validToken",
          },
        ],
      },
    },
  };
}

module.exports = { getConfig };
