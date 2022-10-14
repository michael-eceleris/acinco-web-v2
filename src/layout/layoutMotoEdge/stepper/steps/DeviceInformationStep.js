import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import microServiceAxios from "../config/axios";
import { useStepperComercio } from "../provider/step-provider";

const DeviceInformationStep = () => {
  const { userInfo, interceptors, setCurrentStep, setUserInfo, setPolicy } =
    useStepperComercio();
  const [manufacter, setManufacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorLocal, setErrorLocal] = useState(false);
  const [model, setModel] = useState("");
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      imei: userInfo.promotionCode,
      deviceName: "",
      deviceManufacter: "",
    },
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await microServiceAxios.get(
          `/api/v1/policy/imei/${userInfo.promotionCode}?sponsorId=MOTOCARE`,
          {
            headers: {
              Authorization: `${interceptors.type} ${interceptors.token}`,
            },
          }
        );
        if (response.status === 200) {
          setManufacter(response.data.data.brand);
          setValue("deviceManufacter", response.data.data.brand);
          setValue("deviceName", response.data.data.key);
          setModel(response.data.data.key);
          setPolicy(response.data.data);
          setIsLoading(false);
          setErrorLocal(false);
        }
      } catch (error) {
        if (error.response.status === 400) {
          setErrorLocal({
            message: error.response.data.error.message,
          });
        } else {
          setErrorLocal({ message: "IMEI incorrecto" });
        }
        setIsLoading(false);
      }
    };
    fetchApi();
    //eslint-disable-next-line
  }, []);

  const onSubmit = (values) => {
    setUserInfo({
      ...userInfo,
      ...values,
      deviceManufacter: manufacter,
      deviceName: model,
    });
    setCurrentStep((prevState) => prevState + 1);
  };

  return (
    <Fragment>
      {errorLocal && !isLoading && (
        <div className='alert alert-danger'>
          <button
            onClick={() => {
              setErrorLocal((prevState) => !prevState);
            }}
            className='position-absolute right-0 top-0 btn btn-sm btn-icon'
          >
            <i className='fi fi-close '></i>
          </button>
          <p>{errorLocal.message.split(",")[0]}.</p>
          <p className='mb-0 fs--15'>
            Si el problema continúa comunícate en Bogotá 601 4898599, para el
            resto de Colombia 01 8000 513 323 o WhatsApp +57 1 5142355.
          </p>
        </div>
      )}
      <h4>Datos del dispositivo</h4>
      <p className='fs--17'>
        Digita el número de IMEI del dispositivo a proteger, lo puedes obtener
        marcando *#06# desde tu celular.
      </p>
      <div className='form-label-group'>
        <input
          ref={register({
            required: {
              value: false,
              message: "* Requerido",
            },
            pattern: {
              value: /^\d+$/,
              message: "* Solo se aceptan números",
            },
            maxLength: {
              value: 15,
              message: "* El imei debe tener exactamente 15 digítos",
            },
            minLength: {
              value: 15,
              message: "* El imei debe tener exactamente 15 digítos",
            },
          })}
          placeholder='Nombre'
          id='imei'
          name='imei'
          type='text'
          className='form-control'
          disabled
        />
        <label className='fontcustom'>IMEI</label>
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
              value: false,
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
              value: false,
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
          disabled={errorLocal}
        >
          Siguiente
        </button>
      </div>
    </Fragment>
  );
};

export default DeviceInformationStep;
