import neostandard from "neostandard";

export default [
  ...neostandard({
    ts: true,
    noJsx: true,
    semi: true
  }),
  {
    rules: {
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/operator-linebreak": ["error", "after"],
      "@stylistic/member-delimiter-style": ["error", {
        multiline: { delimiter: "none", requireLast: false },
        multilineDetection: "brackets",
        singleline: { delimiter: "comma" }
      }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/space-before-function-paren": ["error", {
        anonymous: "always",
        asyncArrow: "always",
        named: "never"
      }],
      "no-console": ["warn", { allow: ["error", "warn", "table", "info"] }],
      "no-else-return": ["error", { allowElseIf: true }]
    }
  }
];
