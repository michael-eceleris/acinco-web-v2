import React, { useState, useContext, useEffect } from "react";
import FormContext from "../context/form/formContext";
import clienteAxios from "../config/axios";

const MoreInfo = ({ setError, error }) => {
  const formContext = useContext(FormContext);
  const { documents, selectMoreInfo, nextStep, previusStep } = formContext;
  const [moreInfoLocal, setMoreInfoLocal] = useState({
    mensaje_ticket: "",
    linea_siniestro_one: "",
    fecha_siniestro: null,
    ciudad_siniestro: null,
    nombre_siniestro: null,
    genero_reclamante: null,
    nombre_genero: null,
  });

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
    setMoreInfoLocal({
      mensaje_ticket: messageActual,
      linea_siniestro_one: phoneNumber,
      fecha_siniestro: dateActual,
      ciudad_siniestro: cityActual,
      nombre_siniestro: cityNameActual,
      genero_reclamante: genderActual,
      nombre_genero: genderNameActual,
    });
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
      <label>Selecione su género</label>
      <br />
      <div className="form-label-group mb-3">
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
        {error && !genderActual ? (
          <p className="text-danger"> * Campo requerido</p>
        ) : errorGender ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <label>Selecione la ciudad </label>
      <br />
      <div className="form-label-group mb-3">
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
        {error && !cityActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorCity ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <label> Seleccionar fecha</label>
      <br />
      <div className="form-group">
        <input
          className="form-control"
          type="date"
          required
          max={actualDate}
          onChange={handleChangeDate}
        />
        {error && !dateActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorDate ? (
          <p className="text-danger">* Fecha incorrecta</p>
        ) : null}
      </div>
      <label>Número de telefono</label>
      <br />
      <div className="form-group">
        <input
          className="form-control"
          id="number"
          type="text"
          name="number"
          placeholder="Phone number"
          required
          onChange={handleChangeNumber}
          value={phoneNumber}
          pattern="[0-9]{0,10}"
        />
        {error && !phoneNumber ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorNumberPhone ? (
          <p className="text-danger">* Numero incorrecto</p>
        ) : null}
      </div>
      <label>Mensaje</label>
      <br />
      <div className="form-group">
        <textarea
          className="form-control"
          required
          placeholder="Mensaje"
          onChange={handleChangeMenssage}
          rows="3"
        ></textarea>
        {error && !messageActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorMessage ? (
          <p className="text-danger">
            * Accediste el número máximo de caracteres
          </p>
        ) : null}
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
