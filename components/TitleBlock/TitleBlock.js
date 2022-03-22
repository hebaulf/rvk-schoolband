
const TitleBlock = ({ title, text, headingSize }) => {
  const Heading = () => {
    if ( headingSize === 'h1' ) {
      return <h1>title</h1>
    } else if ( headingSize === 'h2' ) {
      return <h2>title</h2>
    } else if ( headingSize === 'h3' ) {
      return <h3>title</h3>
    } else if ( headingSize === 'h4' ) {
      return <h4>title</h4>
    } else {
      return <h2>title</h2>
    }
  }
  return (
    <>
        {Heading}
        <p>{text}</p>
    </>
  )
}

export default TitleBlock