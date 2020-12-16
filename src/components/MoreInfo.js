import React, { useState, useContext, useEffect } from "react";
import FormContext from "../context/form/formContext";
import clienteAxios from "../config/axios";

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
  const [errorLengthNumber, setErrorLengthNumber] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const date = new Date();
  let day = null;
  if (date.getDate() < 10) {
    day = 0;
  } else {
    day = "";
  }
  const actualDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${day}${date.getDate()}`;

  useEffect(() => {
    const getGenre = async () => {
      try {
        const response = await clienteAxios.get("/user/gender");
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
        const response = await clienteAxios.get("/shared/city");
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
  }, []);

  const handleChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber.length);
    if (phoneNumber.length >= 10 || phoneNumber.length === 0) {
      setErrorLengthNumber(true);
      setErrorNumberPhone(false);
    } else if (!e.target.validity.valid) {
      setErrorNumberPhone(true);
      setErrorLengthNumber(false);
    } else {
      setErrorNumberPhone(false);
      setErrorLengthNumber(false);
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
  const handleChangeGenre = (e) => {
    if (e.target.value !== "") {
      setGenderActual(e.target.value);
      setGenderNameActual(e.target.options[e.target.value].text);
      setErrorGender(false);
    } else {
      setErrorGender(true);
    }
  };
  const handleChangeCity = (e) => {
    if (e.target.value !== "") {
      setCityActual(e.target.value);
      setCityNameActual(e.target.options[e.target.value].text);
      setErrorCity(false);
    } else {
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
      nombre_genero: genderNameActual,
    });
    if (
      messageActual &&
      phoneNumber &&
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
          id: doc.id,
          nombre_documento_save: doc.nombre_documento_save,
          files: null,
          nameFile: null,
          error: null,
        })
    );
  };

  return (
    <>
      <div className="form-label-group mb-4">
        <select
          onChange={handleChangeGenre}
          id="gender"
          className="form-control bs-select"
        >
          <option value="">---Seleccione su género---</option>
          {gender
            ? gender.map((gen) => (
                <option key={gen.id} value={gen.id}>
                  {" "}
                  {gen.name}
                </option>
              ))
            : null}
        </select>
        <label>Selecione su género</label>
        {error && !genderActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorGender ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <div className="form-label-group mb-4">
        <select
          onChange={handleChangeCity}
          id="city"
          className="form-control bs-select"
        >
          <option value="">---Seleccione su ciudad---</option>
          {city
            ? city.map((cit) => (
                <option key={cit.id} value={cit.id}>
                  {" "}
                  {cit.nombre} - {cit.departamento.nombre}
                </option>
              ))
            : null}
        </select>
        <label>Selecione la ciudad en la que ocurrio el siniestro</label>
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
        />
        <label>Número de linea con la que sucedío el siniestro</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !phoneNumber ? (
            <p className="text-danger">* Campo requerido</p>
          ) : errorLengthNumber && !errorNumberPhone ? (
            <p className="text-danger">* Excediste la cantidad de números</p>
          ) : errorNumberPhone && !errorLengthNumber ? (
            <p className="text-danger">* Solo se permiten números</p>
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
