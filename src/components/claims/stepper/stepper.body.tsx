import React from "react";
import { useStepContext } from "./stepper.provider";
import LoginStepComponent from "./steps/login.step.component";
import PlanStepComponent from "./steps/plan.step.component";
import DocumentStepComponent from "./steps/document.step.component";
import AditionalStepComponent from "./steps/aditional.step.component";
import SendStepComponet from "./steps/send.step.component";

const StepperBody = () => {
  const { currentStep } = useStepContext();
  const firstStep = <LoginStepComponent />;
  const secondStep = <PlanStepComponent />;
  const thirdStep = <DocumentStepComponent />;
  const fourthStep = <AditionalStepComponent />;
  const fiveStep = <SendStepComponet />;
  return (
    <section className="mx-auto w-2/4 border-t pt-10 ">
      <div className="mx-auto">
        {currentStep === 1 && firstStep}
        {currentStep === 2 && secondStep}
        {currentStep === 3 && thirdStep}
        {currentStep === 4 && fourthStep}
        {currentStep === 5 && fiveStep}
      </div>
    </section>
  );
};

export default StepperBody;
