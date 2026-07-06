const http = require('http')

// Content-Type tells the browser what type of data is being sent.
// text/plain - plain text
// text/html - HTML page
// application/json - JSON data

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
      <html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>Welcome to My Node.js Server</h1>
          <p>This page is returned as HTML.</p>
        </body>
      </html>
    `)

  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About page')

  } else if (req.url === '/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      status: 'ok',
      uptime: process.uptime()
    }))

    // process.uptime() returns the number of seconds
    // the Node.js process has been running.

    // Content-Type: application/json tells the browser
    // that the response contains JSON data.

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 — Page not found')
  }
})

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})