import AccordionList from "../Accordion/AccordionList";
import style from "./SchoolBandBox.module.css";

const SchoolBandBox = ({
  title,
  homeschool,
  address,
  postalcode,
  linkurl,
  accordionitems,
  accordiontitle,
  accordioncontent,
  checkboxid,
	checkboxtext,
  handleChange,
  checked
}) => {
  return (
    <div className={style.infoBox}>
      <h4>{title}</h4>
      <p><strong>Heimastöð Hljómsveitar:</strong></p>
      <p>{`${homeschool}, ${address}, ${postalcode}`}</p>
      <p className={style.smalltext}>
        <a href={linkurl} target="_blank" noopener="true" noreferrer="true">Nánar um {title}</a>
      </p>
      
      <AccordionList
        accordionitems={accordionitems} 
        title={accordiontitle} 
        content={accordioncontent} 
      />
      <hr />
      <div className="Checkbox">
        <input 
          className="Checkbox__input" 
          type="checkbox" 
          name="check" 
          id={checkboxid} 
          onChange={handleChange}
          checked={checked}
        />
        <label className="Checkbox__label" htmlFor={checkboxid} >
          {checkboxtext}
        </label>
      </div>
    </div>
  );
};

export default SchoolBandBox;
