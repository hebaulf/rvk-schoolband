import SchoolBandBox from "../SchoolBandBox/SchoolBandBox";
import TextBlock from "../TextBlock/TextBlock";
import style from "./Application.module.css";
import { schoolsBands } from "../../data/schools";

const SchoolbandInfo = () => {
  const registeredSchool = "Hagaskóli";
  const defaultSchoolBand = schoolsBands[0];
  const defaultSchoolBandName = defaultSchoolBand.name;

  const schoolBandSchoolList = (
    <ul className={style.SchoolbandList}>
      {schoolsBands.map((schoolband, index) => (
        <li key={index} className={style.SchoolbandListItem}>
          {schoolband}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={style.SchoolBandInfo}>
      <TextBlock
        headingsize="h2"
        title="Val á skólahljómsveit"
        text="Skólahljómsveitir þjóna ákveðnum grunnskólum í Reykjavík. Í mörgum þeirra er kennsla á vegum skólahljómsveita á skólatíma. Hver hljómsveit er starfrækt í öllum skólum viðeigandi hverfis en á svo eina heimastöð."
      />

      <div className={style.DefaultSchoolBand}>
        <p className={style.smalltext}>
          Þinn Grunnskóli: <strong>{registeredSchool}</strong>
        </p>
        <h4>Þín hverfishljómsveit:</h4>
        <SchoolBandBox
          title={defaultSchoolBandName}
          homeschool={defaultSchoolBand.homeSchool}
          address={defaultSchoolBand.streetAddress}
          postalcode={defaultSchoolBand.postalCode}
          linkurl={defaultSchoolBand.infoLink}
          accordiontitle={"Sjá alla skóla sem tilheyra skólahljómsveitinni"}
          accordioncontent={
            <ul className={style.SchoolbandList}>
              {defaultSchoolBand.schoolBandList.map((school, index) => (
                <li key={school} className={style.SchoolbandListItem}>
                  {school}
                </li>
              ))}
            </ul>
          }
          checkboxtext={"Velja þennan skóla"}
        />
      </div>

      <TextBlock
        headingsize="h3"
        title="Velja hljómsveit utan hverfis:"
        text="Mælt er með því að velja hljómsveit innan hverfis umsækjanda en ýmsar ástæður geta verið fyrir því að sótt er um utan hverfis."
      />

      {schoolsBands.map((schoolband) => (
        <div key={schoolband.id}>
          <SchoolBandBox
            title={schoolband.name}
            homeschool={schoolband.homeSchool}
            address={schoolband.streetAddress}
            postalcode={schoolband.postalCode}
            linkurl={schoolband.infoLink}
            accordiontitle={"Sjá alla skóla sem tilheyra skólahljómsveitinni"}
            accordioncontent={
              <ul className={style.SchoolbandList}>
                {schoolband.schoolBandList.map((school, index) => (
                  <li key={school} className={style.SchoolbandListItem}>
                    {school}
                  </li>
                ))}
              </ul>
            }
            checkboxtext={"Velja þennan skóla"}
          />
        </div>
      ))}
    </div>
  );
};

export default SchoolbandInfo;
