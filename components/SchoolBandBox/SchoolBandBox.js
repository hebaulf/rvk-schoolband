import Accordion from "../Accordion/Accordion";
import style from "./SchoolBandBox.module.css";

const SchoolBandBox = ({
  title,
  homeschool,
  address,
  postalcode,
  linkurl,
  accordiontitle,
  accordioncontent,
	checkboxtext
}) => {
  return (
    <div className={style.infoBox}>
      <h4>{title}</h4>
      <p><strong>Heimastöð Hljómsveitar:</strong></p>
      <p>{`${homeschool}, ${address}, ${postalcode}`}</p>
      <p className={style.smalltext}>
        <a href={linkurl} target="_blank" noopener="true" noreferrer="true">Nánar um {title}</a>
      </p>
      
      <Accordion 
        title={accordiontitle} 
        content={accordioncontent} 
      />
      <hr />
      <div className="Checkbox">
        <input className="Checkbox__input" type="checkbox" id="_9027003-5" />
        <label className="Checkbox__label" htmlFor="_9027003-5">
          {checkboxtext}
        </label>
      </div>
    </div>
  );
};

export default SchoolBandBox;
