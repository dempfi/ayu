import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

['light', 'dark', 'mirage'].map((variant: SchemeName) => {
  const filePath = path.join(process.cwd(), `/ayu-${variant}.json`)
  fs.writeFileSync(filePath, JSON.stringify(template(variant), null, '\t'))
  console.log(`Updated ${filePath}`)
})
