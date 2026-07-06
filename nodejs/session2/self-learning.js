const fs = require('fs').promises
const path = require('path')

const filePath = path.join(__dirname, 'async-output.txt')

async function fileOperations() {
  try {
    await fs.writeFile(filePath, 'Hello from fs.promises!')

    const content = await fs.readFile(filePath, 'utf8')
    console.log('Content:', content)

    await fs.appendFile(filePath, '\nThis line was appended.')

    const updated = await fs.readFile(filePath, 'utf8')
    console.log('Updated:\n' + updated)
  } catch (err) {
    console.error(err)
  }
}

fileOperations()

// fs.promises provides Promise-based file operations.
// It works well with async/await and avoids callback nesting.


const fsSync = require('fs')

console.log('\nJavaScript files in this folder:')

const files = fsSync.readdirSync(__dirname)

files
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const size = fsSync.statSync(path.join(__dirname, file)).size / 1024
    console.log(`${file} - ${size.toFixed(2)} KB`)
  })