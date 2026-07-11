// // Defining the interface separately makes it reusable, easier to read,and allows multiple components to use the same prop type.

// // Props are read-only in React.
// // A component should never modify its own props.
// // Instead, derive new values from props without changing the original data.

// interface InternCardProps {
//   name: string
//   score: number
//   isPresent: boolean
// }

// function InternCard({ name, score, isPresent }: InternCardProps) {
  
//   // score = score + 10
//   // Props belong to the parent component and must never be mutated.

  
//   const adjustedScore: number = score >= 90 ? score : score + 5

//   return (
//     <div className="card">
//       <h2>{name}</h2>

//       <p>Original score: {score}</p>

//       <p>Adjusted score: {adjustedScore}</p>

//       <p>{isPresent ? 'Present' : 'Absent'}</p>
//     </div>
//   )
// }

// export default InternCard

import Avatar from './Avatar'
import Badge from './Badge'
import ScoreBar from './ScoreBar'

interface InternCardProps {
  name: string
  score: number
  isPresent: boolean
  role: string
}

// Using Badge as a reusable component avoids duplicating the same styled <span> multiple times. It keeps the code cleaner, easier to maintain, and TypeScript validates every Badge through BadgeProps.
function InternCard({
  name,
  score,
  isPresent,
  role,
}: InternCardProps) {
  return (
    <div className="card">
      <Avatar name={name} />

      <h2>{name}</h2>

      <ScoreBar score={score} />

      <div
        style={{
          display: 'flex',
          gap: '6px',
          marginTop: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Badge label={role} color="#4f46e5" />

        <Badge
          label={isPresent ? 'Present' : 'Absent'}
          color={isPresent ? 'green' : '#e53e3e'}
        />

        {score >= 90 && (
          <Badge
            label="Top Performer"
            color="#d97706"
          />
        )}
      </div>
    </div>
  )
}

export default InternCard