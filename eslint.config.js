import neostandard from "neostandard";

export default [
  ...neostandard(),
  {
    rules: {
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/space-before-function-paren": ["error", "never"]
    }
  }
];
