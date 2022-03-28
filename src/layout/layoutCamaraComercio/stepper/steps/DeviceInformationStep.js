import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";
import axios from "axios";

import { useStepperComercio } from "../provider/step-provider";

const DeviceInformationStep = () => {
  const { userInfo, setCurrentStep, setUserInfo } = useStepperComercio();
  const [imei, setImei] = useState("");
  const [manufacter, setManufacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState("");
  const [value] = useDebounce(imei, 200);
  const { register, errors, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      imei: "",
      deviceName: "",
      deviceManufacter: "",
    },
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://apifalacambio.humc.co/check-imei/${imei}`
        );
        if (response.status === 200) {
          setManufacter(response.data.marca);
          setValue("deviceManufacter", response.data.marca);
          setValue("deviceName", response.data.device.name);
          setModel(response.data.device.name);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log("ero", error);
      }
    };
    if (getValues().imei !== "" && getValues().imei.length === 15) {
      fetchApi();
    }
    //eslint-disable-next-line
  }, [value]);

  const onSubmit = (values) => {
    setUserInfo({
      ...userInfo,
      ...values,
      deviceManufacter: manufacter,
      deviceName: model,
    });
    setCurrentStep((prevState) => prevState + 1);
  };

  const handleChange = (e) => {
    if (e.target.value.length === 15) {
      setImei(e.target.value);
    }
  };
  return (
    <Fragment>
      <h4>Datos del dispositivo</h4>
      <p className='fs--17'>
        En esta parte tienes que llenar el campo del imei, para consultar tu
        dispositivo y continuar con el proceso.
      </p>
      <div className='form-label-group'>
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
            maxLength: {
              value: 15,
              message: "* El imei debe tener exactamente 15 caracteres",
            },
            minLength: {
              value: 15,
              message: "* El imei debe tener exactamente 15 caracteres",
            },
          })}
          placeholder='Nombre'
          id='imei'
          name='imei'
          type='text'
          className='form-control'
          onChange={handleChange}
        />
        <label className='fontcustom'>Imei</label>
        <div>
          {isLoading ? (
            <i
              className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
              role='status'
              aria-hidden='true'
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
              }}
            ></i>
          ) : null}
        </div>
      </div>
      {errors && errors.imei && (
        <p className='text-danger'>{errors.imei.message}</p>
      )}
      <div className='form-label-group mt-3'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder='Nombre del dispositivo'
          id='deviceName'
          name='deviceName'
          type='text'
          className='form-control'
          disabled
        />
        <label className='fontcustom'>Nombre del dispositivo</label>
      </div>
      {errors && errors.deviceName && (
        <p className='text-danger'>{errors.deviceName.message}</p>
      )}
      <div className='form-label-group mt-3'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          placeholder='Marca del dispositivo'
          id='deviceManufacter'
          name='deviceManufacter'
          type='text'
          className='form-control'
          disabled
        />
        <label htmlFor='deviceManufacter'>Marca del dispositivo</label>
      </div>
      {errors && errors.deviceManufacter && (
        <p className='text-danger'>{errors.deviceManufacter.message}</p>
      )}
      <div className='mt-4 d-flex justify-content-between'>
        <button
          className={`btn btn-sm btn-outline-secondary `}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Atrás
        </button>
        <button
          className={`btn btn-sm btn-primary`}
          onClick={handleSubmit(onSubmit)}
        >
          Siguiente
        </button>
      </div>
    </Fragment>
  );
};

export default DeviceInformationStep;
