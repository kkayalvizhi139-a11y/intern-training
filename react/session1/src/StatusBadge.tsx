// The && operator renders content only when the condition is true.
// If the condition is false, React renders nothing.
// When using numbers, 0 is rendered, so checking messages.length directly can display 0.
// It's better to use messages.length > 0 or messages.length === 0 for clarity.
// Using messages.length directly with && can render 0 when the array is empty.
// Using messages.length > 0 returns a boolean, preventing 0 from appearing in the UI.
function StatusBadge() {
  const isAdmin: boolean = true
  const hasWarning: boolean = false
  const isVerified: boolean = true
  const messages: string[] = ['Assignment submitted', 'PR created']

  return (
    <div>
      {/* Show only if admin */}
      {isAdmin && <span>Admin</span>}

      {/* Show only if warning */}
      {hasWarning && (
        <p style={{ color: 'orange' }}>
          Warning: incomplete tasks
        </p>
      )}

      {/* Show only if verified */}
      {isVerified && <span> Verified</span>}

      {/* Show empty state only when no messages */}
      {messages.length === 0 && <p>No messages yet</p>}

      {/* Show list only when messages exist */}
      {messages.length > 0 && (
        <ul>
          {messages.map((msg: string, i: number) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default StatusBadge