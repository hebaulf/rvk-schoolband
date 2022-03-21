import ApplicantStep from "./ApplicantStep";
import BandSelectionStep from "./BandSelectionStep";

function ApplicationContent({ currentStep }) {
  let step;
  if (currentStep == 1) step = <ApplicantStep />;
  if (currentStep == 2) step = <BandSelectionStep />;
  return step;
}

export default ApplicationContent;
