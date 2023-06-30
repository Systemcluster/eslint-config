/* eslint-env node */

import eslintPluginNext from '@next/eslint-plugin-next'
import eslintPluginJSXa11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginValtio from 'eslint-plugin-valtio'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const next = {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ignores: ['**/node_modules/**/*', '**/build/**/*', '**/coverage/**/*', '**/dist/*', '**/.next/**/*', '**/*.d.ts'],
    plugins: {
        'react': eslintPluginReact,
        'react-hooks': eslintPluginReactHooks,
        'jsx-a11y': eslintPluginJSXa11y,
        '@next/next': eslintPluginNext,
        'valtio': eslintPluginValtio,
    },
    languageOptions: {
        globals: {
            ...globals.es2021,
            ...globals.browser,
        },
    },
    settings: {
        'react': {
            version: 'detect',
        },
    },
    rules: {
        ...eslintPluginReact.configs['recommended'].rules,
        ...eslintPluginReact.configs['jsx-runtime'].rules,
        ...eslintPluginReactHooks.configs['recommended'].rules,
        ...eslintPluginJSXa11y.configs['recommended'].rules,
        ...eslintPluginNext.configs['recommended'].rules,
        ...eslintPluginValtio.configs['recommended'].rules,
        'react/no-unknown-property': ['error', { ignore: ['sx'] }],
        '@next/next/no-html-link-for-pages': 'off',
    },
}

export default next
