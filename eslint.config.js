import antfu from "@antfu/eslint-config";

export default antfu({
  toml: false,
  rules: {
    "no-console": "off",
    "style/arrow-parens": ["error", "always"],
    "style/brace-style": ["error", "1tbs"],
    "style/comma-dangle": ["error", "never"],
    "style/max-statements-per-line": "off",
    "style/operator-linebreak": ["error", "after"],
    "style/quotes": ["error", "double"],
    "style/semi": ["error", "always"],
    "antfu/if-newline": "off",
    "ts/consistent-type-definitions": "off",
    "yaml/quotes": ["error", { prefer: "double" }]
  }
});
