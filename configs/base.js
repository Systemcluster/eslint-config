/* eslint-env node */

import eslintConfigEslintJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const base = {
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
        'unicorn': eslintPluginUnicorn,
        'import': eslintPluginImport,
        'prettier': eslintPluginPrettier,
    },
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: {
                jsx: true,
            },
            sourceType: 'module',
        },
        globals: {
            ...globals.es2021,
        },
    },
    settings: {},
    rules: {
        ...eslintConfigEslintJs.configs['recommended'].rules,
        ...eslintPluginPrettier.configs['recommended'].rules,
        ...eslintPluginUnicorn.configs['recommended'].rules,
        ...eslintConfigPrettier.rules,
        'max-len': ['warn', { code: 135 }],
        'eqeqeq': ['warn', 'always', { null: 'ignore' }],
        'func-style': ['warn', 'expression'],
        'guard-for-in': 'warn',
        'radix': 'warn',
        'prefer-arrow-callback': 'warn',
        'require-atomic-updates': ['warn', { allowProperties: false }],
        'require-unicode-regexp': 'warn',
        'prefer-const': 'warn',
        'prefer-object-has-own': 'warn',
        'no-void': ['warn', { allowAsStatement: true }],
        'no-return-assign': 'warn',
        'no-return-await': 'warn',
        'no-console': 'off',
        'no-undef': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/import-style': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-export-from': 'off',
        'unicorn/prefer-add-event-listener': 'off',
        'import/order': ['warn', { 'newlines-between': 'always-and-inside-groups', 'alphabetize': { order: 'asc' } }],
        'import/newline-after-import': 'warn',
    },
}

export default base
