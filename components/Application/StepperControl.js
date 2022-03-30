import Link from "next/link";

const StepperControl = ({ currentStep, steps }) => {
  return (
    <>
      <Link href={`/application/${currentStep - 1}`} passHref>
        <button
          type="button"
          className="ButtonTertiary ButtonTertiary--go--back"
          disabled={currentStep === 1 ? true : false}
        >
          Til baka
        </button>
      </Link>
      <Link href={`/application/${currentStep + 1}`}>
        {(currentStep === steps.length - 1) 
          ? (
            <button type="button" className="ButtonPrimary rightAligned">
              Samþykkja og senda inn umsókn!
            </button>
          ) : (
            <button type="button" className="ButtonSecondary rightAligned">
              Áfram
            </button>
          )
        }
      </Link>
    </>
  );
};

export default StepperControl;
