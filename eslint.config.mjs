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
  },
];
