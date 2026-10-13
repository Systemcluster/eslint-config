import eslintPluginTurbo from 'eslint-plugin-turbo'

/** @type import('eslint').Linter.Config */
const turbo = {
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
        'turbo': eslintPluginTurbo,
    },
    languageOptions: {},
    settings: {},
    rules: {
        ...eslintPluginTurbo.configs['recommended'].rules,
    },
}

export default turbo
