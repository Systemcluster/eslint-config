import assert from 'node:assert/strict'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test, { after, before } from 'node:test'

import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import { ESLint } from 'eslint'
import * as eslintPluginAstro from 'eslint-plugin-astro'

import * as presets from '../index.js'

const fixtures = {
    astro: {
        file: 'component.astro',
        source: '<div set:html={"html"} set:text={"text"} />\n',
        rule: 'astro/no-conflict-set-directives',
    },
    base: { file: 'base.js', source: 'export const value = 1\n' },
    jest: {
        file: 'example.test.js',
        source: 'test.only("example", () => { expect(true).toBe(true) })\n',
        rule: 'jest/no-focused-tests',
    },
    mdx: { file: 'document.mdx', source: '# Heading\n\nSome **text**.\n' },
    next: {
        file: 'page.jsx',
        source: 'export default function Page() { return <img src="/image.png" alt="Example" /> }\n',
        rule: '@next/next/no-img-element',
    },
    node: { file: 'node.cjs', source: 'module.exports = require("node:path")\n' },
    prettier: {
        file: 'format.js',
        source: 'export const value={first:1,second:2}\n',
        rule: 'prettier/prettier',
    },
    react: {
        file: 'component.tsx',
        source: 'export const Component = () => <img src="/image.png" />\n',
        rule: 'jsx-a11y/alt-text',
    },
    turbo: { file: 'turbo.js', source: 'export const value = 1\n' },
    typescript: {
        file: 'module.mts',
        source: 'export const value: number = 1\nPromise.resolve(value)\n',
        rule: '@typescript-eslint/no-floating-promises',
    },
    valtio: { file: 'state.js', source: 'export const value = 1\n' },
}

const directory = await mkdtemp(join(tmpdir(), 'eslint-config-'))
const configs = { ...presets }

before(async () => {
    await writeFile(join(directory, 'package.json'), JSON.stringify({ type: 'module' }))
    await writeFile(
        join(directory, 'tsconfig.json'),
        JSON.stringify({
            compilerOptions: { allowJs: true, jsx: 'preserve', strict: true, target: 'ESNext', module: 'NodeNext' },
            include: ['**/*'],
        })
    )
    await Promise.all(Object.values(fixtures).map(({ file, source }) => writeFile(join(directory, file), source)))
})

after(async () => {
    await rm(directory, { recursive: true, force: true })
})

for (const [name, fixture] of Object.entries(fixtures)) {
    test(`${name}: lints a representative consumer file`, async () => {
        const eslint = new ESLint({
            cwd: directory,
            overrideConfigFile: true,
            overrideConfig: [
                presets.base,
                configs[name],
                {
                    languageOptions: { parserOptions: { tsconfigRootDir: directory } },
                    settings: { jest: { version: 30 } },
                },
            ],
        })
        const results = await eslint.lintFiles([fixture.file])
        const messages = results.flatMap((result) => result.messages)

        assert.equal(results.length, 1)
        assert.equal(results[0].fatalErrorCount, 0, JSON.stringify(messages))
        assert.ok(
            messages.every((message) => !message.message.includes('Definition for rule')),
            JSON.stringify(messages)
        )
        assert.ok(
            messages.every((message) => !message.message.includes('File ignored')),
            JSON.stringify(messages)
        )
        if (fixture.rule) {
            assert.ok(
                messages.some((message) => message.ruleId === fixture.rule),
                JSON.stringify(messages)
            )
        }
    })
}

for (const [name, config] of Object.entries(presets)) {
    if (name === 'globals') continue

    test(`${name}: all configured plugin rules exist, including disabled rules`, () => {
        const rules = Object.keys(config.rules ?? {})
        for (const rule of rules) {
            const separator = rule.lastIndexOf('/')
            if (separator === -1) continue

            const plugin = config.plugins?.[rule.slice(0, separator)]
            if (!plugin) continue

            assert.ok(plugin.rules?.[rule.slice(separator + 1)], `${name}: ${rule}`)
        }
    })
}

test('TypeScript disables core rules already checked by the compiler', () => {
    const expected = eslintPluginTypescript.configs['eslint-recommended'].overrides[0].rules

    for (const [rule, setting] of Object.entries(expected)) {
        assert.deepEqual(presets.typescript.rules[rule], setting, rule)
    }
})

test('Astro includes its recommended rules', () => {
    const expected = Object.assign({}, ...eslintPluginAstro.configs.recommended.map((config) => config.rules))

    assert.ok(Object.keys(expected).length > 0)
    for (const [rule, setting] of Object.entries(expected)) {
        assert.deepEqual(presets.astro.rules[rule], setting, rule)
    }
})

test('TypeScript module extensions receive the matching presets', async () => {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [presets.base, presets.node, presets.typescript, presets.prettier],
    })

    for (const extension of ['ts', 'tsx', 'mts', 'cts']) {
        const config = await eslint.calculateConfigForFile(`src/example.${extension}`)
        assert.ok(config?.plugins['@typescript-eslint'], extension)
        assert.ok(config?.plugins.unicorn, extension)
        assert.ok(config?.plugins.prettier, extension)
        if (extension !== 'tsx') assert.ok(config?.plugins.n, extension)
    }
})

test('generated output and declarations do not receive preset rules', async () => {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: Object.entries(presets)
            .filter(([name]) => name !== 'globals')
            .map(([, config]) => config),
    })
    const files = [
        'dist/example.js',
        'dist/nested/example.js',
        'packages/app/dist/nested/example.ts',
        'build/nested/example.jsx',
        'coverage/nested/example.js',
        '.next/nested/example.js',
        'src/example.d.ts',
        'src/example.d.mts',
        'src/example.d.cts',
    ]

    for (const filePath of files) {
        const config = await eslint.calculateConfigForFile(filePath)
        assert.equal(Object.keys(config?.rules ?? {}).length, 0, filePath)
    }
})
