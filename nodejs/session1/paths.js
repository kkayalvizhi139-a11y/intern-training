const path = require("path");

console.log("Directory name:", __dirname);
console.log("File name:", __filename);

// path.join() safely joins path segments using the correct separator
// for the current operating system, making the code portable.
const joined = path.join(__dirname, "data", "users.json");
console.log("Joined path:", joined);

console.log("Extension:", path.extname("index.html"));
console.log("Basename:", path.basename("/users/rahul/notes.txt"));
console.log("Dirname:", path.dirname("/users/rahul/notes.txt"));