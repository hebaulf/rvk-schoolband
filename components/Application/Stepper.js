


const Stepper = ({ steps, currentStep }) => {
    
    const displaySteps = (
        <div class="WizardStepper">
            <button type="button" class="WizardStepper__step WizardStepper__step--done">
                Börn og Foreldrar
            </button>
            <button type="button" class="WizardStepper__step" aria-current="step">
                Val á skólahljómsveit
            </button>
            <button type="button" class="WizardStepper__step">
                Val á hljóðfæri
            </button>
            <button type="button" class="WizardStepper__step">
                Upplýsingar
            </button>
            <button type="button" class="WizardStepper__step">
                
            </button>
            <span class="WizardStepper__step">Yfirlit og Staðfesting</span>
        </div>
    );
  return (
    <>
        {displaySteps}
    </>
  )
}

export default Stepper