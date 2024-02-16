/* eslint-env node */

import eslintPluginNext from '@next/eslint-plugin-next'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const next = {
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
        '@next/next': eslintPluginNext,
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
        ...eslintPluginNext.configs['recommended'].rules,
        '@next/next/no-html-link-for-pages': 'off',
    },
}

export default next
