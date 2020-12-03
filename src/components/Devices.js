import React, {useState, useContext, useEffect, Fragment } from 'react';
import Plans from './Plans';
import AuthContext from '../context/auth/authContext';
import FormContext from '../context/form/formContext';

const Devices = () => {
  const authContext = useContext(AuthContext); 
  const { user, authUser } = authContext;   
  const formContext = useContext(FormContext);
  const { devicesUser, selectDevice, submitForm, getPlans} = formContext;
  const [deviceSelect, setDeviceSelect] = useState(null);


  const onChange = e => {
    selectDevice(e.target.value);
    setDeviceSelect({
      ...deviceSelect,
      [e.target.name] : e.target.value
    });
    getPlans(e.target.value);
  }
  return (
    <Fragment>
      {devicesUser ? devicesUser.map(device => (<option key={device.id} value={device.id} >{device.dispositivo.nombre}</option>)) : null }
      {/* <form onSubmit={(e) => submitForm(e,user.id)}> */}
    </Fragment>
   );
}
 
export default Devices;