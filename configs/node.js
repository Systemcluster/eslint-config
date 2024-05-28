/* eslint-env node */

import eslintPluginNode from 'eslint-plugin-n'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const node = {
    files: ['**/*.{js,ts,cjs,mjs}'],
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
            ...globals.node,
        },
    },
    settings: {
        'import-x/resolver': {
            'node': true,
        },
    },
    rules: {
        ...eslintPluginNode.configs['recommended-module'].rules,
        'n/no-missing-import': 'off',
        'n/shebang': 'off',
    },
}

export default node
