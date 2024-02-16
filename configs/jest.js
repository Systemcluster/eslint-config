/* eslint-env node */

import eslintPluginJest from 'eslint-plugin-jest'

import globals from 'globals'

/** @type import('eslint').Linter.FlatConfig */
const jest = {
    files: [
        '**/*.test.ts',
        '**/*.test.js',
        '**/*.test.cjs',
        '**/*.test.mjs',
        '**/jest.setup.js',
        '**/jest.setup.ts',
        '**/jest.setup.cjs',
        '**/jest.setup.mjs',
    ],
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
        jest: eslintPluginJest,
    },
    languageOptions: {
        globals: {
            ...globals.es2021,
            ...globals.jest,
        },
    },
    rules: {
        ...eslintPluginJest.configs['recommended'].rules,
    },
}

export default jest
