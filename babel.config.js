module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // أضف مصفوفة plugins هذه:
    plugins: ["react-native-reanimated/plugin"],
  };
};
