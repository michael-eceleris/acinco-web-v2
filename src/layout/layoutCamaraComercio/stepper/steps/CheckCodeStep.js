import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import microServiceAxios from "../config/axios";
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
  const { setCurrentStep, setUserInfo, setInterceptors } = useStepperComercio();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    setIsLoading((prevState) => !prevState);
    microServiceAxios
      .post("/api/v1/promotion-code", values)
      .then((res) => {
        if (res) {
          setInterceptors(res.data.data);
          setUserInfo({
            ...values,
          });
          setIsLoading((prevState) => !prevState);
          setCurrentStep((prevState) => prevState + 1);
        }
      })
      .catch((err) => {
        setError((prevState) => !prevState);
        setIsLoading((prevState) => !prevState);
      });
  };

  return (
    <Fragment>
      {error && (
        <div className='alert alert-danger'>
          <button
            onClick={() => {
              setError((prevState) => !prevState);
            }}
            className='position-absolute right-0 top-0 btn btn-sm btn-icon'
          >
            <i className='fi fi-close '></i>
          </button>
          <p>Código o nit incorrecto.</p>
          <p className='mb-0'>
            Si el problema continúa comunícate en Bogotá 601 4898599, para el
            resto de Colombia 01 8000 513 323 o WhatsApp +57 1 5142355
          </p>
        </div>
      )}
      <h4>Registra tu dispositivo</h4>
      <p className='fs--17'>
        Registra tu dispositivo ingresando tu código y tu número de NIT.
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
          id='promotionCode'
          name='promotionCode'
          type='text'
          placeholder='Digita tu código'
          className='form-control'
        />
        <label className='fontcustom'>Digita tu código</label>
      </div>
      {errors && errors.promotionCode && (
        <p className='text-danger'>{errors.promotionCode.message}</p>
      )}
      <div className='form-label-group mt-2'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números",
            },
          })}
          id='clientIdentification'
          name='clientIdentification'
          type='text'
          placeholder='Digita tu Nit'
          className='form-control'
        />
        <label className='fontcustom'>Digita tu Nit</label>
      </div>
      {errors && errors.clientIdentification && (
        <p className='text-danger'>{errors.clientIdentification.message}</p>
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
