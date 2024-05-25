import React from "react";
import StepProvider from "./stepper/stepper.provider";
import StepperHeader from "./stepper/stepper.header";
import StepperBody from "./stepper/stepper.body";

const Claims = () => {
  return (
    <StepProvider>
      <StepperHeader />
      <StepperBody />
    </StepProvider>
  );
};

export default Claims;
