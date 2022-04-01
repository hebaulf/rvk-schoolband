import { useContext, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import style from "./Application.module.css";
import { parents, children } from "../../data/users";

const PersonalInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value, checked} = e.target;
    const data = checked ? name : value;
    setUserData({ ...userData, [name]: data });
    // console.log(e)
  };

  return (
    <div className={style.personalInfoApplication}>
      <div className="TextBlock">
        <h2>Börn og foreldrar</h2>
        <p>
          Upplýsingar um foreldra/forsjáraðila koma frá Þjóðskrá og skólakerfum
          Reykjavíkurborgar. Athugaðu hvort símanúmer og netföng séu rétt áður
          en þú heldur áfram.
        </p>
      </div>

      {/* Pick child */}
      <h3 className="FormField__label">Börn</h3>
      <div className="FormField RadioButtonsGroup" role="group">
        <ul className="FormField__options" role="group">
          {children.map(child => (
            <li key={child.id} className="RadioButton FormField__options__item">
              <input
                className="RadioButton__input"
                type="radio"
                id={child.id}
                name={child.name}
                checked={userData[child.name] || false}
                onChange={handleChange}
                disabled={child.birthYear > 2014 ? true : false}
              />
              <label className="RadioButton__label" htmlFor={child.id}>
                {child.name} 
                <small>{child.ssn}</small>
              </label>
            </li>
          ))}
        </ul>
        
        {/* Alert */}
        <div className="Alert Alert--info Alert--closable" role="alert" hidden="">
          Aðeins er hægt að sækja um í skólahljómsveit fyrir börn fædd fyrir 2014.
        </div>
      </div>
      
      {/* Parents info */}
      <div className={style.parentInfo}>
        <h3 className={`FormField__label ${style.header}`}>
          Foreldrar / Forsjáraðilar
        </h3>
        {parents.map(parent => (
          <fieldset key={parent.id} className={`form ${style.infoBox}`}>
            <div className={`form__infobox ${style.infoBox__readonly}`}>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="name">Nafn</label>
                <span className="FormField__input" id="name" readOnly>{parent.name}</span>
              </div>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="ssn">Kennitala</label>
                <span className="FormField__input" id="ssn" readOnly>{parent.ssn}</span>
              </div>
            </div>
            <div className={`form__infobox ${style.infoBox__readonly}`}>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="address">Heimilisfang</label>
                <span className="FormField__input" id="address" readOnly>{parent.address}</span>
              </div>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="postal">Póstnúmer</label>
                <span className={`FormField__input ${style.minwidth}`} id="postal" readOnly>{parent.postalCode}</span>
              </div>
            </div>
            <div className={`form__infobox ${style.infoBox__editable}`}>
              <div className={`FormField TextInput ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="phone">Sími</label>
                <input className="FormField__input" type="number" id="phone" name={`simi_${parent.id}`} value={userData[`simi_${parent.id}`] || ""} onChange={handleChange} />
              </div>
              <div className={`FormField TextInput ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="email">Netfang</label>
                <input className="FormField__input" type="email" id="email" name={`netfang_${parent.id}`} value={userData[`netfang_${parent.id}`] || ""} onChange={handleChange} />
              </div>
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
