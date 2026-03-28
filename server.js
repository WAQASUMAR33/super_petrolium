const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { execSync } = require('child_process')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

// Auto-rebuild when git commit has changed since last build
function getGitHash() {
  try { return execSync('git rev-parse HEAD').toString().trim() } catch { return null }
}

function getBuiltHash() {
  try { return fs.readFileSync('.next/.git-hash', 'utf8').trim() } catch { return null }
}

function needsBuild() {
  if (!fs.existsSync('.next/BUILD_ID')) return true
  const current = getGitHash()
  const built = getBuiltHash()
  return !built || current !== built
}

if (!dev && needsBuild()) {
  console.log('> New deployment detected — running next build...')
  try {
    execSync('npm run build', { stdio: 'inherit' })
    const hash = getGitHash()
    if (hash) fs.writeFileSync('.next/.git-hash', hash)
    console.log('> Build complete')
  } catch (err) {
    console.error('> Build failed:', err.message)
    process.exit(1)
  }
}

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
