import React from "react";
import AccordionItem from "./AccordionItem";
import style from "./Accordion.module.css";

const AccordionList = ({ title, content }) => {
  return (
    <div className={`AccordionList ${style.accordion__list}`}>
      <AccordionItem title={title} content={content} />
    </div>
  );
};

export default AccordionList;
