import React from "react";

import { useStepperComercio } from "../provider/step-provider";
import CheckCodeStep from "../steps/CheckCodeStep";
import UserInformationStep from "../steps/UserInformationStep";
import DeviceInformationStep from "../steps/DeviceInformationStep";
import ReviewInformationStep from "../steps/ReviewInformationStep";

const StepperBody = () => {
  const { currentStep } = useStepperComercio();
  return (
    <div className='container p-1'>
      {currentStep === 0 && <CheckCodeStep />}
      {currentStep === 1 && <DeviceInformationStep />}
      {currentStep === 2 && <UserInformationStep />}
      {currentStep === 3 && <ReviewInformationStep />}
    </div>
  );
};

export default StepperBody;
