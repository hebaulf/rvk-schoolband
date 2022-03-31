import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import style from "./Application.module.css"

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    // console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
        
      // Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      // Step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // Step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

    useEffect(() => {
      // Create object
      const stepsState = steps.map((step, index) =>
        Object.assign(
          {},
          {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
          }
        )
      );

      stepsRef.current = stepsState;
      const current = updateStep(currentStep - 1, stepsRef.current);
      setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
      return (
        <Link key={index} href={`/application/${index + 1}`} passHref>
          <button 
              type="button" 
              className={`WizardStepper__step ${step.completed ? "WizardStepper__step--done" : ""} ${style.stepper}`} 
              aria-current={step.highlighted ? "step" : ""} >
              {step.description}
          </button>
        </Link>
      );
    });
        
  return (
    <div className="WizardStepper">
        {stepsDisplay}
    </div>
  )
}

export default Stepper