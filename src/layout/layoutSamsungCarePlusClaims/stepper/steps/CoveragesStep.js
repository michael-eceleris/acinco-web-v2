import React, { useState, useEffect } from "react";
import styled from "styled-components";

import microServiceAxios from "../config/axios";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useStepperClaimsSamsung } from "../provider/step-provider";

const ButtonSubmit = styled.button`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  :hover {
    filter: brightness(120%);
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CustomH4 = styled.h4`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const ButtonBack = styled.button`
  border-color: ${(props) => props.bgColor};
  color: ${(props) => props.bgColor};
  :hover {
    background-color: ${(props) => props.bgColor};
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CoveragesStep = ({ colorPrimary, colorSecundary, allUppercase }) => {
  const [devices, setDevices] = useState([]);
  const [plans, setPlans] = useState([]);
  const [coverages, setCoverages] = useState([]);
  const [error, setError] = useState(false);
  const {
    interceptors,
    currentDevice,
    setCurrentDevice,
    currentPlan,
    currentCoverage,
    setCurrentStep,
    setCurrentPlan,
    setCurrentCoverage,
  } = useStepperClaimsSamsung();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await microServiceAxios.get("/api/v1/claim/device", {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        });
        setDevices(response.data.data.devices);
      } catch (error) {}
    };
    fetchApi();
    // eslint-disable-next-line
  }, []);
  const onChangeDevice = (value) => {
    setCurrentPlan(null);
    setCurrentCoverage(null);
    setCurrentDevice(value);
    getPlans(value.id);
  };
  const getPlans = async (id) => {
    try {
      const response = await microServiceAxios.get(`/api/v1/claim/plan/${id}`, {
        headers: {
          Authorization: `${interceptors.type} ${interceptors.token}`,
        },
      });
      setPlans(response.data.data.plan);
    } catch (error) {}
  };
  const onChangePlan = (value) => {
    setCurrentPlan(value);
    setCurrentCoverage(null);
    getCoverages(value.id);
  };
  const getCoverages = async (id) => {
    try {
      const response = await microServiceAxios.get(
        `/api/v1/claim/coverage/${id}`,
        {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        }
      );
      setCoverages(response.data.data.coverage);
    } catch (error) {}
  };
  const onChangeCoverage = (value) => {
    setCurrentCoverage(value);
  };

  const handleNextStep = () => {
    if (currentCoverage && currentPlan && currentDevice) {
      setError(false);
      setCurrentStep(2);
    } else {
      setError(true);
    }
  };
  const handlePreviusStep = () => {
    setCurrentCoverage(null);
    setCurrentPlan(null);
    setCurrentDevice(null);
    setCurrentStep(0);
  };
  return (
    <>
      <div className="container p-1">
        <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>
          Selecciona tu cobertura
        </CustomH4>
        <p className="fs--17">
          En esta parte tienes que escoger el dispositivo, el plan y el tipo de
          cobertura para realizar la reclamación.
        </p>
        <div className="form-group mb-4">
          <Dropdown
            options={devices || []}
            prompt="Selecciona el dispositivo"
            id="id"
            label1="dispositivo"
            prop1="nombre"
            label2="IMEI"
            prop2="imei_uno"
            label3="Línea"
            prop3="linea_uno"
            value={currentDevice}
            onChange={(val) => onChangeDevice(val)}
          />
          {error && !currentDevice ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <Dropdown
            options={plans || []}
            prompt="Selecciona tu plan"
            id="id"
            label1="plan"
            prop1="nombre"
            onChange={(val) => onChangePlan(val)}
            value={currentPlan}
            disabled={currentDevice ? false : true}
          />
          {error & !currentPlan ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <Dropdown
            options={coverages[0]?.tipos_cobertura_cobertura || []}
            prompt="Selecciona tu cobertura"
            id="id"
            label1="nombre"
            value={currentCoverage}
            onChange={(val) => onChangeCoverage(val)}
            disabled={currentPlan ? false : true}
          />
          {error & !currentCoverage ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <ButtonBack
            className={`btn btn-sm  ${
              colorSecundary ? "" : "btn-outline-secondary"
            } `}
            onClick={handlePreviusStep}
            bgColor={colorSecundary}
          >
            Atrás
          </ButtonBack>
          <ButtonSubmit
            bgColor={colorPrimary}
            className={`btn btn-sm  ${colorPrimary ? "" : "btn-primary"}`}
            onClick={handleNextStep}
          >
            Siguiente
          </ButtonSubmit>
        </div>
      </div>
    </>
  );
};

export default CoveragesStep;
