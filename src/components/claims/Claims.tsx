import React from "react";
import StepProvider from "./stepper/stepper.provider";
import StepperHeader from "./stepper/stepper.header";

const Claims = () => {
  return (
    <StepProvider>
      <StepperHeader />
      <div>body</div>
    </StepProvider>
  );
};

export default Claims;
