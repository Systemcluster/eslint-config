/* eslint-env node */

import eslintConfigEslintJs from '@eslint/js'
import eslintPluginDepend from 'eslint-plugin-depend'
import eslintPluginImport from 'eslint-plugin-import-x'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const base = {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx,astro,mdx,vue}'],
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
        'unicorn': eslintPluginUnicorn,
        'import-x': eslintPluginImport,
        'depend': eslintPluginDepend,
    },
    languageOptions: {
        parserOptions: {
            project: true,
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
    linterOptions: {
        reportUnusedDisableDirectives: 'warn',
    },
    rules: {
        ...eslintConfigEslintJs.configs['recommended'].rules,
        ...eslintPluginUnicorn.configs['recommended'].rules,
        ...eslintPluginImport.configs['recommended'].rules,
        ...eslintPluginDepend.configs['recommended'].rules,
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
        'unicorn/filename-case': 'off',
        'unicorn/import-style': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-unnecessary-polyfills': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/number-literal-case': 'off',
        'unicorn/prefer-export-from': 'off',
        'unicorn/prefer-add-event-listener': 'off',
        'import-x/order': ['warn', { 'newlines-between': 'always-and-inside-groups', 'alphabetize': { order: 'asc' } }],
        'import-x/named': 'off',
        'import-x/newline-after-import': 'warn',
        'import-x/no-cycle': 'off',
        'import-x/no-unresolved': 'off',
        'import-x/no-unused-modules ': 'off',
        'import-x/no-named-as-default': 'off',
        'import-x/no-named-as-default-member': 'off',
    },
}

export default base
