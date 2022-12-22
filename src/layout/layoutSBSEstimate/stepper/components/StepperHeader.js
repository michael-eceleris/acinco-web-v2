import React, { Fragment } from "react";
import { Stepper, Step } from "react-form-stepper";
import styled from "styled-components";

import { ReactComponent as DeviceInfo } from "../../../../assets/icons/device-info.svg";
import { ReactComponent as Formulario } from "../../../../assets/icons/formulario.svg";
import { ReactComponent as Cellphone } from "../../../../assets/icons/cellphone-estimate.svg";
import { useStepperComercio } from "../provider/step-provider";

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

const StepperHeader = () => {
  const { currentStep } = useStepperComercio();
  const defaultColor = "#9E1C64";
  return (
    <Fragment>
      <div className='col-xl-12 mb-3'>
        <div className='container'>
          <h2 className='ml-5 mb-1 h4-xs h2-md textcustom'>
            Realiza tu cotizacion
          </h2>
          <div className='show3'>
            <div className='d-flex justify-content-around'>
              <DivCircle
                style={{
                  backgroundColor: currentStep >= 0 ? defaultColor : "#e1e1e1",
                  color: currentStep >= 0 ? "#e1e1e1" : defaultColor,
                }}
              >
                1
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: currentStep >= 1 ? defaultColor : "#e1e1e1",
                  color: currentStep >= 1 ? "#e1e1e1" : defaultColor,
                }}
              >
                2
              </DivCircle>
              <DivCircle
                style={{
                  backgroundColor: currentStep >= 2 ? defaultColor : "#e1e1e1",
                  color: currentStep >= 1 ? "#e1e1e1" : defaultColor,
                }}
              >
                2
              </DivCircle>
            </div>
            <div className='mt-3 mb-0'>
              <p
                style={{ color: defaultColor }}
                className='mt--5 fs--20 text-center-xs'
              >
                {currentStep === 0 && "1. Datos del dispositivo."}
                {currentStep === 1 && "2. Pólizas disponibles."}
                {currentStep === 2 && "3. Verificación de pantalla."}
              </p>
            </div>
          </div>
          <Stepper
            activeStep={currentStep}
            hideConnectors={true}
            styleConfig={{
              completedBgColor: "#ffffff",
              completedTextColor: "#ffffff",
              activeBgColor: "#ffffff",
              inactiveBgColor: "#ffffff",
              activeTextColor: "#ffffff",
              inactiveTextColor: "#ffffff",
            }}
            className='m-0 p-2 cursor-default show2 min-h-200'
          >
            <Step className='col-md-4 cursor-default min-h-150'>
              <div className='m-0'>
                <DeviceInfo
                  fill={currentStep >= 0 ? defaultColor : "#e1e1e1"}
                  width='200'
                  height='90'
                  className='show2'
                />
                <p
                  style={{ color: currentStep >= 0 ? defaultColor : "#bababa" }}
                  className='mt--5 textcustom h6-xs'
                >
                  1. Datos del dispositivo
                </p>
              </div>
            </Step>
            <Step className='col-md-4 cursor-default min-h-150'>
              <div className='m-0'>
                <Formulario
                  fill={currentStep >= 1 ? defaultColor : "#e1e1e1"}
                  width='200'
                  height='80'
                  className='show2 ml-4'
                />
                <p
                  style={{ color: currentStep >= 1 ? defaultColor : "#bababa" }}
                  className='mt--1 textcustom h6-xs'
                >
                  2. Pólizas disponibles.
                </p>
              </div>
            </Step>
            <Step className='col-md-4 cursor-default min-h-150'>
              <div className='m-0'>
                <Cellphone
                  fill={currentStep >= 2 ? defaultColor : "#e1e1e1"}
                  width='200'
                  height='80'
                  className='show2 ml-4'
                />
                <p
                  style={{ color: currentStep >= 2 ? defaultColor : "#bababa" }}
                  className='mt--1 textcustom h6-xs'
                >
                  3. Verificación de pantalla.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </Fragment>
  );
};

export default StepperHeader;
