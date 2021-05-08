import path from 'path'
import sass from 'sass'
import csso from 'csso'
import fs from 'fs'

const file = path.join('src', 'nushi.sass')
const outFile = path.join('dist', 'nushi.min.css')

const res = sass.renderSync({ file, outFile, sourceMap: true })
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
fs.writeFileSync(`${outFile}.map`, map, cfg)
