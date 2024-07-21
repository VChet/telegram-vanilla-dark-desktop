import standard from "eslint-config-standard";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.config(standard),
  {
    languageOptions: {
      parserOptions: { ecmaVersion: "latest" }
    },
    rules: {
      "max-len": ["warn", { code: 120 }],
      "no-console": ["warn", { allow: ["error"] }],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "space-before-function-paren": ["error", "never"]
    }
  }
];
