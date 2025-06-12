module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // If using Expo Router, include:
    // plugins: ["expo-router/babel", "react-native-reanimated/plugin"]
  };
};
