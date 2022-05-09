import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useStepperComercio } from "../provider/step-provider";

const ButtonSubmit = styled.button`
  color: #fff;
  :hover {
    filter: brightness(120%);
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CheckCodeStep = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentStep } = useStepperComercio();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    let data = {};
    Object.entries(values).forEach((d) => {
      data = {
        ...data,
        [d[0]]: d[1].trim(),
      };
    });
    setIsLoading((prevState) => !prevState);
    setCurrentStep((prevState) => prevState + 1);
    /* microServiceAxios
      .post("/api/v1/promotion-code", data)
      .then((res) => {
        if (res) {
          setInterceptors(res.data.data);
          setUserInfo({
            ...values,
          });
          setIsLoading((prevState) => !prevState);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          if (err.response.data.error.message === "Code already used") {
            setError({
              message: "Este código ya se encuentra en uso",
            });
          } else {
            setError({
              message: "Código o nit incorrecto",
            });
          }
        } else if (err.response.status === 404) {
          setError({
            message: "Código o nit incorrecto",
          });
        } else {
          setError({
            message: "Lo sentimos, ocurrió un problema",
          });
        }
        setIsLoading((prevState) => !prevState);
      }); */
  };

  return (
    <Fragment>
      {error && !isLoading && (
        <div className='alert alert-danger'>
          <button
            onClick={() => {
              setError((prevState) => !prevState);
            }}
            className='position-absolute right-0 top-0 btn btn-sm btn-icon'
          >
            <i className='fi fi-close '></i>
          </button>
          <p>{error.message}.</p>
          <p className='mb-0 fs--15'>
            Si el problema continúa comunícate en Bogotá 601 4898599, para el
            resto de Colombia 01 8000 513 323 o WhatsApp +57 1 5142355
          </p>
        </div>
      )}
      <h4>Registra tu dispositivo</h4>
      <p className='fs--17'>
        Registra tu dispositivo ingresando el código que tienes en la tarjeta.
      </p>
      <div className='form-label-group'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 20,
          })}
          id='codePMP'
          name='codePMP'
          type='text'
          placeholder='Digita tu código'
          className='form-control'
        />
        <label className='fontcustom'>Digita tu código</label>
      </div>
      {errors && errors.codePMP && (
        <p className='text-danger'>{errors.codePMP.message}</p>
      )}
      <div className='mt-4 d-flex justify-content-end'>
        <ButtonSubmit
          className={`btn btn-sm btn-primary`}
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          Siguiente
          {isLoading && (
            <i
              className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
              role='status'
              aria-hidden='true'
            ></i>
          )}
        </ButtonSubmit>
      </div>
    </Fragment>
  );
};

export default CheckCodeStep;
