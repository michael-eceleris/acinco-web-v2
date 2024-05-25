import React from "react";
import { useStepContext } from "./stepper.provider";
import LoginStepComponent from "./steps/login.step.component";

const StepperBody = () => {
  const { currentStep } = useStepContext();
  const firstStep = <LoginStepComponent />;
  return (
    <section className="mx-auto w-2/4 border-t pt-10 ">
      <div className="mx-auto">{currentStep === 1 && firstStep}</div>
    </section>
  );
};

export default StepperBody;
