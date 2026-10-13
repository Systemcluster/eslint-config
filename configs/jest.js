import eslintPluginJest from 'eslint-plugin-jest'

import globals from 'globals'

/** @type import('eslint').Linter.Config */
const jest = {
    files: [
        '**/*.test.ts',
        '**/*.test.cts',
        '**/*.test.mts',
        '**/*.test.js',
        '**/*.test.cjs',
        '**/*.test.mjs',
        '**/jest.setup.js',
        '**/jest.setup.ts',
        '**/jest.setup.cts',
        '**/jest.setup.mts',
        '**/jest.setup.cjs',
        '**/jest.setup.mjs',
    ],
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
        jest: eslintPluginJest,
    },
    languageOptions: {
        globals: {
            ...globals.es2026,
            ...globals.jest,
        },
    },
    rules: {
        ...eslintPluginJest.configs['recommended'].rules,
    },
}

export default jest
