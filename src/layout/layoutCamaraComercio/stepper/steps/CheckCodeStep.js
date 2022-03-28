import React from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { useStepperComercio } from "../provider/step-provider";

const CheckCodeStep = () => {
  const { setCurrentStep, setUserInfo } = useStepperComercio();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ( values ) => {
    setUserInfo({
      ...values
    })
    setCurrentStep((prevState) => prevState + 1);
  };

  return (
    <Fragment>
      <h4>Busca tu codigo</h4>
      <p className="fs--17">
        En esta parte tienes que escoger buscar tu codigo, para saber si es valido continuar con el proceso.
      </p>
      <div className='form-label-group'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido"
            },
            maxLength: 20
          })}
          id='code'
          name='code'
          type='text'
          placeholder='Codigo a buscar'
          className='form-control'
        />
        <label className='fontcustom'>
          Codigo a buscar
        </label>
      </div>
      {errors && errors.code && <p className="text-danger">{errors.code.message}</p>}
      <div className='form-label-group mt-2'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido"
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números"
            }
          })}
          id='nit'
          name='nit'
          type='text'
          placeholder='Nit'
          className='form-control'
        />
        <label className='fontcustom'>
          Nit
        </label>
      </div>
      {errors && errors.nit && <p className="text-danger">{errors.nit.message}</p>}
      <div className='mt-4 d-flex justify-content-end'>
        <button 
          className={`btn btn-sm btn-primary`} 
          onClick={handleSubmit(onSubmit)}
        >
          Siguiente
        </button>
      </div>
    </Fragment>
  )
}

export default CheckCodeStep;