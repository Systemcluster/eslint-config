/* eslint-env node */

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type import('eslint').Linter.FlatConfig */
const prettier = {
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
        'prettier': eslintPluginPrettier,
    },
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintPluginPrettier.configs['recommended'].rules,
        ...eslintConfigPrettier.rules,
    },
}

export default prettier
