

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <>
      <button 
        type="button"
        className="ButtonTertiary ButtonTertiary--go--back" 
        disabled={currentStep === 1 ? true : false}
        onClick={() => handleClick()}
      >
        Til baka
      </button>
      <button 
        type="button"
        className="ButtonSecondary" 
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length ? "Staðfesta" : "Áfram"}
      </button>
    </>
  )
}

export default StepperControl