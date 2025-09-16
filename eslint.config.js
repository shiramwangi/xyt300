// @ts-check
import js from '@eslint/js'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/.turbo/**',
      '**/.cache/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  // Next.js app
  {
    files: ['apps/portfolio/**/*.{ts,tsx}'],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Vue app
  {
    files: ['apps/dashboard/**/*.{ts,tsx,vue}'],
    plugins: {
      // Using eslint-plugin-vue in legacy mode via flat config compatibility
    },
  },
  // Backend (Node)
  {
    files: ['packages/backend/src/**/*.ts'],
    languageOptions: {
      globals: {
        node: true,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
]