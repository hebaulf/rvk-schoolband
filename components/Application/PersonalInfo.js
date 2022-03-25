import { useContext, useState } from "react";
import style from "./Application.module.css";
import { StepperContext } from "../../contexts/StepperContext";

const PersonalInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [phoneNumber, setPhoneNumber] = useState('123');


  return (
    <div ClassName={style.personalInfoApplication}>
      <div className="TextBlock">
        <h2>Börn og foreldrar</h2>
        <p>
          Upplýsingar um foreldra/forsjáraðila koma frá Þjóðskrá og skólakerfum
          Reykjavíkurborgar. Athugaðu hvort símanúmer og netföng séu rétt áður
          en þú heldur áfram.
        </p>
      </div>

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
              type="radio"
              id="_7600434-22"
              name="fruit"
              value="Sigurður Már Magnússon 130816-5476"
            />
            <label class="RadioButton__label" for="_7600434-22">
              Sigurður Már Magnússon <small>130816-5476</small>
            </label>
          </li>
        </ul>
      </div>
      <div className="Alert Alert--info Alert--closable" role="alert" hidden="">
        Aðeins er hægt að sækja um í skólahljómsveit fyrir börn fædd fyrir 2014.
      </div>

      <div className={style.infoBox}>
        <h3 class="FormField__label" className={style.header}>
          Foreldrar / Forsjáraðilar
        </h3>
        <div className={`form ${style.form_inbox1}`}>
          <fieldset className="form__infobox">
            <div className={`form__infobox ${style.flexbox1}`}>
              <div class="FormField FormField--readonly">
                <label class="FormField__label" for="name">
                  Nafn
                </label>
                <span class="FormField__input" id="name" readonly="">
                  Ragnheiður Margrét Jónsdóttir
                </span>
              </div>
              <div class="FormField FormField--readonly">
                <label class="FormField__label" for="kt">
                  Kennitala
                </label>
                <span class="FormField__input" id="kt" readonly="">
                  030484-4556
                </span>
              </div>
            </div>
            <div className={`form__infobox ${style.flexbox2}`}>
              <div class="FormField FormField--readonly">
                <label class="FormField__label" for="address">
                  Heimilisfang
                </label>
                <span class="FormField__input" id="address" readonly="">
                  Leynimel 48
                </span>
              </div>
              <div class="FormField FormField--readonly">
                <label class="FormField__label" for="postal">
                  Póstnúmer
                </label>
                <span
                  class={`FormField__input ${style.minwidth}`}
                  id="postal"
                  readonly=""
                >
                  107
                </span>
              </div>
            </div>
            <div className={`form__infobox ${style.flexbox3}`}>
              <div class="FormField TextInput">
                <label class="FormField__label" for="phone">
                  Sími
                </label>
                <input
                  class="FormField__input"
                  type="number"
                  id="phone"
                  value="6984050"
                  onChange={() => {}}
                />
              </div>
              <div class="FormField TextInput">
                <label class="FormField__label" for="email">
                  Netfang
                </label>
                <input
                  class="FormField__input"
                  type="email"
                  id="email"
                  value="ragnheidur@snjoark.is"
                  onChange={() => {}}
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className={`form ${style.form_inbox2}`}>
        <fieldset className="form__infobox">
          <div className={`form__infobox ${style.flexbox4}`}>
            <div class="FormField FormField--readonly">
              <label class="FormField__label" for="name">
                Nafn
              </label>
              <span class="FormField__input" id="name" readonly="">
                Magnús Björnsson
              </span>
            </div>
            <div class="FormField FormField--readonly">
              <label class="FormField__label" for="kt">
                Kennitala
              </label>
              <span class="FormField__input" id="kt" readonly="">
                010184-6789
              </span>
            </div>
          </div>
          <div className={`form__infobox ${style.flexbox5}`}>
            <div class="FormField FormField--readonly">
              <label class="FormField__label" for="address">
                Heimilisfang
              </label>
              <span class="FormField__input" id="address" readonly="">
                Leynimel 48
              </span>
            </div>
            <div class="FormField FormField--readonly">
              <label class="FormField__label" for="postal">
                Póstnúmer
              </label>
              <span
                class={`FormField__input ${style.minwidth}`}
                id="postal"
                readonly=""
              >
                107
              </span>
            </div>
          </div>
          <div className={`form__infobox ${style.flexbox6}`}>
            <div class="FormField TextInput">
              <label class="FormField__label" for="phone">
                Sími
              </label>
              <input
                class="FormField__input"
                type="number"
                id="phone"
                value="6978792"
                onChange={() => {}}
              />
            </div>
            <div class="FormField TextInput">
              <label class="FormField__label" for="email">
                Netfang
              </label>
              <input
                class="FormField__input"
                type="email"
                id="email"
                value="magbjo46@hi.is"
                onChange={() => {}}
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default PersonalInfo;
