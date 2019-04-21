import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string, bordered: boolean) =>
  path.join(process.cwd(), `/ayu-${variant}${bordered ? '-bordered' : ''}.json`)

;['light', 'dark', 'mirage'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const nonBordered = JSON.stringify(template(variant, false), null, '\t')

  fs.writeFileSync(filePath(variant, true), bordered)
  fs.writeFileSync(filePath(variant, false), nonBordered)
  console.log(`Updated ${variant}`)
})
