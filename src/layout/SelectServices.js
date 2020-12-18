import React, { useContext, useState, useEffect } from "react";
import FormContext from "../context/form/formContext";
import AuthContext from "../context/auth/authContext";
import Dropdown from "../components/Dropdown/Dropdown";
const SelectServices = () => {
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
        <h4>Selecciona tu cobertura</h4>
        <p className="fs--17">
          En esta parte tienes que escoger el dipositivo, el plan y el tipo de
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
            label3="Linea"
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
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handlePreviusStep}
          >
            Atras
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleNextStep}>
            Siguente
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectServices;
