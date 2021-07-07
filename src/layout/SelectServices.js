import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import FormContext from "../context/form/formContext";
import AuthContext from "../context/auth/authContext";
import Dropdown from "../components/Dropdown/Dropdown";

const ButtonSubmit = styled.button`
  background-color: ${props => props.bgColor};
  color: #fff;
  :hover{
    filter: brightness(120%);
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  }
`;

const CustomH4 = styled.h4`
  color: ${props => props.bgColor};
  text-transform: ${props => props.uppercase ? "uppercase" : ""};
`;

const ButtonBack = styled.button`
  border-color: ${props => props.bgColor};
  color: ${props => props.bgColor};
  :hover{
    background-color: ${props => props.bgColor};
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  }
`;

const SelectServices = ({ colorPrimary, colorSecundary, allUppercase }) => {
  const formContext = useContext(FormContext);
  const authContext = useContext(AuthContext);
  const { user, authUser, logOut, authenticate } = authContext;
  const {
    device,
    devicesUser,
    plan,
    plansDevice,
    coverage,
    coveragePlans,
    getDevices,
    getPlans,
    getCoverages,
    getDocuments,
    selectDevice,
    selectPlan,
    selectCoverage,
    nextStep,
    previusStep,
    clearForm,
  } = formContext;
  const [error, setError] = useState(false);
  useEffect(() => {
    authUser();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (user) {
      getDevices(user.id);
    }
    //eslint-disable-next-line
  }, [authenticate, user]);

  const onChangeDevice = (value) => {
    selectDevice(value.id);
    getPlans(value.id);
  };
  const onChangePlan = (value) => {
    selectPlan(value.id);
    getCoverages(value.id);
  };
  const onChangeCoverage = (value) => {
    selectCoverage(value.id);
    getDocuments(value.id);
  };

  const handleNextStep = () => {
    if (device && plan && coverage) {
      setError(false);
      nextStep(2);
    } else {
      setError(true);
    }
  };
  const handlePreviusStep = () => {
    clearForm();
    logOut();
    previusStep(0);
  };
  return (
    <>
      <div className="container p-1">
        <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>Selecciona tu cobertura</CustomH4>
        <p className="fs--17">
          En esta parte tienes que escoger el dispositivo, el plan y el tipo de
          cobertura para realizar la reclamación.
        </p>
        <div className="form-group mb-4">
          <Dropdown
            options={devicesUser ? devicesUser : []}
            prompt="Selecciona el dispositivo"
            id="id"
            label1="dispositivo"
            prop1="nombre"
            label2="IMEI"
            prop2="imei_uno"
            label3="Línea"
            prop3="linea_uno"
            value={device}
            onChange={(val) => onChangeDevice(val)}
          />
          {error && !device ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <Dropdown
            options={plansDevice ? plansDevice : []}
            prompt="Selecciona tu plan"
            id="id"
            label1="plan"
            prop1="nombre"
            onChange={(val) => onChangePlan(val)}
            value={plan}
            disabled={device ? false : true}
          />
          {error & !plan ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <Dropdown
            options={coveragePlans ? coveragePlans : []}
            prompt="Selecciona tu cobertura"
            id="id"
            label1="nombre"
            value={coverage}
            onChange={(val) => onChangeCoverage(val)}
            disabled={plan ? false : true}
          />
          {error & !coverage ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <ButtonBack
            className={`btn btn-sm  ${colorSecundary ? "" : "btn-outline-secondary"} `}
            onClick={handlePreviusStep}
            bgColor={colorSecundary}
          >
            Atrás
          </ButtonBack>
          <ButtonSubmit bgColor={colorPrimary} className={`btn btn-sm  ${colorPrimary ? "" : "btn-primary"}`} onClick={handleNextStep}>
            Siguiente
          </ButtonSubmit>
        </div>
      </div>
    </>
  );
};

export default SelectServices;
