import eslintParserTypescript from '@typescript-eslint/parser'
import * as eslintParserAstro from 'astro-eslint-parser'
import * as eslintPluginAstro from 'eslint-plugin-astro'

import globals from 'globals'

/** @type import('eslint').Linter.Config */
const astro = {
    files: ['**/*.astro'],
    ignores: [
        '**/node_modules/**/*',
        '**/build/**/*',
        '**/coverage/**/*',
        '**/dist/**/*',
        '**/.next/**/*',
        '**/styled-system/**/*',
        '**/styles/system/**/*',
        '**/*.d.{ts,cts,mts}',
    ],
    plugins: {
        'astro': eslintPluginAstro,
    },
    languageOptions: {
        parser: eslintParserAstro,
        parserOptions: {
            parser: eslintParserTypescript,
            projectService: false,
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
        ...Object.assign({}, ...eslintPluginAstro.configs['recommended'].map((config) => config.rules)),
    },
    processor: eslintPluginAstro.processors['.astro'],
}

export default astro
