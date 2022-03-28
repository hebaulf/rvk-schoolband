import TextBlock from "../TextBlock/TextBlock";
import Dropdown from "../FormElements/Dropdown";
import { instruments } from "../../data/instruments";
import style from "./Application.module.css";

const InstrumentInfo = () => {
  return (
    <div>
      <TextBlock
        headingsize="h2"
        title="Val á hljóðfæri"
        text="Í sveitunum er kennt á öll helstu málm-, tré- og slagverkshljóðfæri. Einnig eru dæmi um að kennt sé á rafbassa. Ekki er hægt að ábyrgjast að umsækjandi fái úthlutað valið hljóðfæri. Ef ekkert pláss er laust á hljóðfæri í aðalvali mun nemanda vera boðið pláss á það varahljóðfæri sem laust er á."
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

      {/* Hljóðfæri í aðalval */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Hljóðfæri í aðalval</h3>
        <hr />
        <Dropdown
          selectid="adalvalshljodfaeri"
          label="Vinsamlegast veljið hljóðfæri"
          options={instruments.map((instrument) => (
            <optgroup key={instrument.id} label={instrument.type}>
              {instrument.instrumentlist.map((instrumentitem, index) => (
                <option key={index} value={instrumentitem}>
                  {instrumentitem}
                </option>
              ))}
            </optgroup>
          ))}
        />
      </div>

      {/* Hljóðfæri í varaval */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Hljóðfæri í aðalval</h3>
        <hr />
        <Dropdown
          selectid="varavalshljodfaeri1"
          label="Fyrsta varaval"
          options={instruments.map((instrument) => (
            <optgroup key={instrument.id} label={instrument.type}>
              {instrument.instrumentlist.map((instrumentitem, index) => (
                <option key={index} value={instrumentitem}>
                  {instrumentitem}
                </option>
              ))}
            </optgroup>
          ))}
        />
        <Dropdown
          selectid="varavalshljodfaeri2"
          label="Annað varaval"
          options={instruments.map((instrument) => (
            <optgroup key={instrument.id} label={instrument.type}>
              {instrument.instrumentlist.map((instrumentitem, index) => (
                <option key={index} value={instrumentitem}>
                  {instrumentitem}
                </option>
              ))}
            </optgroup>
          ))}
        />
      </div>

      <div className="Attention">
        Við mælum með því að merkja við “Til í hvaða hljóðfæri sem er” ef óskað
        er eftir því að fá boð á hljóðfæri utan þeirra sem valin eru. Þetta val
        getur aukið líkur á inntöku umsækjanda ef ekki er laust pláss á valin
        hljóðfæri.
      </div>

      {/* Til í hvaða hljóðfæri sem er */}
      <div className={style.infoBox_checkBox}>
        <div className={style.infoBox_checkBox_inner}>
          <input className="Checkbox__input" type="checkbox" id="_9027003-5" />
          <label className="Checkbox__label" htmlFor="_9027003-5">
            Til í hvaða hljóðfæri sem er!
          </label>
        </div>
      </div>
    </div>
  );
};

export default InstrumentInfo;
