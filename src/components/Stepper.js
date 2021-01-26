import React, { Fragment, useContext, useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import { ReactComponent as Devices } from "../assets/icons/devices.svg";
import { ReactComponent as Document } from "../assets/icons/contract.svg";
import { ReactComponent as Upload } from "../assets/icons/upload.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import FormContext from "../context/form/formContext";
const CustomStepper = () => {
  const formContext = useContext(FormContext);
  const { step } = formContext;
  useEffect(() => {
    changeActiveColor(step);
  }, [step]);
  const [firstStep, setFirstStep] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [fourthStep, setFourthStep] = useState(false);
  const [fivethStep, setFivethStep] = useState(false);

  const changeActiveColor = (id) => {
    switch (id) {
      case 1:
        setFirstStep(true);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
        setFivethStep(false);
        break;
      case 2:
        setFirstStep(true);
        setSecondStep(true);
        setThirdStep(true);
        setFourthStep(false);
        setFivethStep(false);
        break;
      case 3:
        setFirstStep(true);
        setSecondStep(true);
        setThirdStep(true);
        setFourthStep(true);
        setFivethStep(false);
        break;
      case 4:
        setFirstStep(true);
        setSecondStep(true);
        setThirdStep(true);
        setFourthStep(true);
        setFivethStep(true);
        break;
      default:
        setFirstStep(true);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
        setFivethStep(false);
        break;
    }
  };
  return (
    <Fragment>
      <div className="col-12 col-xl-12 mb-3">
        <div className="container">
          <h2 className="ml-5 mb-0">Proceso de reclamación</h2>
          <Stepper
            activeStep={step}
            hideConnectors={true}
            styleConfig={{
              completedBgColor: "#ffffff",
              completedTextColor: "#ffffff",
              activeBgColor: "#ffffff",
              inactiveBgColor: "#ffffff",
              activeTextColor: "#ffffff",
              inactiveTextColor: "#ffffff",
            }}
            className="m-0 p-2 cursor-default"
          >
            <Step className="col-md-4 cursor-default">
              <div className="m-0">
                <User
                  fill={firstStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                />
                <p
                  style={{ color: firstStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  1.Identificate{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default">
              <div>
                <Devices
                  fill={secondStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                />
                <p
                  style={{ color: secondStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  2.Selecciona tu cobertura{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default">
              <div>
                <Upload
                  fill={thirdStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                />
                <p
                  style={{ color: thirdStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  3.Subir documentos{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default">
              <div>
                <Document
                  fill={fourthStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                />
                <p
                  style={{ color: fourthStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  4.Información adicional{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default">
              <div>
                <Send
                  fill={fivethStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                />
                <p
                  style={{ color: fivethStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  5.Enviar
                </p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomStepper;
