import importPlugin from 'eslint-plugin-import';

const importConfig = {
  ...importPlugin.flatConfigs.recommended,
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    import: importPlugin,
  },
  rules: {
    ...importPlugin.flatConfigs.recommended.rules,
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

export default importConfig;
