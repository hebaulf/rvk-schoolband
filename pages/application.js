import { useState } from 'react'
import PersonalInfo from '../components/Application/PersonalInfo'
import SchoolbandInfo from '../components/Application/schoolBandInfo'
import InstrumentInfo from '../components/Application/InstrumentInfo'
import OtherInfo from '../components/Application/OtherInfo'
import Confirm from '../components/Application/Confirm'
import Stepper from '../components/Application/Stepper'
import StepperControl from '../components/Application/StepperControl'
import style from "../styles/Application.module.css";


const ApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    "Börn og Forsjáraðilar", 
    "Val á skólahljómsveit", 
    "Val á hljóðfæri", 
    "Upplýsingar", 
    "Yfirlit og staðfesting"
  ];

  const displayStep = (step) => {
    switch(step) {
      case 1: 
        return <PersonalInfo />
      case 2: 
        return <SchoolbandInfo />
      case 3: 
        return <InstrumentInfo />
      case 4: 
        return <OtherInfo />
      case 5: 
        return <Confirm />
    }
  }

  return (
    <div className={style.Application__wrapper}>
      <div className={style.Application__stepper}>
        {/* Stepper */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
      </div>
      <div className={style.Application__form}>
        
        {/* Navigation Controls */}
        <div className={style.Application__controls}>
          <StepperControl />
        </div>
      </div>
    </div>
  )
}

export default ApplicationPage