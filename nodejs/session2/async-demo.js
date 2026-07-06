const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'output.txt')

// Synchronous
console.log('1 — before sync read')
const data = fs.readFileSync(filePath, 'utf8')
console.log('2 — sync read done:', data.split('\n').length, 'lines')
console.log('3 — after sync read')

console.log('---')

// Asynchronous
console.log('4 — before async read')
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err
  console.log('6 — async read done:', data.split('\n').length, 'lines')
})
console.log('5 — after async read (does not wait)')

// The synchronous version blocks execution until the file is read.
// The asynchronous version allows the program to continue while the file is being read in the background. This helps a server handle multiple users efficiently without waiting for one file operation to finish before processing other requests.