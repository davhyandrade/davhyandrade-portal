import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import jestPlugin from 'eslint-plugin-jest';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

const generalConfig = {
  rules: {
    camelcase: [
      'error',
      {
        ignoreImports: true,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration > FunctionDeclaration',
        message:
          'Do not export functions directly in the default. Separate the declaration.',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
      },
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
};

const prettierConfig = {
  ...prettier,
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: false }],
  },
};

const jestFiles = ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**/*'];

const jestConfig = [
  {
    files: jestFiles,
    ...jestPlugin.configs['flat/recommended'],
  },
  {
    files: jestFiles,
    ...jestPlugin.configs['flat/style'],
  },
  {
    files: jestFiles,
    ...testingLibraryPlugin.configs['flat/react'],
  },
  {
    files: jestFiles,
    rules: {
      'jest/consistent-test-it': ['error', { fn: 'it' }],
      'jest/valid-title': ['error', { disallowedWords: ['should', 'must'] }],
      'jest/prefer-lowercase-title': 'error',
      'testing-library/prefer-user-event-setup': 'error',
      'testing-library/prefer-user-event': 'error',
    },
  },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...jestConfig,
  generalConfig,
  prettierConfig,
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
