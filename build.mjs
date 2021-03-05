import path from 'path'
import sass from 'sass'
import csso from 'csso'
import fs from 'fs'

const source = path.join('src', 'nushi.sass')
const output = path.join('dist', 'nushi.min.css')

const css = sass.renderSync({ file: source }).css
const min = csso.minify(css, { restructure: false }).css

if (!fs.existsSync('dist')) fs.mkdirSync('dist')

fs.writeFileSync(output, min, { encoding: 'utf-8' })
