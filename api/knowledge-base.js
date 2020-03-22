const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

let frontMatter

const md = require('markdown-it')().use(
  require('markdown-it-front-matter'),
  function(fmRaw) {
    frontMatter = yaml.safeLoad(fmRaw)
  }
)

const renderFile = (file) => {
  const raw = fs.readFileSync(file, 'utf8')

  frontMatter = {}
  const content = md.render(raw)

  return JSON.stringify({
    ...frontMatter,
    content
  })
}

export default function(req, res, next) {
  // req is the Node.js http request object
  if (req.url.startsWith('/knowledge-base/')) {

    const content = renderFile(path.join(__dirname, `../${req.url}.md`))

    res.setHeader('Content-Type', 'application/json')
    res.end(content)
  } else {
    next()
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
}
