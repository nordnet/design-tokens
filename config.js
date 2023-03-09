function getConfig(theme) {
  return {
    source: ["tokens/*.json"],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "build/css/",
        files: [
          {
            destination: `_${theme}Theme.css`,
            format: "css/variables",
            options: {
              showFileHeader: false,
            },
          },
        ],
      },
      jsonFlat: {
        transformGroup: "js",
        buildPath: "build/json/",
        files: [
          {
            destination: `${theme}Theme.json`,
            format: "json/flat",
          },
        ],
      },
      typescript: {
        transformGroup: "js",
        buildPath: "build/types/",
        files: [
          {
            destination: `${theme}Theme.ts`,
            format: "typescript",
          },
        ],
      },
    },
  };
}

module.exports = { getConfig };
