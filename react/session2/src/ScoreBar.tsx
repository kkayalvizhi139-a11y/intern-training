interface ScoreBarProps {
  score: number
}

//  single responsibility:visually display an intern's score as a progress bar.
function ScoreBar({ score }: ScoreBarProps) {
  return (
    <div
      style={{
        background: '#eee',
        borderRadius: '4px',
        height: '8px',
      }}
    >
      <div
        style={{
          width: `${score}%`,
          background: score >= 50 ? 'green' : 'red',
          height: '8px',
          borderRadius: '4px',
        }}
      />
    </div>
  )
}

export default ScoreBar