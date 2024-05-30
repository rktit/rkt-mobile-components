module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
        disableInlineStylesWarning: true,
      },
    ],
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".json",
        ],
      },
    ],
  ],
};
