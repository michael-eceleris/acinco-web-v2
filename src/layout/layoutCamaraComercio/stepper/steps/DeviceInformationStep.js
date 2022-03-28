import React from 'react'
import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { useStepperComercio } from "../provider/step-provider";

const DeviceInformationStep = () => {
  const { setCurrentStep } = useStepperComercio();
  const { register, errors } = useForm();
  return ( 
    <Fragment>
      <h4>Datos del dispositivo</h4>
      <p className="fs--17">
        En esta parte tienes que llenar el campo del imei, para consultar tu dispositivo y continuar con el proceso.
      </p>
      <div className='form-label-group'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder="Nombre"
          id="imei"
          name="imei"
          type="text"
          className="form-control"
        />
        <label className='fontcustom'>
          Imei
        </label>
      </div>
      {errors && errors.imei && <p className="text-danger">{errors.imei.message}</p>}
      <div className='form-label-group mt-3'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder="Nombre del dispositivo"
          id="deviceName"
          name="deviceName"
          type="text"
          className="form-control"
        />
        <label className='fontcustom'>
          Nombre del dispositivo
        </label>
      </div>
      {errors && errors.deviceName && <p className="text-danger">{errors.deviceName.message}</p>}
      <div className="form-label-group mt-3">
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          placeholder="Marca del dispositivo"
          id="deviceModel"
          name="deviceModel"
          type="text"
          className="form-control"
          />
        <label htmlFor="deviceModel">Marca del dispositivo</label>
      </div>
      {errors && errors.deviceModel && <p className="text-danger">{errors.deviceModel.message}</p>}
      <div className='mt-4 d-flex justify-content-between'>
        <button
          className={`btn btn-sm btn-outline-secondary `}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Atrás
        </button>
        <button 
          className={`btn btn-sm btn-primary`} 
          onClick={() => setCurrentStep((prevState) => prevState + 1)}
        >
          Siguiente
        </button>
      </div>
    </Fragment>
   );
}
 
export default DeviceInformationStep;