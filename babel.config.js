module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // your main source folder
          alias: {
            "@": "./src", // 👈 now @ means your src folder
          },
        },
      ],
    ],

    // If using Expo Router, include:
    // plugins: ["expo-router/babel", "react-native-reanimated/plugin"]
  };
};
