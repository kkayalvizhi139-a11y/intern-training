const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const filePath = path.join(__dirname, 'data.json')

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)

  res.setHeader('Content-Type', 'application/json')

  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  if (req.method === 'GET' && req.url === '/users') {

    res.writeHead(200)
    res.end(JSON.stringify(users))

  } else if (req.method === 'GET' && req.url === '/users/top') {

    const topUsers = users.filter(user => user.score >= 90)

    res.writeHead(200)
    res.end(JSON.stringify(topUsers))

  } else if (req.method === 'GET' && req.url.startsWith('/users/')) {

    const id = parseInt(req.url.split('/')[2])

    const user = users.find(user => user.id === id)

    if (user) {
      res.writeHead(200)
      res.end(JSON.stringify(user))
    } else {
      res.writeHead(404)
      res.end(JSON.stringify({ error: 'User not found' }))
    }

  } else if (req.method === 'GET' && req.url === '/health') {

    const health = {
      status: 'ok',
      platform: os.platform(),
      memory: {
        totalMB: Math.round(os.totalmem() / 1024 / 1024),
        freeMB: Math.round(os.freemem() / 1024 / 1024)
      },
      uptime: process.uptime()
    }

    res.writeHead(200)
    res.end(JSON.stringify(health))

    // Health check endpoints let monitoring tools verify that the server is running correctly. They are commonly used by Docker, Kubernetes, load balancers, and monitoring systems to detect  whether an application is healthy.

  } else {

    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Route not found' }))

  }
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})