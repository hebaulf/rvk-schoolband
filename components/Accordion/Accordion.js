
const Accordion = ({ title, content }) => {
  return (
    <div className="AccordionList">
      <div className="AccordionList__item">
        <h3 className="AccordionList__title">{title}</h3>
        <div className="AccordionList__content TextBlock">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Accordion