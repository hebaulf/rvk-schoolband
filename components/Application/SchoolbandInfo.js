import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

import TitleBlock from "../TitleBlock/TitleBlock"
import styles from "./Application.module.css"

const SchoolbandInfo = () => {
  return (
    <div>
      <TitleBlock 
        headingSize="h2"
        title="Val á skólahljómsveit"
        text="Skólahljómsveitir þjóna ákveðnum grunnskólum í Reykjavík. Í mörgum þeirra er kennsla á vegum skólahljómsveita á skólatíma. Hver hljómsveit er starfrækt í öllum skólum viðeigandi hverfis en á svo eina heimastöð."
      />
      <div>
        <span>Þinn Grunnskóli:</span>
        <h3>Þín hverfishljómsveit:</h3>
        <div className={styles.infoBox}>

        </div>
      </div>
      <div>
        <TitleBlock 
          headingSize="h2"
          title="Val á skólahljómsveit"
          text="Skólahljómsveitir þjóna ákveðnum grunnskólum í Reykjavík. Í mörgum þeirra er kennsla á vegum skólahljómsveita á skólatíma. Hver hljómsveit er starfrækt í öllum skólum viðeigandi hverfis en á svo eina heimastöð."
        />
        <div className={styles.infoBox}>

        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default SchoolbandInfo