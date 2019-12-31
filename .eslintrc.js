module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "prettier/vue", "plugin:prettier/recommended"],
  rules: {
    "no-console": "warn",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-unused-components": [
      "off",
      {
        ignoreWhenBindingPresent: false
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
