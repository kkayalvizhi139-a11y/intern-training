const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.json')

// Read JSON file
const raw = fs.readFileSync(filePath, 'utf8')

// JSON.parse() converts a JSON string into a JavaScript array/object.
// Without JSON.parse(), the data would be a string and array methods
// like filter(), map(), and reduce() would not work.
const users = JSON.parse(raw)

console.log('All users:', users)
console.log('Total:', users.length)

// Filter users with score >= 90
const top = users.filter(u => u.score >= 90)
console.log('Top scorers:', top.map(u => u.name))

// Calculate average score
const avg = users.reduce((sum, u) => sum + u.score, 0) / users.length
console.log('Average score:', avg.toFixed(1))

// -----------------------------
// Task 5.2 - Add a new user
// -----------------------------

const newUser = {
  id: 5,
  name: 'Vikram',
  role: 'intern',
  score: 88
}

// Only add Vikram if not already present
const alreadyExists = users.some(user => user.name === 'Vikram')

if (!alreadyExists) {
  users.push(newUser)

  // null means no replacer function.
  // 2 adds indentation to make the JSON file readable.
  const updated = JSON.stringify(users, null, 2)

  fs.writeFileSync(filePath, updated)

  console.log('User added and file updated')
} else {
  console.log('Vikram already exists')
}

const verify = JSON.parse(fs.readFileSync(filePath, 'utf8'))
console.log('Total after update:', verify.length)

// -----------------------------
// Task 5.3 - Update a record
// -----------------------------

const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const index = currentData.findIndex(user => user.name === 'Mano')

if (index !== -1) {
  currentData[index].score = 90

  fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2))

  console.log('Mano score updated to 90')
}

// Array.find() returns the matching object.
// Array.findIndex() returns the index of the matching object.
// findIndex() is useful when updating or deleting an item because
// you need to know its position in the array.