import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import TextBlock from "../TextBlock/TextBlock";
import style from "./Application.module.css";

const OtherInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <TextBlock
        headingsize="h2"
        title="Nánari upplýsingar um umsækjanda"
        text="Hér koma frekari upplýsingar sem eru gagnlegar fyrir úrvinnslu umsókna."
      />

      {/* Biðlisti */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Biðlisti</h3>
        <a href="#">Hvernig hefur þetta áhrif?</a>
        <div className={style.infoBox_checkBox_inner}>
          <input className="Checkbox__input" type="checkbox" id="waitinglist" />
          <label className="Checkbox__label" htmlFor="waitinglist">
            Umsækjandi var á biðlista fyrir skólahljómsveit síðastliðið ár
          </label>
        </div>
      </div>

      {/* Þáttaka í starfinu */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Þáttaka í starfinu</h3>
        <a href="#">Hvað þýðir það?</a>
        <div className={style.infoBox_checkBox_inner}>
          <input className="Checkbox__input" type="checkbox" id="cooperation" />
          <label className="Checkbox__label" htmlFor="cooperation">
            Umsækjandi samþykkir að taka þátt í starfi skólahljómsveitarinnar
          </label>
        </div>
      </div>

      {/* Kennsla á skólatíma */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Kennsla á skólatíma</h3>
        <a href="#">Hvað þýðir það?</a>
        <div className={style.infoBox_checkBox_inner}>
          <input
            className="Checkbox__input"
            type="checkbox"
            id="teachingonschooltime"
          />
          <label className="Checkbox__label" htmlFor="teachingonschooltime">
            Forsjáraðili samþykkir að umsækjandi stundi æfingar á skólatíma.
          </label>
        </div>
      </div>

      {/* Tónlistarnám */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Tónlistarnám</h3>
        <p>
          Ef við á, vinsamlegast skráið hér hvort umsækjandi hefur stundað nám
          við tónlistarskóla.
        </p>
        <div className="Attention">
          Engin krafa er gerð um fyrra tónlistarnám en gott er að fá upplýsingar
          um það til að raða rétt niður í hljómsveitirnar.
        </div>
        <div className="FormField TextInput TextInput--multiline">
          <label className="FormField__label" htmlFor="info1">Hvaða nám og hvar?</label>
          <textarea className="FormField__input" id="info1" name="info1" value={userData["info1"] || ""} onChange={handleChange}></textarea>
        </div>
      </div>

      {/* Umsókn utan skólahverfis */}
      <div className={style.infoBox}>
        <h3 className={style.infoBoxTitle}>Umsókn utan skólahverfis</h3>
        <p>Vinsamlegast gerið grein fyrir ástæðu umsóknar utan skólahverfis.</p>
        <div className="FormField TextInput TextInput--multiline">
          <label className="FormField__label" htmlFor="info2"></label>
          <textarea className="FormField__input" id="info2" name="info2" value={userData["info2"] || ""} onChange={handleChange}></textarea>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
