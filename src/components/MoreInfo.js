import React, { useState, useContext, Fragment, useEffect, Children } from 'react';
import FormContext from '../context/form/formContext';
import clienteAxios from '../config/axios';

const MoreInfo = () => {
  const formContext = useContext(FormContext);
  const { selectMoreInfo } = formContext;
  const [ moreInfo, setMoreInfo ] = useState({
    mensaje_ticket: '',
    linea_siniestro_one:'',
    fecha_siniestro: null,
    ciudad_siniestro : null,
    nombre_siniestro: null,
    genero_reclamante: null,
    nombre_genero: null,
  })
  const [ phoneNumber, setPhoneNumber] = useState('');
  const [ gender, setGenre] = useState(null);
  const [ city, setCity ] = useState(null);
  const [error, setError] = useState(null);
  const [error2, setError2 ] = useState(false);
  const date = new Date();
  let day = null;
  if(date.getDate() < 10 ){
    day = 0;
  }else {
    day = '';
  };
  const actualDate = `${date.getFullYear()}-${date.getMonth()}-${day}${date.getDate()}`
  useEffect(()=> {
    const getGenre = async () => {
      try {
        const response = await clienteAxios.get('/user/gender');
        setGenre(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getGenre();
  },[])
  useEffect(()=> {
     const getCity = async () => {
      try {
        const response = await clienteAxios.get('/shared/city');
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
  },[])
  const handleChangeNumber = e => {
    if(phoneNumber.length < 8  || phoneNumber.length > 11) {
      setError(true)
    }else {
      setError(false)
    };
    setPhoneNumber(e.target.value);
    setMoreInfo({
      ...moreInfo,
      linea_siniestro_one: phoneNumber
    })
  }
  const handleChangeMenssage = e => {
    setMoreInfo({
      ...moreInfo,
      mensaje_ticket: e.target.value
    })
    selectMoreInfo(moreInfo);
  }
  const handleChangeGenre = e => {
    if(e){
      e.preventDefault();
      setMoreInfo({
        ...moreInfo,
        genero_reclamante: e.target.value,
        nombre_genero: e.target.options[e.target.value].text
      })
      setError2(false);
    }else{
      setError2(true);
    }
  }
  const handleChangeCity = e => {
    e.preventDefault();
    setMoreInfo({
      ...moreInfo,
      ciudad_siniestro: e.target.value,
      nombre_siniestro: e.target.options[e.target.value].text
    })
  }

  const handleChangeDate = e => {
    e.preventDefault()
    setMoreInfo({
      ...moreInfo,
      fecha_siniestro: e.target.value,
    })
  }

  return ( 
    <Fragment>
      <label>Selecione su género</label><br/>
      <div className="Campo-form">
        <select onChange={handleChangeGenre} id="gender">
          <option>---Seleccione su género---</option>
          { gender ? gender.map( gen => ( <option key={gen.id} value={gen.id}> {gen.name}</option>)): null}
        </select>
      </div>
      <label>Selecione la ciudad </label><br/>
      <div className="Campo-form">
        <select onChange={handleChangeCity} id="city">
          <option>---Seleccione su ciudad---</option>
          {city ? city.map( cit => ( <option key={cit.id} value={cit.id}> {cit.nombre} - { cit.departamento.nombre}</option>)) : null }
        </select>
      </div>
      <label> Seleccionar fecha</label><br/>
      <div className="Campo-form">
        <input 
          type="date"
          required
          max={actualDate}
          onChange={handleChangeDate}
        />
      </div>
      <label>Número de telefono</label><br/>
      <div className="Campo-form">
        <input 
          id="number"
          type="text"
          name="number"
          placeholder="Phone number"
          required
          onChange={handleChangeNumber}
          value={phoneNumber}
        />
      </div>
      <label>Mensaje</label><br/>
      <div className="Campo-form">
        <textarea
          required
          placeholder="Mensaje"
          onChange={handleChangeMenssage}
          rows="3"
        >
        </textarea>
      </div>
    </Fragment>
   );
}
 
export default MoreInfo;