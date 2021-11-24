import "date-fns";
import React, { useState, useContext, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styled from "styled-components";

import FormContext from "../context/form/formContext";
import clienteAxios from "../config/axios";
import DropdownFilter from "./Dropdown/DropdownFilter";
import Dropdown from "./Dropdown/Dropdown";

const ButtonSubmit = styled.button`
  background-color: ${props => props.bgColor};
  color: #fff;
  :hover{
    filter: brightness(120%);
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  };
`;

const ButtonBack = styled.button`
  border-color: ${props => props.bgColor};
  color: ${props => props.bgColor};
  :hover{
    background-color: ${props => props.bgColor};
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  };
`;

const MoreInfo = ({ setError, error, colorPrimary, colorSecundary }) => {
  const formContext = useContext(FormContext);
  const { documents, selectMoreInfo, nextStep, previusStep } = formContext;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cityActual, setCityActual] = useState(null);
  const [cityNameActual, setCityNameActual] = useState(null);
  const [genderActual, setGenderActual] = useState(null);
  const [genderNameActual, setGenderNameActual] = useState(null);
  const [dateActual, setDateActual] = useState(null);
  const [messageActual, setMessageActual] = useState(null);
  const [gender, setGenre] = useState(null);
  const [city, setCity] = useState(null);
  const [errorGender, setErrorGender] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorNumberPhone, setErrorNumberPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const actualDate = new Date().toISOString();

  useEffect(() => {
    const getGenre = async () => {
      try {
        const response = await clienteAxios.get("/api/v1/user/gender");
        setGenre(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenre();
  }, []);

  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await clienteAxios.get("api/v1/shared/city");
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
  }, []);

  const handleChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (!e.target.validity.valid) {
      setErrorNumberPhone(true);
    } else {
      setErrorNumberPhone(false);
    }
  };
  const handleChangeMenssage = (e) => {
    setMessageActual(e.target.value);
    if (e.target.value.length > 350) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };
  const handleChangeGenre = (value) => {
    if (value) {
      setGenderActual(value.id);
      setGenderNameActual(value);
      setErrorGender(false);
    } else {
      setErrorGender(true);
    }
  };
  const handleChangeCity = (value) => {
    if (value !== null) {
      setCityActual(value.id);
      setCityNameActual(`${value.nombre} - ${value.departamento.nombre}`);
      setErrorCity(false);
    } else {
      setCityNameActual(null);
      setErrorCity(true);
    }
  };

  const handleChangeDate = (e) => {
    if (e === "Invalid Date" || e.toISOString() - 1 > actualDate) {
      setErrorDate(true);
    } else {
      let date = e.toISOString();
      setDateActual(date);
      setErrorDate(false);
    }
  };

  const handleNextStep = () => {
    if (
      messageActual &&
      phoneNumber &&
      phoneNumber.length === 10 &&
      dateActual &&
      cityActual &&
      cityNameActual &&
      genderActual &&
      genderNameActual
    ) {
      selectMoreInfo({
        mensaje_ticket: messageActual,
        linea_siniestro_one: phoneNumber,
        fecha_siniestro: dateActual.substring(0, 10),
        ciudad_siniestro: cityActual,
        nombre_siniestro: cityNameActual,
        genero_reclamante: genderActual,
        nombre_genero: genderNameActual.name,
      });
      nextStep(4);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handlePreviusStep = () => {
    previusStep(2);
    documents.map(
      (doc, index) =>
        (documents[index] = {
          id: parseInt(doc.id),
          nombre_documento_save: doc.nombre_documento_save,
          files: null,
          nameFile: null,
          error: null,
          required: doc.required,
        })
    );
  };

  return (
    <>
      <div className='form-group'>
        <Dropdown
          options={gender ? gender : []}
          prompt='Selecciona tu género'
          id='id'
          label1='name'
          onChange={(val) => handleChangeGenre(val)}
          value={genderNameActual}
        />
        {error && !genderActual ? (
          <p className='text-danger'>* Campo requerido</p>
        ) : errorGender ? (
          <p className='text-danger'>* Campo obligatorio</p>
        ) : null}
      </div>
      <div className='form-group mb-4'>
        <DropdownFilter
          options={city ? city : []}
          prompt='Selecciona la ciudad en la que ocurrió el siniestro.'
          id='id'
          label='nombre'
          value={cityNameActual}
          onChange={(val) => handleChangeCity(val)}
        />
        {error && !cityActual ? (
          <p className='text-danger'>* Campo requerido</p>
        ) : errorCity ? (
          <p className='text-danger'>* Campo obligatorio</p>
        ) : null}
      </div>
      <div className='form-group mb-4'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            clearable
            format='dd/MM/yyyy'
            className='form-control'
            label='Seleccionar fecha en la que ocurrió el siniestro'
            onChange={handleChangeDate}
            value={dateActual}
            maxDate={actualDate}
            placeholder='dd/mm/aaaa'
            style={{
              backgroundColor: "#fff",
              padding: "0.78rem 0 0.78rem 1rem",
              border: "1px solid #dde4ea",
            }}
          />
        </MuiPickersUtilsProvider>
        {error && !dateActual ? (
          <p className='text-danger'>* Campo requerido</p>
        ) : errorDate ? (
          <p className='text-danger'>* Fecha incorrecta</p>
        ) : null}
      </div>
      <div className='form-label-group'>
        <input
          className='form-control'
          id='number'
          type='text'
          name='number'
          required
          onChange={handleChangeNumber}
          value={phoneNumber}
          pattern='[0-9]{0,10}'
          placeholder='Número de línea con la que sucedió el siniestro'
        />
        <label className='fontcustom'>
          Número de línea con la que sucedió el siniestro
        </label>
      </div>
      <div className='mb-4 d-flex justify-content-between'>
        <div>
          {(error && !phoneNumber) ||
          (error && phoneNumber.length === 0) ||
          (error && phoneNumber.length !== 10) ? (
            <p className='text-danger'>* Campo requerido</p>
          ) : phoneNumber.length > 10 ? (
            <p className='text-danger'>* Excediste la cantidad de números</p>
          ) : errorNumberPhone ? (
            phoneNumber.length === 0 ? (
              <p className='text-danger'>* Campo requerido</p>
            ) : (
              <p className='text-danger'>* Solo se permiten números</p>
            )
          ) : null}
        </div>
        <div>
          <p className='text-left p-0 m-0'>{phoneNumber.length}/10</p>
        </div>
      </div>
      <div className='form-label-group'>
        <textarea
          className='form-control'
          required
          placeholder='Descripción del siniestro'
          onChange={handleChangeMenssage}
          rows='3'
        ></textarea>
        <label className='fontcustom'>Descripción del siniestro</label>
      </div>
      <div className='mb-4 d-flex justify-content-between'>
        <div>
          {error && !messageActual ? (
            <p className='text-danger'>* Campo requerido</p>
          ) : errorMessage ? (
            <p className='text-danger'>
              * Accediste el número máximo de caracteres
            </p>
          ) : null}
        </div>
        <div>
          <p className='text-left p-0 m-0'>
            {messageActual ? messageActual.length : 0}/350
          </p>
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-between'>
        <ButtonBack
          className={`btn btn-sm  ${colorSecundary ? "" : "btn-outline-secondary"} `}
          onClick={handlePreviusStep}
          bgColor={colorSecundary}
        >
          Atrás
        </ButtonBack>
        <ButtonSubmit 
          bgColor={colorPrimary}  
          className={`btn btn-sm ${colorPrimary ? "" : "btn-primary"}`} 
          onClick={handleNextStep}
        >
          Siguiente
        </ButtonSubmit>
      </div>
    </>
  );
};

export default MoreInfo;
