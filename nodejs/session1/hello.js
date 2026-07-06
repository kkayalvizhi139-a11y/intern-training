// In a browser, JavaScript runs inside a web page and can access the DOM using objects like document.
// In Node.js, JavaScript runs outside the browser and is mainly used for server-side programming.
// Node.js does not have access to browser-specific objects like document or window.

const message = "Hello from Node.js";
console.log(message);

const fruits = ["apple", "banana", "mango"];
const upper = fruits.map(f => f.toUpperCase());
console.log(upper);
// REPL stands for Read-Eval-Print Loop.
// It allows you to execute JavaScript code interactively in the terminal.
// It is useful for quickly testing JavaScript expressions, debugging small pieces of code,
// and experimenting without creating a separate JavaScript file.