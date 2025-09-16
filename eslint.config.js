// @ts-check
import js from '@eslint/js'
import ts from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'
import vue from 'eslint-plugin-vue'
import * as vueParser from 'vue-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
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
  // Next.js app
  {
    files: ['apps/portfolio/**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
      react,
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // Start from recommended, but disable problematic rules for app router
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-duplicate-head': 'off',
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  // TypeScript-specific rules, only for TS files (after framework configs so overrides stick)
  ...ts.configs.recommendedTypeChecked.map((cfg) => ({
    ...cfg,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...cfg.languageOptions,
      parserOptions: {
        ...(cfg.languageOptions?.parserOptions ?? {}),
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  // Vue app
  {
    files: ['apps/dashboard/**/*.{ts,tsx,vue}'],
    plugins: { vue },
    languageOptions: {
      parser: /** @type {any} */ (vueParser),
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      ...vue.configs['flat/recommended'].rules,
    },
  },
  // Backend (Node)
  {
    files: ['packages/backend/src/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
]