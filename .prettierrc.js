const config = {
  printWidth: 79,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  overrides: [
    {
      files: "./**/*.md",
      options: { parser: "markdown" },
    },
    {
      files: "*.yml",
      options: {
        singleQuote: false,
      },
    },
  ],
};
export default config;
