import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'
import { Resvg } from '@resvg/resvg-js'
import { getIconFile, icons } from 'ayu/icons'
import catalogue from './afi-icons.json' with { type: 'json' }

type CatalogueEntry = { syntaxes?: { extensions?: string[] }[]; aliases?: { extensions?: string[] }[] }

const SIZES = [
  { px: 16, suffix: '' },
  { px: 32, suffix: '@2x' },
  { px: 48, suffix: '@3x' }
]

const baseName = (file: string) => file.replace(/@[23]x/, '').replace(/\.(png|svg)$/, '')

const iconIdByFileName = new Map<string, string>([[baseName(icons.default), 'default']])
for (const id of Object.keys(icons.files)) {
  const file = getIconFile(id, 'dark')
  if (file) iconIdByFileName.set(baseName(file), id)
}

const idForExtension = (ext: string) =>
  icons.filenames[ext as keyof typeof icons.filenames] ??
  icons.extensions[ext.toLowerCase() as keyof typeof icons.extensions]

const matchIcon = (name: string, entry: CatalogueEntry) => {
  const byName = iconIdByFileName.get(name)
  if (byName) return byName
  const votes = new Map<string, number>()
  for (const { extensions = [] } of [...(entry.syntaxes ?? []), ...(entry.aliases ?? [])]) {
    for (const ext of extensions) {
      const id = idForExtension(ext)
      if (id) votes.set(id, (votes.get(id) ?? 0) + 1)
    }
  }
  return [...votes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]
}

const sourceFile = (dir: string, id: string) => {
  const file = id === 'default' ? icons.default : getIconFile(id, 'dark')!
  if (file.endsWith('.svg')) return { svg: readFileSync(join(dir, file), 'utf8'), raster: false }
  const png = readdirSync(dir)
    .filter((f) => baseName(f) === baseName(file) && f.endsWith('.png'))
    .sort((a, b) => b.length - a.length)[0]
  const data = readFileSync(join(dir, png)).toString('base64')
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><image width="32" height="32" href="data:image/png;base64,${data}"/></svg>`,
    raster: true
  }
}

export default (root: string) => {
  const sourceDir = join(root, 'node_modules/ayu/icons')
  const outDir = join(root, 'icons')
  rmSync(outDir, { recursive: true, force: true })
  mkdirSync(outDir)

  let count = 0
  for (const [name, entry] of Object.entries(catalogue as Record<string, CatalogueEntry>)) {
    const id = matchIcon(name, entry)
    if (!id) continue
    const { svg, raster } = sourceFile(sourceDir, id)
    for (const { px, suffix } of SIZES) {
      if (raster && px > 32) continue
      const png = new Resvg(svg, { fitTo: { mode: 'width', value: px } }).render().asPng()
      writeFileSync(join(outDir, `${name}${suffix}.png`), png)
    }
    count++
  }
  return count
}
