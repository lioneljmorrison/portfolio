import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextCoreWebVitals,
  globalIgnores(['.next/**', 'out/**', 'next-env.d.ts']),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multi-spaces': ['error'],
    },
  },
]);
