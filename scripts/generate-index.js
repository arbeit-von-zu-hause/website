const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const glob = require('glob')

const baseDir = path.join(__dirname, '..', 'knowledge-base')

let frontMatter

const md = require('markdown-it')({
  linkify: true
}).use(require('markdown-it-front-matter'), function(fmRaw) {
  frontMatter = yaml.safeLoad(fmRaw)
})

const renderFile = (file) => {
  const raw = fs.readFileSync(file, 'utf8')

  frontMatter = {}
  const content = md.render(raw)

  return {
    ...frontMatter,
    content
  }
}

const renderAll = () => {
  console.log('Render content')
  const content = glob
    .sync(`${baseDir}/**/*.md`)
    .reduce((aggregate, fullPath) => {
      const key = path.basename(fullPath, '.md')
      return {
        ...aggregate,
        [key]: renderFile(fullPath)
      }
    }, {})

  fs.writeFileSync(
    path.join(__dirname, '../assets/content.json'),
    JSON.stringify(content)
  )

  const steps = yaml.safeLoad(
    fs.readFileSync(path.join(baseDir, '_knowledge-base.yml'), 'utf8')
  )

  fs.writeFileSync(
    path.join(__dirname, '../assets/steps.json'),
    JSON.stringify(steps)
  )
  console.log('Rendered.')
}

if (process.argv.includes('--watch')) {
  fs.watch(baseDir, { recursive: true }, (eventType, filename) => {
    renderAll()
  })
}

renderAll()
