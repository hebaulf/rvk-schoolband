import Link from "next/link";

const StepperControl = ({ currentStep, steps }) => {
  return (
    <>
      <Link href={`/application/${currentStep - 1}`}>
        <button
          type="button"
          className="ButtonTertiary ButtonTertiary--go--back"
          disabled={currentStep === 1 ? true : false}
        >
          Til baka
        </button>
      </Link>
      <Link href={`/application/${currentStep + 1}`}>
        <button type="button" className="ButtonSecondary rightAligned">
          {currentStep === currentStep.length ? "Staðfesta" : "Áfram"}
        </button>
      </Link>
    </>
  );
};

export default StepperControl;
