/* eslint-env node */

import eslintPluginReact from '@eslint-react/eslint-plugin'
import eslintParserTypescript from '@typescript-eslint/parser'
import eslintPluginCompat from 'eslint-plugin-compat'
import eslintPluginJSXa11y from 'eslint-plugin-jsx-a11y'

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
        '**/styled-system/**/*',
        '**/styles/system/**/*',
        '**/*.d.ts',
    ],
    plugins: {
        ...eslintPluginReact.configs['recommended-type-checked'].plugins,
        'jsx-a11y': eslintPluginJSXa11y,
        'compat': eslintPluginCompat,
    },
    languageOptions: {
        parser: eslintParserTypescript,
        parserOptions: {
            project: true,
            ecmaVersion: 'latest',
            ecmaFeatures: {
                jsx: true,
            },
            sourceType: 'module',
        },
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
        ...eslintPluginReact.configs['recommended-type-checked'].rules,
        ...eslintPluginJSXa11y.configs['recommended'].rules,
        ...eslintPluginCompat.configs['recommended'].rules,
    },
}

export default react
