module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
      "parser": "@typescript-eslint/parser"
  },
  extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript"
  ],
  // add your custom rules here
  rules: {
      "no-console": "on",
      "no-debugger": "off",
      "quotes": ["warn","single"]
  }
}
