import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import importConfig from './eslint/import-eslint.config.mjs';
import generalConfig from './eslint/general-eslint.config.mjs';
import jestConfig from './eslint/jest-eslint.config.mjs';
import prettierConfig from './eslint/prettier-eslint.config.mjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  generalConfig,
  ...jestConfig,
  prettierConfig,
  importConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
