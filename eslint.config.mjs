/* eslint-disable unicorn/import-style */
/* eslint-disable unicorn/prefer-node-protocol */
/* eslint-disable unicorn/prefer-import-meta-properties */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:drizzle/all", "prettier"),
  eslintPluginUnicorn.configs.all,
];

export default eslintConfig;
