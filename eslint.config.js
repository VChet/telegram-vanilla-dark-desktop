import neostandard from "neostandard";

export default [
  ...neostandard({
    ts: true,
    noJsx: true,
    semi: true
  }),
  {
    rules: {
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/operator-linebreak": ["error", "after"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/space-before-function-paren": ["error", "never"]
    }
  }
];
