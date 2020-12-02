import React, {useState, useContext } from 'react';
import devices from '../data/devices.json';
import Plans from './Plans';
import AuthContext from '../context/auth/authContext';
import FormContext from '../context/form/formContext';

const Devices = () => {
  const authContext = useContext(AuthContext); 
  const { user} = authContext;   
  const formContext = useContext(FormContext);
  const { selectDevice, submitForm } = formContext;
  const [deviceSelect, setDeviceSelect] = useState(null);
  const devicesUser = devices.filter(device => device.userId === user.id); 
  const onChange = e => {
    selectDevice(e.target.value);
    setDeviceSelect({
      ...deviceSelect,
      [e.target.name] : e.target.value
    })
  }
  return ( 
    <div>
      <form onSubmit={(e) => submitForm(e,user.id)}>
        <select name="devices" onChange={onChange}>
          <option>---Seleccione un dispositivo---</option>
          {devicesUser.map(device => (<option key={device.id} value={device.id} >{device.deviceName}</option>))}
        </select>
        {deviceSelect ? <Plans />: null}
      </form>
    </div>
   );
}
 
export default Devices;