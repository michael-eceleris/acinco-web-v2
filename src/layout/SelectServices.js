import React,{ Fragment, useContext, useState, useEffect } from 'react';
import Devices from '../components/Devices';
import Plans from '../components/Plans';
import Coverages from '../components/Coverage';
import FormContext from '../context/form/formContext';
import AuthContext from '../context/auth/authContext';
const SelectServices = () => {
  const formContext = useContext(FormContext);
  const authContext = useContext(AuthContext);
  const { user, authUser, logOut } = authContext;
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
  const [ error, setError ] = useState(false);
  const [deviceSelect, setDeviceSelect] = useState(null);
  const [planSelect, setPlanSelect] = useState(null);
  const [ coverageSelect, setCoverageSelect ] = useState(null);
  useEffect(()=> {
    authUser()
  },[])
  if(user) {
    getDevices(user.id)
  }
  const onChangeDevice = e => {
    selectDevice(e.target.value);
    setDeviceSelect({
      ...deviceSelect,
      [e.target.name] : e.target.value
    });
    getPlans(e.target.value);
  }
  const onChangePlan = e => {
    selectPlan(e.target.value);
    setPlanSelect({
      ...planSelect,
      [e.target.name] : e.target.value,
    });
    getCoverages(e.target.value);
  }
  const onChangeCoverage = e => {
    selectCoverage(e.target.value)
    setCoverageSelect({
      ...coverageSelect,
      [e.target.name] : e.target.value,
    });
    getDocuments(e.target.value);
  }

  const handleNextStep = () => {
    if(device && plan && coverage){
      setError(false);
      nextStep(2);
    }else{
      setError(true);
    }
  }
  const handlePreviusStep = () => {
    clearForm();
    logOut();
    previusStep(0);
  }
  return ( 
    <div className="container-form">
      <label>Seleccione su dispostivo</label>
      <div className="Campo-form">
        <select name="devices" onChange={onChangeDevice} required >
          <option> ---Selecciona tu dispostivo---</option>
          <Devices />
        </select>
        {error && !device ? <p> *Campo requerido </p>: null}
      </div>
      <label>Seleccione su plan</label>
      <div className="Campo-form">
        <select name="plans" onChange={onChangePlan} disabled={device ? false: true}>
          <option> ---Selecciona tu dispostivo---</option>
            {device ?  <Plans /> : null }
        </select>
        {error & !plan ? <p> *Campo requerido </p>: null}
      </div>
      <label>Seleccione su cobertura</label>
      <div className="Campo-form">
        <select name="coverage" onChange={onChangeCoverage} disabled={plan ? false : true}>
          <option> ---Selecciona tu dispostivo---</option>
            {plan ? <Coverages /> : null}
        </select>
        {error & !coverage ? <p> *Campo requerido </p>: null}
      </div>
      <div className="campo-btn">
        <button
          className="btn btn-sm btn-secundario"
          onClick={handlePreviusStep}
        >
          Atras
        </button>
        <button
          className="btn btn-sm btn-primario"
          onClick={handleNextStep}
        >
          Siguente
        </button>
      </div>
    </div>
   );
}
 
export default SelectServices;