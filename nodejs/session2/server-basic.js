const http = require('http')

const server = http.createServer((req, res) => {
  // req.method contains the HTTP method (GET, POST, PUT, DELETE, etc.).
  // req.url contains the route or path requested by the client.

  console.log(`${req.method} ${req.url}`)

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from Node.js!')
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})