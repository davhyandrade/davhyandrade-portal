import jestPlugin from 'eslint-plugin-jest';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

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
      'no-restricted-imports': 'off',
    },
  },
];

export default jestConfig;
