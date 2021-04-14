import React, { Fragment, useContext, useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import { ReactComponent as Devices } from "../assets/icons/devices.svg";
import { ReactComponent as Document } from "../assets/icons/contract.svg";
import { ReactComponent as Upload } from "../assets/icons/upload.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import styled from "styled-components";
import FormContext from "../context/form/formContext";

const DivCircle = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
`;

const CustomStepper = () => {
  const formContext = useContext(FormContext);
  const { step, openModal } = formContext;
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
      <div className=" col-xl-12 mb-3">
        <div className="container">
          <h2 className="ml-5 mb-1 h4-xs h2-md textcustom">
            Proceso de reclamación
          </h2>
          <p className="ml-5 lead textcustom h6-xs">
            Antes de realizar tu reclamación revisa los documentos necesarios,
            revísalos{" "}
            <button
              className="link-muted btn_link "
              onClick={() => openModal(null)}
            >
              aquí
            </button>
            .
          </p>
          <div className="show3">
            <div className="d-flex justify-content-around ">
              <DivCircle
                style={{
                  backgroundColor: firstStep ? "#003272" : "#e1e1e1",
                  color: firstStep ? "#e1e1e1" : "#003272",
                }}
              >
                1
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: secondStep ? "#003272" : "#e1e1e1",
                  color: secondStep ? "#e1e1e1" : "#003272",
                }}
              >
                2
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: thirdStep ? "#003272" : "#e1e1e1",
                  color: thirdStep ? "#e1e1e1" : "#003272",
                }}
              >
                3
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: fourthStep ? "#003272" : "#e1e1e1",
                  color: fourthStep ? "#e1e1e1" : "#003272",
                }}
              >
                4
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: fivethStep ? "#003272" : "#e1e1e1",
                  color: fivethStep ? "#e1e1e1" : "#003272",
                }}
              >
                5
              </DivCircle>
            </div>
            <div className="mt-3 mb-0">
              <p
                style={{ color: "#003272" }}
                className="mt--5 fs--20 text-center-xs"
              >
                {firstStep &&
                !secondStep &&
                !thirdStep &&
                !fourthStep &&
                !fivethStep
                  ? "1.Identifícate"
                  : firstStep &&
                    secondStep &&
                    !thirdStep &&
                    !fourthStep &&
                    !fivethStep
                  ? "2.Selecciona tu cobertura"
                  : firstStep &&
                    secondStep &&
                    thirdStep &&
                    !fourthStep &&
                    !fivethStep
                  ? "3.Subir documentos"
                  : firstStep &&
                    secondStep &&
                    thirdStep &&
                    fourthStep &&
                    !fivethStep
                  ? "4.Información adicional"
                  : firstStep &&
                    secondStep &&
                    thirdStep &&
                    fourthStep &&
                    fivethStep
                  ? "5.Enviar"
                  : null}
              </p>
            </div>
          </div>
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
            className="m-0 p-2 cursor-default show2 min-h-200"
          >
            <Step className="col-md-4 cursor-default min-h-150">
              <div className="m-0">
                <User
                  fill={firstStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                  className="show2"
                />
                <p
                  style={{ color: firstStep ? "#003272" : "#bababa" }}
                  className="mt--5 textcustom h6-xs"
                >
                  1.Identifícate
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default min-h-150">
              <div>
                <Devices
                  fill={secondStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                  className="show2"
                />
                <p
                  style={{ color: secondStep ? "#003272" : "#bababa" }}
                  className="mt--5 textcustom h6-xs"
                >
                  2.Selecciona tu cobertura{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default min-h-150">
              <div>
                <Upload
                  fill={thirdStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                  className="show2"
                />
                <p
                  style={{ color: thirdStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  3.Subir documentos{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default min-h-150">
              <div>
                <Document
                  fill={fourthStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                  className="show2"
                />
                <p
                  style={{ color: fourthStep ? "#003272" : "#bababa" }}
                  className="mt--5"
                >
                  4.Información adicional{" "}
                </p>
              </div>
            </Step>
            <Step className="col-md-4 cursor-default min-h-150">
              <div>
                <Send
                  fill={fivethStep ? "#003272" : "#e1e1e1"}
                  width="200"
                  height="80"
                  className="show2"
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
