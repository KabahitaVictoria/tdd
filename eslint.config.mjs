import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // General JavaScript config
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Add browser and Node globals
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Mocha-specific config for test files only
  {
    files: ["**/test.js"], // applies to any test.js in any folder
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
]);
