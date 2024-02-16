/* eslint-env node */

import eslintPluginJSXa11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const react = {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ignores: [
        '**/node_modules/**/*',
        '**/build/**/*',
        '**/coverage/**/*',
        '**/dist/*',
        '**/.next/**/*',
        '**/styles/system/**/*',
        '**/*.d.ts',
    ],
    plugins: {
        'react': eslintPluginReact,
        'react-hooks': eslintPluginReactHooks,
        'jsx-a11y': eslintPluginJSXa11y,
    },
    languageOptions: {
        globals: {
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
        'react/no-unknown-property': ['error', { ignore: ['sx'] }],
    },
}

export default react
