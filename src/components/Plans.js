import React, {useState, useEffect} from 'react';
import Coverage from './Coverage';
import plans from '../data/plans.json';
const Plans = ({deviceId }) => {
  const [planSelect, setPlanSelect] = useState(null);
  useEffect(()=>{
    setPlanSelect(null)
  },[deviceId])
  const selectDevice = [];
  const plansDevice = plans.map( plan => plan.devices.map(device => (device.devicePlan === deviceId ) && selectDevice.push(plan)))
  console.log(selectDevice)
  const onChange = e => {
    setPlanSelect({
      ...planSelect,
      [e.target.name] : e.target.value
    })
  }
  return ( 
    <div>
      <select name="plans" onChange={onChange}>
        <option>---Seleccione Plan ---</option>
        {selectDevice.map( plan => (<option key={plan.id} value={plan.id}>{plan.planName}</option>))}
      </select>
      {planSelect? <Coverage planSelect={planSelect} />: null}
    </div>
  );
}
 
export default Plans;