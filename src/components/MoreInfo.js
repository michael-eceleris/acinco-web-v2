import React, { useState, useContext } from 'react';
import FormContext from '../context/form/formContext';

const MoreInfo = () => {
  const formContext = useContext(FormContext);
  const { selectMoreInfo } = formContext;
  const [ phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const handleChange = e => {
    e.preventDefault()
    if(phoneNumber.length < 7  || phoneNumber.length > 10) {
      setError(true)
    }else {
      setError(false)
    }
    setPhoneNumber(e.target.value)
    selectMoreInfo(phoneNumber)
  }
  return ( 
    <div className="Container-form">
        <div className="Campo-form">
          <label> Seleccionar fecha</label>
          <input 
            type="date"
            required
          />
        </div>
        <div className="Campo-form">
          <label>Número de telefono</label>
          <input 
            id="number"
            type="number"
            name="number"
            placeholder="Phone number"
            required
            onChange={handleChange}
            value={phoneNumber}
          />
          {error ? <p>hay un error</p> : null}
        </div>
        <div className="Campo-form">
          <label>Otra info</label>
          <input 
            type="text"
            placeholder="otra"
            required
          />
        </div>
        <div className="Campo-form">
          <input 
            type="submit"
            className= "btn btn-primario btn-block"
            value="SUBMIT"
          />
        </div>
    </div>
   );
}
 
export default MoreInfo;