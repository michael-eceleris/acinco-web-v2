import React, { useContext, useState, useEffect } from "react";
import Devices from "../components/Devices";
import Plans from "../components/Plans";
import Coverages from "../components/Coverage";
import FormContext from "../context/form/formContext";
import AuthContext from "../context/auth/authContext";
const SelectServices = () => {
  const formContext = useContext(FormContext);
  const authContext = useContext(AuthContext);
  const { user, authUser, logOut, authenticate } = authContext;
  const {
    device,
    plan,
    coverage,
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
  const [deviceSelect, setDeviceSelect] = useState(null);
  const [planSelect, setPlanSelect] = useState(null);
  const [coverageSelect, setCoverageSelect] = useState(null);
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

  const onChangeDevice = (e) => {
    selectDevice(e.target.value);
    setDeviceSelect({
      ...deviceSelect,
      [e.target.name]: e.target.value,
    });
    getPlans(e.target.value);
  };
  const onChangePlan = (e) => {
    selectPlan(e.target.value);
    setPlanSelect({
      ...planSelect,
      [e.target.name]: e.target.value,
    });
    getCoverages(e.target.value);
  };
  const onChangeCoverage = (e) => {
    selectCoverage(e.target.value);
    setCoverageSelect({
      ...coverageSelect,
      [e.target.name]: e.target.value,
    });
    getDocuments(e.target.value);
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
        <div className="form-label-group mb-4 ">
          <select
            name="devices"
            onChange={onChangeDevice}
            className="form-control bs-select"
            required
          >
            <option>---Selecciona tu dispostivo---</option>
            <Devices />
          </select>
          <label>Seleccione su dispostivo</label>
          {error && !device ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-label-group mb-4">
          <select
            name="plans"
            onChange={onChangePlan}
            className="form-control bs-select"
            disabled={device ? false : true}
          >
            <option>---Selecciona tu plan---</option>
            {device ? <Plans /> : null}
          </select>
          <label>Seleccione su plan</label>
          {error & !plan ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="form-label-group mb-4">
          <select
            name="coverage"
            onChange={onChangeCoverage}
            disabled={plan ? false : true}
            className="form-control bs-select"
          >
            <option>---Selecciona tu cobertura---</option>
            {plan ? <Coverages /> : null}
          </select>
          <label>Seleccione su cobertura</label>
          {error & !coverage ? (
            <p className="text-danger"> *Campo requerido </p>
          ) : null}
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
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
