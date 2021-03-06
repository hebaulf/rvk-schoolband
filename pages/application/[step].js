import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import Stepper from "../../components/Application/Stepper";
import StepperControl from "../../components/Application/StepperControl";

import PersonalInfo from "../../components/Application/PersonalInfo";
import SchoolbandInfo from "../../components/Application/SchoolbandInfo";
import InstrumentInfo from "../../components/Application/InstrumentInfo";
import OtherInfo from "../../components/Application/OtherInfo";
import Confirm from "../../components/Application/Confirm";
import Complete from "../../components/Application/Complete";

import style from "../../styles/Home.module.css";

const ApplicationPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    const elem = document.createElement('div');
    elem.classList.add("bgrBubbles");
    document.body.appendChild(elem);
  }, []);
  
  const currentStep = Number(router.query.step);

  const steps = [
    "Börn og Forsjáraðilar",
    "Val á skólahljómsveit", 
    "Val á hljóðfæri",
    "Upplýsingar",
    "Yfirlit og staðfesting",
    "Staðfesting",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SchoolbandInfo />;
      case 3:
        return <InstrumentInfo />;
      case 4:
        return <OtherInfo />;
      case 5:
        return <Confirm />;
      case 6:
        return <Complete />;
    }
  };

  //console.log("props:", router.query);

  return (
    <div className={style.Application__wrapper}>
      <div className={style.Application__stepper}>
        
        {/* Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />
        
        {/* Infobox */}
        <div className={style.Application__help}>
          <p className={style.help}>
            <strong>Vantar Þig aðstoð?</strong>
          </p>
          <p>Hafðu samband við þjónustuver í síma</p>
          <span className={style.number}>411 1111</span>
        </div>
      </div>

      <div className={style.Application__form}>
        
        {/* Display Steps */}
        <div className={style.Application__steps}>
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(Number(router.query.step))}
          </StepperContext.Provider>
        </div>
        
        {/* Stepper Controls */}
        {currentStep != steps.length && 
          <div className={style.Application__controls}>
            <StepperControl
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        }
      </div>
    </div>
  );
}; 

export default ApplicationPage;
