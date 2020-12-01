import React,{useEffect, useState} from 'react';

const MoreInfo = () => {
  const [ phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  /* useEffect(()=> {
    if(phoneNumber.length < 8  || phoneNumber.length > 11) {
      setError(true)
    }else {
      setError(false)
    }
  },[phoneNumber]) */
  console.log(phoneNumber.length)
  console.log(error)
  const handleChange = e => {
    e.preventDefault()
    if(phoneNumber.length < 7  || phoneNumber.length > 10) {
      setError(true)
    }else {
      setError(false)
    }
    setPhoneNumber(e.target.value)
  }
  return ( 
    <div className="Container-form">
      <form>
        <div className="Campo-form">
          <label> Seleccionar fecha</label>
          <input 
            type="date"
          />
        </div>
        <div className="Campo-form">
          <label>Número de telefono</label>
          <input 
            id="number"
            type="number"
            name="number"
            placeholder="Phone number"
            required={true}
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
          />
        </div>
      </form>
    </div>
   );
}
 
export default MoreInfo;