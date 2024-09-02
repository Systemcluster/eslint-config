/* eslint-env node */

import eslintParserTypescript from '@typescript-eslint/parser'
import eslintParserAstro from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const astro = {
    files: ['**/*.astro'],
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
        'astro': eslintPluginAstro,
    },
    languageOptions: {
        parser: eslintParserAstro,
        parserOptions: {
            parser: eslintParserTypescript,
            project: true,
            ecmaVersion: 'latest',
            ecmaFeatures: {
                jsx: true,
            },
            sourceType: 'module',
            extraFileExtensions: ['.astro'],
        },
        globals: {
            ...globals.browser,
            Astro: 'readonly',
            Fragment: 'readonly',
        },
    },
    settings: {},
    rules: {
        ...eslintPluginAstro.configs['recommended'].rules,
    },
    processor: eslintPluginAstro.processors['.astro'],
}

export default astro
