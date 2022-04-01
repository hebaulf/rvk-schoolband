import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import SchoolBandBox from "../SchoolBandBox/SchoolBandBox";
import TextBlock from "../TextBlock/TextBlock";
import style from "./Application.module.css";
import { schoolsBands } from "../../data/schools";
import AccordionList from "../Accordion/AccordionList";

const SchoolbandInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);
  
  const handleChange = (e) => {
    const { name, value, checked} = e.target;
    const data = checked ? name : value;
    setUserData({ ...userData, [name]: data });
  };

  const registeredSchool = "Hagaskóli";
  const defaultSchoolBand = schoolsBands[0];
  const defaultSchoolBandName = defaultSchoolBand.name;

  return (
    <div className={`FormField checkboxGroup ${style.SchoolBandInfo}`} role="group">
      <TextBlock
        headingsize="h2"
        title="Val á skólahljómsveit"
        text="Skólahljómsveitir þjóna ákveðnum grunnskólum í Reykjavík. Í mörgum þeirra er kennsla á vegum skólahljómsveita á skólatíma. Hver hljómsveit er starfrækt í öllum skólum viðeigandi hverfis en á svo eina heimastöð."
      />

      <div className="VSpacer">
        <div className={style.defaultSchoolBand}>
          <p>Þinn Grunnskóli: <strong>{registeredSchool}</strong></p>
          <h3>Þín hverfishljómsveit:</h3>
          <SchoolBandBox
            title={defaultSchoolBandName}
            homeschool={defaultSchoolBand.homeSchool}
            address={defaultSchoolBand.streetAddress}
            postalcode={defaultSchoolBand.postalCode}
            linkurl={defaultSchoolBand.infoLink}
            accordiontitle={"Sjá alla skóla sem tilheyra skólahljómsveitinni"}
            accordioncontent={
              <ul className={style.schoolbandList}>
                {defaultSchoolBand.schoolBandList.map((school, index) => (
                  <li key={index} className={style.schoolbandListItem}>
                    {school}
                  </li>
                ))}
              </ul>
            }
            checkboxid={defaultSchoolBand.id}
            checkboxtext="Velja þennan skóla"
            name={defaultSchoolBandName}
            checked={userData[defaultSchoolBandName] || false}
            handleChange={handleChange}
          />
        </div>
      </div>

      <TextBlock
        headingsize="h3"
        title="Hljómsveitir utan hverfis"
        text="Mælt er með því að velja hljómsveit innan hverfis umsækjanda en ýmsar ástæður geta verið fyrir því að sótt er um utan hverfis."
      />

      <AccordionList
        title="Velja hljómsveit utan hverfis:" 
        content={schoolsBands.map((schoolband) => (
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
                    <li key={index} className={style.SchoolbandListItem}>
                      {school}
                    </li>
                  ))}
                </ul>
              }
              checkboxid={schoolband.id}
              checkboxtext="Velja þennan skóla"
              name={schoolband.name}
              checked={userData[schoolband.name] || false}
              handleChange={handleChange}
            />
          </div>
        ))}
      />
    </div>
  );
};

export default SchoolbandInfo;
