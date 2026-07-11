// The ? makes a prop optional.
// If a prop is not provided, the default parameter value is used instead.
// interface ProfileCardProps {
//   name?: string
//   role?: string
//   score?: number
// }

// function ProfileCard({
//   name = 'Unknown',
//   role = 'Intern',
//   score = 0,
// }: ProfileCardProps) {
//   return (
//     <div className="card">
//       <h2>{name}</h2>

//       <p>Role: {role}</p>

//       <p>Score: {score}</p>
//     </div>
//   )
// }

// export default ProfileCard
// Optional props (?) allow the parent to omit values.
// Default values ensure the component always has safe values to use.
// Without skills = [], calling skills.length or skills.map() would cause
// a TypeScript error because skills could be undefined.
interface ProfileCardProps {
  name?: string
  role?: string
  score?: number
  skills?: string[]
}

function ProfileCard({
  name = 'Unknown',
  role = 'Intern',
  score = 0,
  skills = [],
}: ProfileCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>Role: {role}</p>

      <p>Score: {score}</p>

      {skills.length > 0 && (
        <ul>
          {skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProfileCard