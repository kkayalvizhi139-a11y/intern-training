const os = require('os')

// os.platform() returns the operating system platform (e.g., win32, linux, darwin).
// Useful when writing platform-specific code.
console.log('Platform:     ', os.platform())

// os.arch() returns the CPU architecture (e.g., x64).
// Useful for checking system compatibility.
console.log('Architecture: ', os.arch())

// os.hostname() returns the computer's host name.
// Useful for identifying the machine running the application.
console.log('Hostname:     ', os.hostname())

// os.homedir() returns the current user's home directory.
// Useful for storing user-specific files.
console.log('Home dir:     ', os.homedir())

// os.cpus().length returns the number of CPU cores.
// Useful for deciding how many worker processes to create.
console.log('CPU cores:    ', os.cpus().length)

const totalMB = Math.round(os.totalmem() / 1024 / 1024)
const freeMB = Math.round(os.freemem() / 1024 / 1024)

// Displays the total and available system memory.
console.log(`Memory: ${freeMB}MB free of ${totalMB}MB`)

const platform = os.platform()

if (platform === 'win32') {
  console.log('Running on Windows')
} else if (platform === 'darwin') {
  console.log('Running on Mac')
} else {
  console.log('Running on Linux')
}

const freePercent = Math.round((os.freemem() / os.totalmem()) * 100)

if (freePercent < 20) {
  console.log('Warning: Low memory —', freePercent + '% free')
} else {
  console.log('Memory OK —', freePercent + '% free')
}

// Real-world example:
// A Node.js application may check the operating system at runtime
// to use platform-specific commands, file paths, or shell scripts.
// For example, an installer may execute different commands on
// Windows, macOS, and Linux.