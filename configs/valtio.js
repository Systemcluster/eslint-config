import eslintPluginValtio from 'eslint-plugin-valtio'

/** @type import('eslint').Linter.Config */
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
