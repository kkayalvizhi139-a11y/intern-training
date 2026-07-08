// React uses the key prop to uniquely identify list items.
// Without a key, React shows a warning because it cannot efficiently track changes.
// Using the array index as a key is acceptable only for static lists.
// For dynamic lists, use a unique ID from your data instead.
function SkillList() {
  const skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
  ]

  return (
    <div>
      <h3>Skills Covered</h3>

      <ul>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>Total: {skills.length} skills</p>
    </div>
  )
}

export default SkillList