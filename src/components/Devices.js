import React, {useState, useEffect} from 'react';
import devices from '../data/devices.json';
import Plans from './Plans';
const Devices = ({userId}) => {
  const [deviceSelect, setDeviceSelect] = useState(null);
  const devicesUser = devices.filter(device => device.userId === userId); 
  const onChange = e => {
    setDeviceSelect({
      ...deviceSelect,
      [e.target.name] : e.target.value
    })
  }
  return ( 
    <div>
      <select name="devices" onChange={onChange}>
        <option>---Seleccione un dispositivo---</option>
        {devicesUser.map(device => (<option key={device.id} value={device.id} >{device.deviceName}</option>))}
      </select>
      {deviceSelect ? <Plans deviceId={deviceSelect.devices}/>: null}
    </div>
   );
}
 
export default Devices;