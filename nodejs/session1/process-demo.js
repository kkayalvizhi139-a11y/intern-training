// process.version returns the current Node.js version.
// Useful for checking compatibility with project requirements.
console.log("Node version:", process.version);

// process.platform returns the operating system platform (e.g., win32, linux).
// Useful when writing platform-specific code.
console.log("Platform:", process.platform);

// process.cwd() returns the current working directory.
// Useful for locating files relative to where the program is run.
console.log("Current directory:", process.cwd());

// process.memoryUsage() returns memory usage statistics of the current Node.js process.
// Useful for monitoring performance and debugging memory issues.
console.log("Memory usage:", process.memoryUsage());

// process.argv contains the command-line arguments passed to the Node.js program.
// It is useful for building command-line tools where users provide input while running the script.

const args = process.argv;

console.log("All arguments:", args);
console.log("Your input:", args[2]);
// Environment variables store configuration values outside the source code.
// This helps keep sensitive information such as database URLs and API keys secure.

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("HOME:", process.env.HOME || process.env.USERPROFILE);

// Database URLs and API keys are stored in environment variables instead of
// hardcoding them in the source code. This improves security, allows different
// configurations for development and production, and avoids exposing secrets
// when sharing the code through version control.