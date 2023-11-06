module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
      },
      files: ["**/*.test.tsx", "**/*.test.ts"],
    },
  ],
};
