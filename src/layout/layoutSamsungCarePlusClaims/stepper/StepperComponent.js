import React from "react";
import { StepperClaimsSamsungCarePlusProvider } from "./provider/step-provider";
import StepperHeader from "./components/StepperHeader";
import StepperBody from "./components/StepperBody";
import Modal from "./components/Modal";
import ModalValidationCode from "./components/ModalValidationCode";

const StepperComponent = () => {
  return (
    <StepperClaimsSamsungCarePlusProvider>
      <section className="col-12 col-lg-12 mb-3 bg-gray-100">
        <div className="portlet w-75 m-auto tablelogin">
          <div className="portlet-header border-bottom">
            <StepperHeader />
          </div>
          <div className="portlet-body w-50 m-auto tablelogin">
            <StepperBody />
          </div>
        </div>
      </section>
      <Modal />
      <ModalValidationCode />
    </StepperClaimsSamsungCarePlusProvider>
  );
};

export default StepperComponent;
