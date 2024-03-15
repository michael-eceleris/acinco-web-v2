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
      {currentStep === 0 && <LoginStep colorPrimary={"#000000"} />}
      {currentStep === 1 && <CoveragesStep colorPrimary={"#000000"} />}
      {currentStep === 2 && <DocumentStep colorPrimary={"#000000"} />}
      {currentStep === 3 && <MoreInfoStep colorPrimary={"#000000"} />}
      {currentStep === 4 && <ReviewInformationStep colorPrimary={"#000000"} />}
    </div>
  );
};

export default StepperBody;
