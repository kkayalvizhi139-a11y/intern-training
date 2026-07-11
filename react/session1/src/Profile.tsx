// TSX expressions are written inside {} and evaluate to a value.
// Statements like if, for, and while cannot be written directly inside TSX because they do not return a value.
// width="100" passes the value as a string, while width={100} passes it as a number.
// Curly braces allow TSX to evaluate JavaScript expressions and use values of different types.
function Profile() {
  const name: string = 'Rahul'
  const role: string = 'Intern'
  const score: number = 92
  const joinDate: string = '2026-06-30'

  const avatarUrl: string = 'https://i.pravatar.cc/100'
  const altText: string = `Avatar of ${name}`

  return (
    <div>
      <h2>{name}</h2>


      <img src={avatarUrl} alt={altText} width={100} />

      <p>Role: {role}</p>

      <p>Score: {score} / 100</p>

      <p>Name uppercase: {name.toUpperCase()}</p>

      <p>Score doubled: {score * 2}</p>

      <p>Joined: {new Date(joinDate).toDateString()}</p>
    </div>
  )
}

export default Profile