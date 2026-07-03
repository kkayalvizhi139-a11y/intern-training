const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");


async function fileDemo() {
  const filePath = path.join(__dirname, "async-output.txt");

  await fs.writeFile(filePath, "Hello from fs.promises!");
  const content = await fs.readFile(filePath, "utf8");

  console.log("File content:", content);

  await fs.appendFile(filePath, "\nThis line was appended.");

  const updated = await fs.readFile(filePath, "utf8");
  console.log("Updated content:");
  console.log(updated);
}


// __dirname -> absolute path of current directory
// __filename -> absolute path of current file

// In ES Modules (import/export), these variables  are not available. Instead, import.meta.url
// is used along with fileURLToPath().

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", async (name) => {
  console.log(`Hello, ${name}!`);

  await fileDemo();

  rl.close();
});