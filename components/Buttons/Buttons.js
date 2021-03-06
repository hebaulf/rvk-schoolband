
const Button = ({ btntext, btnclass }) => {
  return (
    <button className={btnclass} type="button">{btntext}</button>
  )
}

const ButtonLink = ({ btntext, btnclass, btnurl }) => {
  return (
    <p><a className={btnclass} href={btnurl}>{btntext}</a></p>
  )
}

export default (Button, ButtonLink)