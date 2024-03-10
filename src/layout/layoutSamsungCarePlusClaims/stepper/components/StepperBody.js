import React from "react";

import { useStepperClaimsSamsung } from "../provider/step-provider";
import ReviewInformationStep from "../steps/ReviewInformationStep";
import LoginStep from "../steps/LoginStep";
import CoveragesStep from "../steps/CoveragesStep";
import DocumentStep from "../steps/DocumentStep";
import MoreInfoStep from "../steps/MoreInfoStep";

const StepperBody = () => {
  const { currentStep } = useStepperClaimsSamsung();
  return (
    <div className="container p-1">
      {currentStep === 0 && <LoginStep />}
      {currentStep === 1 && <CoveragesStep />}
      {currentStep === 2 && <DocumentStep />}
      {currentStep === 3 && <MoreInfoStep />}
      {currentStep === 4 && <ReviewInformationStep />}
    </div>
  );
};

export default StepperBody;
