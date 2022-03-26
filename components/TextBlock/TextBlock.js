
const TextBlock = ({ title, text, headingsize }) => {

  return (
    <div className="TextBlock">
      {headingsize === 'h1' ? <h1>{title}</h1> : null}
      {headingsize === 'h2' ? <h2>{title}</h2> : null}
      {headingsize === 'h3' ? <h3>{title}</h3> : null}
      {headingsize === 'h4' ? <h4>{title}</h4> : null}
      <p>{text}</p>
    </div>
  )
}

export default TextBlock