/* eslint-env node */

import eslintPluginValtio from 'eslint-plugin-valtio'

/** @type import('eslint').Linter.FlatConfig */
const valtio = {
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
        'valtio': eslintPluginValtio,
    },
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintPluginValtio.configs['recommended'].rules,
    },
}

export default valtio
