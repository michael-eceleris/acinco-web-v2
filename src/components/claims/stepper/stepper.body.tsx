import React from "react";
import { useStepContext } from "./stepper.provider";
import LoginStepComponent from "./steps/login.step.component";
import PlanStepComponent from "./steps/plan.step.component";

const StepperBody = () => {
  const { currentStep } = useStepContext();
  const firstStep = <LoginStepComponent />;
  const secondStep = <PlanStepComponent />;
  return (
    <section className="mx-auto w-2/4 border-t pt-10 ">
      <div className="mx-auto">
        {currentStep === 1 && firstStep}
        {currentStep === 2 && secondStep}
      </div>
    </section>
  );
};

export default StepperBody;
