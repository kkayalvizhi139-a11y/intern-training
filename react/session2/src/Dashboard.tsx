import Card from './Card'
import InternCard from './InternCard'

interface Intern {
  id: number
  name: string
  score: number
  isPresent: boolean
  role: string
}

const interns: Intern[] = [
  {
    id: 1,
    name: 'Rahul',
    score: 92,
    isPresent: true,
    role: 'Frontend',
  },
  {
    id: 2,
    name: 'Priya',
    score: 78,
    isPresent: true,
    role: 'Backend',
  },
  {
    id: 3,
    name: 'Amit',
    score: 45,
    isPresent: false,
    role: 'Frontend',
  },
  {
    id: 4,
    name: 'Sneha',
    score: 95,
    isPresent: true,
    role: 'Fullstack',
  },
]

// filter() returns only present interns.
const presentCount: number = interns.filter(
  (intern: Intern) => intern.isPresent
).length

// reduce() adds all scores together.
const totalScore: number = interns.reduce(
  (sum: number, intern: Intern) => sum + intern.score,
  0
)

const averageScore: number = totalScore / interns.length

function Dashboard() {
  return (
    <Card title="Intern Dashboard">
      <h3>Summary</h3>

      <p>Total: {interns.length}</p>
      <p>Present: {presentCount}</p>
      <p>Average Score: {averageScore.toFixed(2)}</p>

      <hr />

      {interns.map((intern: Intern) => (
        <InternCard
          key={intern.id}
          name={intern.name}
          score={intern.score}
          isPresent={intern.isPresent}
          role={intern.role}
        />
      ))}
    </Card>
  )
}

export default Dashboard