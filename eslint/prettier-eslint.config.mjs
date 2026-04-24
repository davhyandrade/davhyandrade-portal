import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

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

export default prettierConfig;
