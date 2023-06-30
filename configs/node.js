/* eslint-env node */

import eslintPluginNode from 'eslint-plugin-n'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const node = {
    files: ['**/*.{js,ts,cjs,mjs}'],
    ignores: ['**/node_modules/**/*', '**/build/**/*', '**/coverage/**/*', '**/dist/*', '**/*.d.ts'],
    plugins: {
        'n': eslintPluginNode,
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
            ...globals.node,
        },
    },
    settings: {},
    rules: {
        ...eslintPluginNode.configs['recommended-module'].rules,
        'n/no-missing-import': 'off',
        'n/shebang': 'off',
    },
}

export default node
