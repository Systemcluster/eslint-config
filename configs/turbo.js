/* eslint-env node */

import eslintPluginTurbo from 'eslint-plugin-turbo'

/** @type import('eslint').Linter.FlatConfig */
const turbo = {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
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
        'turbo': eslintPluginTurbo,
    },
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintPluginTurbo.configs['recommended'].rules,
    },
}

export default turbo
