import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type import('eslint').Linter.Config */
const prettier = {
    files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
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
