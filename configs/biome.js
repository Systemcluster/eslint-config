/* eslint-env node */

import eslintConfigBiome from 'eslint-config-biome'

/** @type import('eslint').Linter.FlatConfig */
const valtio = {
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
    plugins: {},
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintConfigBiome.rules,
    },
}

export default valtio
