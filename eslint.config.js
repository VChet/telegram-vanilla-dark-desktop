import neostandard from "neostandard";

export default [
  ...neostandard({
    ts: true,
    noJsx: true,
    semi: true
  }),
  {
    rules: {
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/space-before-function-paren": ["error", "never"]
    }
  }
];
