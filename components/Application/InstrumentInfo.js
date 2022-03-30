import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import TextBlock from "../TextBlock/TextBlock";
import Dropdown from "../FormElements/Dropdown";
import { instruments } from "../../data/instruments";
import style from "./Application.module.css";

const InstrumentInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value, checked} = e.target;
    const data = checked ? name : value;
    setUserData({ ...userData, [name]: data });
    // console.log(e)
  };

  return (
    <div>
      <TextBlock
        headingsize="h2"
        title="Val á hljóðfæri"
        text="Í sveitunum er kennt á öll helstu málm-, tré- og slagverkshljóðfæri. Einnig eru dæmi um að kennt sé á rafbassa. Ekki er hægt að ábyrgjast að umsækjandi fái úthlutað valið hljóðfæri."
      />

      <div className="Attention">
        Meðlimir hljómsveitanna fá úthlutað hljóðfæri og öllum nauðsynlegum
        búnaði til æfinga bæði í skóla og heima fyrir.
      </div>

      {/* Warning */}
      <div
        className="Alert Alert--warning Alert--closable"
        role="alert"
        hidden=""
      >
        Því miður er ekkert laust pláss á þverflautu fyrir komandi skólaár.
      </div>

      {/* Val um hljóðfæri */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Val um hljóðfæri</h3>
        <hr />
        <Dropdown
          selectid="adalvalshljodfaeri"
          label="Vinsamlegast veljið hljóðfæri"
          onchange={handleChange}
          name="maininstrument"
          value={userData["maininstrument"] || ""}
          options={instruments.map((instrument) => (
            <optgroup key={instrument.id} label={instrument.type}>
              {instrument.instrumentlist.map((instrumentitem, index) => (
                <option key={index}>
                  {instrumentitem}
                </option>
              ))}
            </optgroup>
          ))}
        />
      </div>

      <div className="Attention">
        Við mælum með því að merkja við “Til í hvaða hljóðfæri sem er” ef óskað
        er eftir því að fá boð á hljóðfæri utan þess sem valið er. Þetta val
        getur aukið líkur á inntöku umsækjanda ef ekki er laust pláss á valið
        hljóðfæri.
      </div>

      {/* Til í hvaða hljóðfæri sem er */}
      <div className={style.infoBox_checkBox}>
        <div className={style.infoBox_checkBox_inner}>
          <input 
            className="Checkbox__input" 
            type="checkbox" 
            id="anyinstrument"
            name="anyinstrument"
            checked={userData["anyinstrument"] || false}
            onChange={handleChange}
          />
          <label className="Checkbox__label" htmlFor="anyinstrument">
            Til í hvaða hljóðfæri sem er!
          </label>
        </div>
      </div>
    </div>
  );
};

export default InstrumentInfo;
