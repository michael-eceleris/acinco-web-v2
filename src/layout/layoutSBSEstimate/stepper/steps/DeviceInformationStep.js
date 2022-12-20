import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";

import microServiceAxios from "../config/axios";
import { useStepperComercio } from "../provider/step-provider";

const DeviceInformationStep = () => {
  const { userInfo, interceptors, setCurrentStep, setUserInfo, setPolicy } =
    useStepperComercio();
  const [imei, setImei] = useState("");
  const [manufacter, setManufacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorLocal, setErrorLocal] = useState(false);
  const [model, setModel] = useState("");
  const [value] = useDebounce(imei, 200);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm({
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
        const response = await microServiceAxios.get(
          `/api/v1/policy/imei/${imei}?sponsorId=ITAU`,
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
      } catch (err) {
        if (err.response.status === 400) {
          if (err.response.data.error.message === "Code already used") {
            setErrorLocal({
              message: "Este IMEI ya se encuentra registrado",
            });
          }
        } else if (err.response.status === 404) {
          setErrorLocal({
            message: "IMEI incorrecto",
          });
        } else {
          setErrorLocal({
            message: "Lo sentimos, ocurrió un problema",
          });
        }
        setValue("deviceManufacter", "");
        setValue("deviceName", "");
        setIsLoading(false);
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
      setValue("imei", e.target.value);
      clearErrors("imei");
    } else {
      setError(
        "imei",
        {
          types: ["maxLength", "minLength"],
          message: "* El IMEI debe tener exactamente 15 digítos",
        },
        {}
      );
    }
    setErrorLocal(false);
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
          {...register("imei", {
            required: {
              value: true,
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
          placeholder='IMEI'
          id='imei'
          name='imei'
          type='text'
          className='form-control'
          onChange={handleChange}
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
          {...register("deviceName", {
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
          {...register("deviceManufacter", {
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
      <div className='mt-4 d-flex justify-content-between flex-column-reverse'>
        <button
          className={`btn btn-sm btn-primary`}
          style={{ backgroundColor: "#9E1C64", borderColor: "#9E1C64" }}
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
