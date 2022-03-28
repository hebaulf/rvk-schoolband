import { useRouter } from "next/router";
import { useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import Stepper from "../../components/Application/Stepper";
import StepperControl from "../../components/Application/StepperControl";

import PersonalInfo from "../../components/Application/PersonalInfo";
import SchoolbandInfo from "../../components/Application/schoolBandInfo";
import InstrumentInfo from "../../components/Application/InstrumentInfo";
import OtherInfo from "../../components/Application/OtherInfo";
import Confirm from "../../components/Application/Confirm";

import style from "../../styles/Home.module.css";

const ApplicationPage = (props) => {
  const router = useRouter();

  // const [currentStep, setCurrentStep] = useState();
  const currentStep = Number(router.query.step);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Börn og Forsjáraðilar",
    "Val á skólahljómsveit",
    "Val á hljóðfæri",
    "Upplýsingar",
    "Yfirlit og staðfesting",
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
    }
  };

  console.log("props:", router.query);

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

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
        <div className={style.Application__data}>
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
        <div className={style.Application__controls}>
          <StepperControl
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
