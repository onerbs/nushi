import path from 'path'
import sass from 'sass'
import csso from 'csso'
import fs from 'fs'

const args = process.argv.slice(2)
const file = path.join('src', 'nushi.sass')
const outFile = path.join('dist', 'nushi.min.css')

const sourceMap = !args.includes('--no-source-map')
const res = sass.renderSync({ file, outFile, sourceMap })
const css = csso.minify(res.css, { restructure: false }).css
const map = (it => {
  const cwd = process.cwd()
  return it?.toString()
    .replace('""', `"${cwd}"`)
    .replaceAll(`file://${cwd}/`, '')
})(res.map)

if (!fs.existsSync('dist')) fs.mkdirSync('dist')

const cfg = { encoding: 'utf-8' }

               fs.writeFileSync(outFile, css, cfg)
if (sourceMap) fs.writeFileSync(`${outFile}.map`, map, cfg)
