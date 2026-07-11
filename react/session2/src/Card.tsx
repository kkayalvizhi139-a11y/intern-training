import type { ReactNode } from 'react'

interface CardProps {
  title: string
  children?: ReactNode
}

// ReactNode represents anything React can render, such as text,
// JSX elements, components, fragments, arrays, null, or undefined.
// It is the correct type for the children prop.

// Required children means every Card must contain content.
// Optional children allow Card to be used as a container or as a simple titled box without any body content.
function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>

      {children && (
        <div className="card-body">
          {children}
        </div>
      )}
    </div>
  )
}

export default Card