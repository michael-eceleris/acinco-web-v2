import React, {useState, useEffect, useContext} from 'react';
import Coverage from './Coverage';
import plans from '../data/plans.json';
import FormContext from '../context/form/formContext';


const Plans = () => {

  const selectDevice = [];
  const formContext = useContext(FormContext);
  const { device, selectPlan } = formContext;

  const [planSelect, setPlanSelect] = useState(null);

  useEffect(()=>{
    selectPlan(null);
    setPlanSelect(null);
  },[device]);

  const plansDevice = plans.map( plan => plan.devices.map(deviceId => (deviceId.devicePlan === device ) && selectDevice.push(plan)));
  const onChange = e => {
    selectPlan(e.target.value);
    setPlanSelect({
      ...planSelect,
      [e.target.name] : e.target.value,
    });
  };
  return ( 
    <div>
      <select name="plans" onChange={onChange}>
        <option value="">---Seleccione Plan ---</option>
        {selectDevice.map( plan => (<option key={plan.id} value={plan.id}>{plan.planName}</option>))}
      </select>
      {planSelect? <Coverage />: null}
    </div>
  );
};
 
export default Plans;