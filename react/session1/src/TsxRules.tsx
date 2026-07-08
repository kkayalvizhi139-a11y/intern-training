function TsxRules() {
  return (
    <div>
      <input type="text" />
      {/* TSX requires self-closing tags like <input /> because they have no closing tag. */}

      <p className="highlight">Styled paragraph</p>
      {/* In TSX, use className instead of class because class is a reserved JavaScript keyword. */}

      <label htmlFor="email">Email</label>
      {/* TSX uses htmlFor instead of for because for is a JavaScript keyword. */}

      <input id="email" type="email" />
      {/* Self-close the input element. */}

      <p style={{ color: 'red', fontSize: '16px' }}>Red text</p>
      {/* Inline styles use a JavaScript object with camelCase property names. */}

      {/* This is a TSX comment */}
      {/* HTML comments (<!-- -->) are not valid in TSX. */}
    </div>
  )
}

export default TsxRules