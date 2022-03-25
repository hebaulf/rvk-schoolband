import { useContext } from "react";
import style from "./Application.module.css";
import { StepperContext } from "../../contexts/StepperContext";

const PersonalInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className={style.personalInfoApplication}>
      <div className="TextBlock">
        <h2>Börn og foreldrar</h2>
        <p>Upplýsingar um foreldra/forsjáraðila koma frá Þjóðskrá og skólakerfum Reykjavíkurborgar. Athugaðu hvort símanúmer og netföng séu rétt áður en þú heldur áfram.</p>
      </div>

      <div className="FormField RadioButtonsGroup" role="group">
        <h3 className="FormField__label">Börn</h3>
        <ul
          className="FormField__options"
          role="group"
          aria-labelledby="label:_7600434-20"
          aria-required="false"
        >
          <li className="RadioButton FormField__options__item">
            <input
              className="RadioButton__input"
              type="radio"
              id="_7600434-21"
              name="fruit"
              value="Rögnvaldur Björn Magnússon 030412-5476"
            />
            <label className="RadioButton__label" for="_7600434-21">
              Rögnvaldur Björn Magnússon <small>030412-5476</small>
            </label>
          </li>
          <li className="RadioButton FormField__options__item">
            <input
              className="RadioButton__input"
              type="radio"
              id="_7600434-22"
              name="fruit"
              value="Sigurður Már Magnússon 130816-5476"
            />
            <label className="RadioButton__label" for="_7600434-22">
              Sigurður Már Magnússon <small>130816-5476</small>
            </label>
          </li>
        </ul>
      </div>
      <div className="Alert Alert--info Alert--closable" role="alert" hidden="">
        Aðeins er hægt að sækja um í skólahljómsveit fyrir börn fædd fyrir 2014.
      </div>

      <div className={style.infoBox}>
        <h3 className="FormField__label">Foreldrar / Forsjáraðilar</h3>
        <fieldset className="form__infobox">
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="name">Nafn</label>
            <span className="FormField__input" id="name" readonly="">Ragnheiður Margrét Jónsdóttir</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="kt">Kennitala</label>
            <span className="FormField__input" id="kt" readonly="">030484-4556</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="address">Heimilisfang</label>
            <span className="FormField__input" id="address" readonly="">Leynimel 48</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="postal">Póstnúmer</label>
            <span className="FormField__input" id="postal" readonly="">107</span>
          </div>
					<div className="FormField TextInput">
            <label className="FormField__label" for="phone">Sími</label>
            <input 
              className="FormField__input" 
              type="number" 
              id="phone" 
              value="6984050"
              onChange={() => {}}
            />
          </div>
          <div className="FormField TextInput">
            <label className="FormField__label" for="email">Netfang</label>
            <input 
              className="FormField__input" 
              type="email" 
              id="email" 
              value="ragnheidur@snjoark.is"
              onChange={() => {}}
            />
          </div>
        </fieldset>

        <fieldset className="form__infobox">
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="name">Nafn</label>
            <span className="FormField__input" id="name" readonly="">Magnús Björnsson</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="kt">Kennitala</label>
            <span className="FormField__input" id="kt" readonly="">010184-6789</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="address">Heimilisfang</label>
            <span className="FormField__input" id="address" readonly="">Leynimel 48</span>
          </div>
          <div className="FormField FormField--readonly">
            <label className="FormField__label" for="postal">Póstnúmer</label>
            <span className="FormField__input" id="postal" readonly="">107</span>
          </div>
					<div className="FormField TextInput">
            <label className="FormField__label" for="phone">Sími</label>
            <input 
              className="FormField__input" 
              type="number" 
              id="phone" 
              value="6978792"
              onChange={() => {}}
            />
          </div>
          <div className="FormField TextInput">
            <label className="FormField__label" for="email">Netfang</label>
            <input 
              className="FormField__input" 
              type="email" 
              id="email" 
              value="magbjo46@hi.is"
              onChange={() => {}}
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default PersonalInfo;
