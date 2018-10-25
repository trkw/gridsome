module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["airbnb-base/legacy", "plugin:vue/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    // Web Componentsと差別化を図るため
    "vue/component-name-in-template-casing": "PascalCase",
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-indent": ["error", "tab"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          normal: "never"
        }
      }
    ],
    "vue/no-multi-spaces": "error",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
