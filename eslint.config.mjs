import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Global ignores
  {
    ignores: ["node_modules/**", "dist/**", "build/**", ".storybook/**"],
  },

  // Main config for TypeScript/React files
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "unused-imports": unusedImports,
      import: importPlugin,
    },
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended?.rules,

      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off", // We use TypeScript for prop validation
      "react/no-unescaped-entities": "off", // Allow quotes in JSX

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",

      // Import rules
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // Unused imports rules
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Storybook
  ...storybook.configs["flat/recommended"],

  // Storybook overrides
  {
    files: ["**/*.stories.tsx"],
    rules: {
      // We use @storybook/react-vite but import types from @storybook/react
      "storybook/no-renderer-packages": "off",
    },
  },
];

export default config;
