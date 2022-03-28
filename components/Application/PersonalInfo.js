import { useContext, useState } from "react";
import style from "./Application.module.css";
import { StepperContext } from "../../contexts/StepperContext";

const parents = [
  {
    id: "parent01",
    name: "Ragnheiður Margrét Jónsdóttir",
    ssn: "030484-4556",
    address: "Leynimel 48",
    postalCode: "107",
    phone: "6984050",
    email: "ragnheidur@snjoark.is",
  },
  {
    id: "parent02",
    name: "Magnús Björnsson",
    ssn: "010184-6789",
    address: "Leynimel 48",
    postalCode: "107",
    phone: "6978792",
    email: "magbjo46@hi.is",
  },
];

const kids = [
  {
    id: "kid01",
    name: "Rögnvaldur Björn Magnússon",
    ssn: "030412-5476",
    birthYear: 2012,
  },
  {
    id: "kid02",
    name: "Magnús Björnsson",
    ssn: "130816-5476",
    birthYear: 2016,
  },
];

const PersonalInfo = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("123");
  
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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

<<<<<<< HEAD
      <div class="FormField RadioButtonsGroup" role="group">
        <h3 class="FormField__label">Börn</h3>
        <ul
          class="FormField__options"
          role="group"
          aria-labelledby="label:_7600434-20"
          aria-required="false"
        >
          <li class="RadioButton FormField__options__item">
            <input
              class="RadioButton__input"
              type="radio"
              id="_7600434-21"
              name="fruit"
              value="Rögnvaldur Björn Magnússon 030412-5476"
            />
            <label class="RadioButton__label" for="_7600434-21">
              Rögnvaldur Björn Magnússon <small>030412-5476</small>
            </label>
          </li>
          <li class="RadioButton FormField__options__item">
            <input
              class="RadioButton__input"
              disabled="true"
              type="radio"
              id="_7600434-22"
              name="fruit"
              value="Sigurður Már Magnússon 130816-5476"
            />
            <label class="RadioButton__label" for="_7600434-22">
              Sigurður Már Magnússon <small>130816-5476</small>
            </label>
          </li>
=======
      {/* Kids radio buttons */}
      <h3 className="FormField__label">Börn</h3>
      <div className="FormField RadioButtonsGroup" role="group">
        <ul className="FormField__options" role="group" aria-required="true">
          {kids.map(kid => (
            <li key={kid.id} className="RadioButton FormField__options__item">
              <input
                className="RadioButton__input"
                type="radio"
                id={kid.id}
                value={kid.name}
                disabled={kid.birthYear > 2014 ? true : false}
              />
              <label className="RadioButton__label" htmlFor={kid.id}>
                {kid.name} 
                <small>{kid.ssn}</small>
              </label>
            </li>
          ))}
>>>>>>> b9797e8cd3d8abd4ee6502ef1a458f58b4d14fe4
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
                <input className="FormField__input" type="number" id="phone" value={parent.phone} onChange={(e) => {e.target.value}} />
              </div>
              <div className={`FormField TextInput ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="email">Netfang</label>
                <input className="FormField__input" type="email" id="email" value={parent.email} onChange={(e) => {e.target.value}} />
              </div>
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
