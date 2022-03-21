function ApplicationProgressBar() {
  return (
    <div className="WizardStepper">
      <button
        type="button"
        className="WizardStepper__step WizardStepper__step--done"
      >
        Fyrir hvern er viðtalið?
      </button>
      <span className="WizardStepper__step WizardStepper__step--done">
        Ástæða viðtals (never clickable)
      </span>
      <button type="button" className="WizardStepper__step" aria-current="step">
        Bæta við gögnum
      </button>
      <span className="WizardStepper__step">Við höfum samband</span>
    </div>
  );
}

export default ApplicationProgressBar;
