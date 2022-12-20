import React from "react";

import { useStepperComercio } from "../provider/step-provider";
import DeviceInformationStep from "../steps/DeviceInformationStep";
import PoliciesAvailableStep from "../steps/PoliciesAvailables";

const StepperBody = () => {
  const { currentStep } = useStepperComercio();
  return (
    <div className='container p-1'>
      {currentStep === 0 && <DeviceInformationStep />}
      {currentStep === 1 && <PoliciesAvailableStep />}
    </div>
  );
};

export default StepperBody;
