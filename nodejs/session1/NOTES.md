# package.json Notes

## name
The name of the Node.js project.

## version
The current version of the project.

## description
A short explanation of what the project does.

## main
The default entry point of the application.

## scripts
Commands that can be run using npm, such as npm start.

## keywords
Keywords that help describe the project.

## author
The name of the project author.

## license
Specifies how others can use the project.

## Why npm Scripts are Useful

npm scripts provide simple, consistent commands for running common tasks. In a team, everyone can use the same commands without remembering long terminal commands. This makes development, testing, and deployment easier and more consistent.

## dependencies vs devDependencies

### dependencies
Packages required for the application to run in production.

### devDependencies
Packages required only during development, testing, or debugging.

### Why is nodemon a devDependency?

Nodemon automatically restarts the Node.js application whenever source files change. It is only useful during development and is not needed when the application is running in production.

## package.json vs package-lock.json

### package.json
Lists the project's metadata, scripts, and dependency requirements. It specifies which packages the project needs.

### package-lock.json
Stores the exact versions of all installed packages and their dependencies. This ensures every developer installs the same versions, making builds consistent.

## npm install vs npm ci

### npm install
Installs dependencies and updates the lock file if necessary. It is commonly used during development when adding or updating packages.

### npm ci
Installs dependencies exactly as specified in package-lock.json. It is faster and is mainly used in Continuous Integration (CI) environments to ensure reproducible builds.