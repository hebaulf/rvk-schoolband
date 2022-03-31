import { useState } from "react";
import style from "./Accordion.module.css";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  useState
  return (
    <div className={`AccordionList__item ${style.accordion__item} ${isActive ? style.open : ""}`}>
      <h4 className={`AccordionList__title ${style.accordion__title}`}  onClick={() => setIsActive(!isActive)}>{title}</h4>
      <div className={`AccordionList__content TextBlock ${style.accordion__content}`}>{content}</div>
    </div>
  )
}

export default AccordionItem