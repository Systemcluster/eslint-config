import * as eslintPluginMdx from 'eslint-plugin-mdx'

/** @type import('eslint').Linter.Config */
const mdx = {
    ...eslintPluginMdx.flat,
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
}

export default mdx
