import "date-fns";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import styled from "styled-components";

import DropdownFilter from "../../../../components/Dropdown/DropdownFilter";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useStepperClaimsSamsung } from "../provider/step-provider";

const ButtonSubmit = styled.button`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  :hover {
    filter: brightness(120%);
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const ButtonBack = styled.button`
  border-color: ${(props) => props.bgColor};
  color: ${(props) => props.bgColor};
  :hover {
    background-color: ${(props) => props.bgColor};
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderColor: "transparent !important",
    "& fieldset": {
      borderColor: "transparent",
      marginLeft: "-10px",
    },
    "& fieldset:focus-visible": {
      borderColor: "transparent !important",
      marginLeft: "-10px",
      left: "auto",
    },
  },
  "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ": {
    transform: "translate(14px, 2px) scale(0.75)",
  },
  "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent !important",
    },
  },
  "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
    transform: "translate(14px, 2px) scale(0.75)",
  },
});

const CustomH4 = styled.h4`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const MoreInfoStep = ({
  setError,
  error,
  colorPrimary,
  colorSecundary,
  allUppercase,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [secondImei, setSecondImei] = useState("");
  const [cityActual, setCityActual] = useState(null);
  const [cityNameActual, setCityNameActual] = useState(null);
  const [genderActual, setGenderActual] = useState(null);
  const [genderNameActual, setGenderNameActual] = useState(null);
  const [dateActual, setDateActual] = useState(null);
  const [hourActual, setHourActual] = useState(null);
  const [messageActual, setMessageActual] = useState(null);
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryClaim, setCountryClaim] = useState(null);
  const [errorGender, setErrorGender] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorHour, setErrorHour] = useState(false);
  const [errorNumberPhone, setErrorNumberPhone] = useState(false);
  const [errorNumberSecondImei, setErrorNumberSecondImei] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    cities,
    genders,
    setCurrentStep,
    setCurrentDocuments,
    setCurrentMoreInfo,
    createClaimsFormat,
  } = useStepperClaimsSamsung();
  const actualDate = new Date().toISOString();

  const handleChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (!e.target.validity.valid) {
      setErrorNumberPhone(true);
    } else {
      setErrorNumberPhone(false);
    }
  };
  const handleChangeSecondIme = (e) => {
    setSecondImei(e.target.value);
    if (!e.target.validity.valid) {
      setErrorNumberSecondImei(true);
    } else {
      setErrorNumberSecondImei(false);
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
  const handleChangeHour = (value) => {
    console.log(new Date(value.toISOString()).toLocaleTimeString());
    if (value === null) {
      setErrorHour(true);
    } else {
      setHourActual(value.toISOString());
      setErrorHour(false);
    }
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeCountryClaim = (e) => {
    setCountryClaim(e.target.value);
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
      genderNameActual &&
      country &&
      hourActual &&
      address &&
      secondImei &&
      secondImei.length === 15 &&
      hourActual &&
      countryClaim
    ) {
      setCurrentMoreInfo({
        mensaje_ticket: messageActual,
        linea_siniestro_one: phoneNumber,
        fecha_siniestro: dateActual.substring(0, 10),
        ciudad_siniestro: cityActual,
        nombre_siniestro: cityNameActual,
        genero_reclamante: genderActual,
        nombre_genero: genderNameActual.name,
        ciudad_residencia: country,
        direccion_residencia: address,
        hora_siniestro: hourActual,
        second_imei: secondImei,
        pais_siniestro: countryClaim,
      });
      createClaimsFormat();
      setCurrentStep(4);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handlePreviusStep = () => {
    setCurrentStep(2);
    setCurrentDocuments(null);
  };

  return (
    <div className="container py-1">
      <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>
        Información adicional
      </CustomH4>
      <p className="fs--17">
        Llena los siguentes campos para detallar más lo ocurrido
      </p>
      <div className="form-group">
        <Dropdown
          options={genders ? genders : []}
          prompt="Selecciona tu género"
          id="id"
          label1="name"
          onChange={(val) => handleChangeGenre(val)}
          value={genderNameActual}
        />
        {error && !genderActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorGender ? (
          <p className="text-danger">* Campo obligatorio</p>
        ) : null}
      </div>
      <div className="form-group mb-4">
        <DropdownFilter
          options={cities ? cities : []}
          prompt="Selecciona la ciudad en la que ocurrió el evento."
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
      <div className="form-group mb-4">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            format="dd/MM/yyyy"
            onChange={handleChangeDate}
            value={dateActual}
            maxDate={actualDate}
            renderInput={(props) => (
              <CssTextField
                {...props}
                fullWidth
                label="Seleccionar fecha en la que ocurrió el evento"
                placeholder="dd/mm/aaaa"
                className="form-control"
                style={{
                  backgroundColor: "#fff",
                  padding: "0.78rem 0 0.78rem 1rem",
                  border: "1px solid #dde4ea",
                }}
              />
            )}
          />
        </LocalizationProvider>
        {error && !dateActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorDate ? (
          <p className="text-danger">* Fecha incorrecta</p>
        ) : null}
      </div>
      <div className="form-group mb-4">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileTimePicker
            value={hourActual}
            onChange={handleChangeHour}
            renderInput={(props) => (
              <CssTextField
                {...props}
                fullWidth
                label="Seleccionar hora en la que ocurrió el evento"
                placeholder="HH:mm:ss"
                className="form-control"
                style={{
                  backgroundColor: "#fff",
                  padding: "0.78rem 0 0.78rem 1rem",
                  border: "1px solid #dde4ea",
                }}
              />
            )}
          />
        </LocalizationProvider>
        {error && !hourActual ? (
          <p className="text-danger">* Campo requerido</p>
        ) : errorHour ? (
          <p className="text-danger">* Hora incorrecta</p>
        ) : null}
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          id="address"
          type="text"
          name="address"
          required
          onChange={handleChangeAddress}
          value={address}
          placeholder="Dirección de residencia"
        />
        <label className="fontcustom">Dirección de residencia</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !address ? (
            <p className="text-danger">* Campo requerido</p>
          ) : null}
        </div>
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          id="address"
          type="text"
          name="address"
          required
          onChange={handleChangeCountry}
          value={country}
          placeholder="Ciudad de residencia"
        />
        <label className="fontcustom">Ciudad de residencia</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !country ? (
            <p className="text-danger">* Campo requerido</p>
          ) : null}
        </div>
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          id="address"
          type="text"
          name="address"
          required
          onChange={handleChangeCountryClaim}
          value={countryClaim}
          placeholder="País donde ocurrió el evento"
        />
        <label className="fontcustom">País donde ocurrió el evento</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !countryClaim ? (
            <p className="text-danger">* Campo requerido</p>
          ) : null}
        </div>
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          id="number"
          type="text"
          name="number"
          required
          onChange={handleChangeSecondIme}
          value={secondImei}
          pattern="[0-9]{0,15}"
          placeholder="Número del imei secundario"
        />
        <label className="fontcustom">Número del imei secundario</label>
      </div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          {(error && !secondImei) ||
          (error && secondImei.length === 0) ||
          (error && secondImei.length !== 15) ? (
            <p className="text-danger">* Campo requerido</p>
          ) : secondImei.length > 15 ? (
            <p className="text-danger">* Excediste la cantidad de números</p>
          ) : errorNumberSecondImei ? (
            secondImei.length === 0 ? (
              <p className="text-danger">* Campo requerido</p>
            ) : (
              <p className="text-danger">* Solo se permiten números</p>
            )
          ) : null}
        </div>
        <div>
          <p className="text-left p-0 m-0">{secondImei.length}/15</p>
        </div>
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
          placeholder="Número de línea con la que sucedió el evento"
        />
        <label className="fontcustom">
          Número de línea con la que sucedió el evento
        </label>
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
          placeholder="Descripción del evento"
          onChange={handleChangeMenssage}
          rows="3"
        ></textarea>
        <label className="fontcustom">Descripción del evento</label>
      </div>

      <div className="mb-4 d-flex justify-content-between">
        <div>
          {error && !messageActual ? (
            <p className="text-danger">* Campo requerido</p>
          ) : errorMessage ? (
            <p className="text-danger">
              * Excediste el número máximo de caracteres
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
        <ButtonBack
          className={`btn btn-sm  ${
            colorSecundary ? "" : "btn-outline-secondary"
          } `}
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
    </div>
  );
};

export default MoreInfoStep;
