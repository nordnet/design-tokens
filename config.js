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
      ios: {
        transformGroup: "ios",
        buildPath: `build/ios/${theme}-theme/`,
        files: [
          {
            destination: "StyleDictionaryColor.h",
            format: "ios/colors.h",
            className: "StyleDictionaryColor",
            type: "StyleDictionaryColorName",
            filter: {
              type: "color",
            },
          },
          {
            destination: "StyleDictionaryColor.m",
            format: "ios/colors.m",
            className: "StyleDictionaryColor",
            type: "StyleDictionaryColorName",
            filter: {
              type: "color",
            },
          },
        ],
      },
      iosSwift: {
        transformGroup: "ios-swift",
        buildPath: `build/ios-swift/${theme}-theme/`,
        files: [
          {
            destination: "StyleDictionary.swift",
            format: "ios-swift/class.swift",
            className: "StyleDictionary",
            filter: {},
          },
        ],
      },
      iosSwiftSeparateEnums: {
        transformGroup: "ios-swift-separate",
        buildPath: "build/ios-swift/",
        files: [
          {
            destination: "StyleDictionaryColor.swift",
            format: "ios-swift/enum.swift",
            className: "StyleDictionaryColor",
            filter: {
              type: "color",
            },
          },
        ],
      },
    },
  };
}

module.exports = { getConfig };
