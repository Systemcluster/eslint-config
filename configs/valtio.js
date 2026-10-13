import eslintPluginValtio from 'eslint-plugin-valtio'

/** @type import('eslint').Linter.Config */
const valtio = {
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
        'valtio': eslintPluginValtio,
    },
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintPluginValtio.configs['recommended'].rules,
    },
}

export default valtio
