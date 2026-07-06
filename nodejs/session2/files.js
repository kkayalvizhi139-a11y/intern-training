const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'output.txt')

// writeFileSync() creates a new file or overwrites an existing file.
fs.writeFileSync(filePath, 'Line 1 — written by Node.js')
console.log('File written')

// readFileSync() reads the file content synchronously.
const content = fs.readFileSync(filePath, 'utf8')
console.log('Content:', content)

// appendFileSync() adds content to the end of the file
// without removing the existing content.
fs.appendFileSync(filePath, '\nLine 2 — appended')
fs.appendFileSync(filePath, '\nLine 3 — appended again')

// Read the updated file
const updated = fs.readFileSync(filePath, 'utf8')
console.log('Updated:\n', updated)

const checkPath = path.join(__dirname, 'missing.txt')

if (fs.existsSync(checkPath)) {
  console.log('File exists')
} else {
  console.log('File does not exist — creating it')
  fs.writeFileSync(checkPath, 'Created because it was missing')
}

// If readFileSync() is called on a file that does not exist, Node.js throws an ENOENT (Error NO ENTry) exception.
// In a real application, you should first check if the file exists using existsSync(), or handle the error using  try...catch to prevent the application from crashing.