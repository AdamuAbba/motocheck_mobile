module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["."],
          alias: {
            "@assets": "./app/assets",
            "@components": "./app/components",
            "@screens": "./app/screens",
            "@utils": "./app/utils",
            "@routes": "./app/routes",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
