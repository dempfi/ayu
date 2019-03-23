import * as fs from 'fs'
import * as ayu from 'ayu'
import * as path from 'path'
import * as templates from './templates'

type SchemeName = keyof typeof ayu

const filePath = (kind: SchemeName, extension: string) =>
  path.join(process.cwd(), `/ayu-${kind}.${extension}`)

const ui = (kind: SchemeName) => fs.writeFileSync(
  filePath(kind, 'sublime-theme'),
  JSON.stringify(templates.ui(ayu[kind]), null, '\t')
)

const syntax = (kind: SchemeName) => fs.writeFileSync(
  filePath(kind, 'sublime-color-scheme'),
  JSON.stringify(templates.syntax(ayu[kind]), null, '\t')
)

Object.keys(ayu).map((kind: SchemeName) => {
  syntax(kind)
  ui(kind)
})
