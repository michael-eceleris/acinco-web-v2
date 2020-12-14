import React, { Fragment, useContext } from "react";
import { Stepper, Step } from "react-form-stepper";

import logoUser from "../assets/icons/user-protection.svg";
import FormContext from "../context/form/formContext";
const CustomStepper = () => {
  const formContext = useContext(FormContext);
  const { step } = formContext;
  return (
    <Fragment>
      <div>
        <h1>Reclamaciones</h1>
      </div>
      <div className="col-12 col-xl-12 mb-3">
        <div className="container">
          <Stepper
            activeStep={step}
            hideConnectors={true}
            styleConfig={{
              completedBgColor: "#003272",
              completedTextColor: "#e1e1e1",
              activeBgColor: "#003272",
              inactiveBgColor: "#e1e1e1",
              circleFontSize: "1.5rem",
              size: "2.5rem",
              activeTextColor: "#e1e1e1",
              inactiveTextColor: "#5d9afc",
              borderRadius: "30%",
              labelFontSize: "1rem",
            }}
          >
            <Step className="col-md-4" label="1) Identíficate" />
            <Step className="col-md-4" label="2) Selecciona tu cobertura" />
            <Step className="col-md-4" label="3) Subir documentos" />
            <Step className="col-md-4" label="4) Información adicional" />
            <Step className="col-md-4" label="5) Enviar" />
          </Stepper>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomStepper;
