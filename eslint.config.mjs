import awesome from '@vchikalkin/eslint-config-awesome';
import tailwind from 'eslint-plugin-tailwindcss';

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...tailwind.configs['flat/recommended'],
  ...awesome['react-typescript'],
  {
    ignores: ['**/.next/**'],
    rules: {
      '@next/next/no-duplicate-head': 'off',
      'import/extensions': [
        'error',
        'never',
        {
          css: 'always',
          json: 'always',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          endOfLine: 'auto',
          insertPragma: false,
          jsxSingleQuote: false,
          printWidth: 100,
          proseWrap: 'preserve',
          quoteProps: 'as-needed',
          requirePragma: false,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
        { usePrettierrc: false },
      ],
    },
  },
];
