import React from "react";
import StepProvider from "./stepper/stepper.provider";
import StepperHeader from "./stepper/stepper.header";
import StepperBody from "./stepper/stepper.body";
import ReclamationProvider from "../../providers/reclamation/reclamation.provider";

const Claims = () => {
  return (
    <ReclamationProvider>
      <StepProvider>
        <StepperHeader />
        <StepperBody />
      </StepProvider>
    </ReclamationProvider>
  );
};

export default Claims;
