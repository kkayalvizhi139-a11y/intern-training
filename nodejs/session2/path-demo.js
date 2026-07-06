const path = require('path')

// __dirname returns the absolute path of the current folder.
// Useful for locating files relative to this script.
console.log('Current directory:', __dirname)

// __filename returns the absolute path of the current file.
// Useful for debugging and identifying the running file.
console.log('Current file:     ', __filename)

const filePath = path.join(__dirname, 'data', 'users.json')

// path.join() safely joins path segments.
// Useful for creating file paths that work on all operating systems.
console.log('Joined path:', filePath)

// path.basename() returns only the file name from a path.
console.log('Basename:', path.basename('/home/user/notes.txt'))

// path.extname() returns the file extension.
console.log('Extension:', path.extname('index.html'))

// path.dirname() returns the directory portion of a path.
console.log('Dirname:  ', path.dirname('/home/user/notes.txt'))

// Manual string concatenation — fragile
const manual = __dirname + '/data/users.json'
console.log('Manual:    ', manual)

// path.join() — safe across all operating systems
const joined = path.join(__dirname, 'data', 'users.json')
console.log('path.join: ', joined)

// path.resolve() — always returns an absolute path
const resolved = path.resolve('data', 'users.json')
console.log('Resolved:  ', resolved)

// path.join() joins path segments together.
// path.resolve() returns an absolute path by resolving from the current working directory.
// If an absolute path is provided to path.resolve(), it ignores the earlier segments.