import React, { useState, useContext, useEffect } from "react";
import FormContext from "../context/form/formContext";
import clienteAxios from "../config/axios";
import DropdownFilter from "./Dropdown/DropdownFilter";
import Dropdown from "./Dropdown/Dropdown";

const MoreInfo = ({ setError, error }) => {
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
  const date = new Date();
  let day = null;
  let month = null;
  if (date.getDate() < 10) {
    day = 0;
  } else {
    day = "";
  }
  if (date.getMonth() + 1 < 10) {
    month = 0;
  } else {
    month = "";
  }
  const actualDate = `${date.getFullYear()}-${month}${
    date.getMonth() + 1
  }-${day}${date.getDate()}`;

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
    e.preventDefault();
    if (e.target.value > actualDate) {
      setErrorDate(true);
    } else {
      setDateActual(e.target.value);
      setErrorDate(false);
    }
  };

  const handleNextStep = () => {
    selectMoreInfo({
      mensaje_ticket: messageActual,
      linea_siniestro_one: phoneNumber,
      fecha_siniestro: dateActual,
      ciudad_siniestro: cityActual,
      nombre_siniestro: cityNameActual,
      genero_reclamante: genderActual,
      nombre_genero: genderNameActual.name,
    });
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
      <div className="form-group">
        <Dropdown
          options={gender ? gender : []}
          prompt="Selecciona tu género"
          id="id"
          label1="name"
          onChange={(val) => handleChangeGenre(val)}
          value={genderNameActual}
        />
        {console.log(genderNameActual)}
        {error && !genderActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorGender ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <div className="form-group mb-4">
        <DropdownFilter
          options={city ? city : []}
          prompt="Seleccione la ciudad en la que ocurrio el siniestro."
          id="id"
          label="nombre"
          value={cityNameActual}
          onChange={(val) => handleChangeCity(val)}
        />
        {error && !cityActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorCity ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <div className="form-label-group mb-4">
        <input
          className="form-control"
          type="date"
          required
          max={actualDate}
          onChange={handleChangeDate}
          placeholder="Seleccionar fecha en la que ocurrio el siniestro"
        />
        <label> Seleccionar fecha en la que ocurrio el siniestro</label>
        {error && !dateActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorDate ? (
          <p className="text-danger">* Fecha incorrecta</p>
        ) : null}
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          id="number"
          type="text"
          name="number"
          required
          onChange={handleChangeNumber}
          value={phoneNumber}
          pattern="[0-9]{0,10}"
          placeholder="Número de linea con la que sucedío el siniestro"
        />
        <label>Número de linea con la que sucedío el siniestro</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {(error && !phoneNumber) ||
          (error && phoneNumber.length === 0) ||
          (error && phoneNumber.length !== 10) ? (
            <p className="text-danger">* Campo requerido</p>
          ) : phoneNumber.length > 10 ? (
            <p className="text-danger">* Excediste la cantidad de números</p>
          ) : errorNumberPhone ? (
            phoneNumber.length === 0 ? (
              <p className="text-danger">* Campo requerido</p>
            ) : (
              <p className="text-danger">* Solo se permiten números</p>
            )
          ) : null}
        </div>
        <div>
          <p className="text-left p-0 m-0">{phoneNumber.length}/10</p>
        </div>
      </div>
      <div className="form-label-group">
        <textarea
          className="form-control"
          required
          placeholder="Descripcion del siniestro"
          onChange={handleChangeMenssage}
          rows="3"
        ></textarea>
        <label>Descripcion del siniestro</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !messageActual ? (
            <p className="text-danger">* Campo requerido</p>
          ) : errorMessage ? (
            <p className="text-danger">
              * Accediste el número máximo de caracteres
            </p>
          ) : null}
        </div>
        <div>
          <p className="text-left p-0 m-0">
            {messageActual ? messageActual.length : 0}/350
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handlePreviusStep}
        >
          Atras
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleNextStep}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default MoreInfo;
