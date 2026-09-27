import * as fs from 'fs'
import * as ayu from 'ayu'
import * as path from 'path'
import * as templates from './templates'
import buildIcons from './icons'

type SchemeName = 'light' | 'dark' | 'mirage'

const filePath = (kind: SchemeName, extension: string) =>
  path.join(process.cwd(), `/ayu-${kind}.${extension}`)

const ui = (kind: SchemeName) => fs.writeFileSync(
  filePath(kind, 'sublime-theme'),
  JSON.stringify(templates.ui(ayu[kind], kind), null, '\t')
)

const syntax = (kind: SchemeName) => fs.writeFileSync(
  filePath(kind, 'sublime-color-scheme'),
  JSON.stringify(templates.syntax(ayu[kind]), null, '\t')
)

const widget = (kind: SchemeName) => fs.writeFileSync(
  path.join(process.cwd(), `/widgets/Widget - ayu-${kind}.stTheme`),
  templates.widget(ayu[kind], kind)
);

for (const kind of ['light', 'dark', 'mirage'] as SchemeName[]) {
  widget(kind)
  syntax(kind)
  ui(kind)
}

console.log(`Icons: ${buildIcons(process.cwd())}`)
