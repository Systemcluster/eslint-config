import eslintPluginNode from 'eslint-plugin-n'

import globals from 'globals'

/** @type import('eslint').Linter.Config */
const node = {
    files: ['**/*.{js,ts,cts,mts,cjs,mjs}'],
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
        'n/hashbang': 'off',
        'n/no-unpublished-import': 'off',
    },
}

export default node
