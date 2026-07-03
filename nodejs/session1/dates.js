// require("dayjs") loads the Day.js package from the node_modules folder.
// Node.js searches for installed packages inside the local node_modules directory.

const dayjs = require("dayjs");

console.log("Today:", dayjs().format("DD/MM/YYYY"));
console.log("Day of week:", dayjs().format("dddd"));
console.log("Next week:", dayjs().add(7, "day").format("DD MMM YYYY"));
console.log("Is before 2030?", dayjs().isBefore("2030-01-01"));