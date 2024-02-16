/* eslint-env node */

import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import eslintParserTypescript from '@typescript-eslint/parser'

/** @type import('eslint').Linter.FlatConfig */
const typescript = {
    files: ['**/*.{ts,tsx}'],
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
        '@typescript-eslint': eslintPluginTypescript,
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
        globals: {},
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        ...eslintPluginTypescript.configs['eslint-recommended'].rules,
        ...eslintPluginTypescript.configs['recommended-type-checked'].rules,
        ...eslintPluginTypescript.configs['strict-type-checked'].rules,
        ...eslintPluginTypescript.configs['stylistic-type-checked'].rules,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'warn',
            {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
                ignorePrimitives: { string: true, number: true, bigint: true, boolean: true },
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-useless-template-literals': 'off',
    },
}

export default typescript
