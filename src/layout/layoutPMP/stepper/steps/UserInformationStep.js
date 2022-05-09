import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useStepperComercio } from "../provider/step-provider";
import Dropdown from "../../../../components/Dropdown/Dropdown";

const UserInformationStep = () => {
  const { userInfo, documentTypes, genders, setCurrentStep, setUserInfo } =
    useStepperComercio();
  const [genderId, setGenderId] = useState(null);
  const [identificationType, setIdentificationType] = useState(null);
  const { register, errors, setValue, handleSubmit, setError, clearErrors } =
    useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        identificationType: "",
        identificationNumber: "",
        phone_number: "",
        gender: "",
      },
    });

  const onSubmit = (values) => {
    let data = {
      ...values,
      genderId,
      identificationType,
    };
    setUserInfo({
      ...userInfo,
      ...data,
    });
    setCurrentStep((prevState) => prevState + 1);
  };

  const handleChangeOptionsSelects = (e, key) => {
    if (key === "identificationType") {
      setIdentificationType(e);
      setValue(key, e.id_system);
    } else if (key === "gender") {
      setGenderId(e);
      setValue(key, e.name);
    }
  };

  useEffect(() => {
    if (!genderId && Object.entries(errors).length > 0) {
      setError("gender", {
        type: "required",
        message: "* Requerido",
      });
    } else {
      clearErrors("gender");
    }
    if (!identificationType && Object.entries(errors).length > 0) {
      setError("identificationType", {
        type: "required",
        message: "* Requerido",
      });
    } else {
      clearErrors("identificationType");
    }
    //eslint-disable-next-line
  }, [genderId, identificationType, errors]);

  return (
    <Fragment>
      <h4>Datos personales</h4>
      <p className='fs--17'>
        Diligencia cada uno de los campos con tus datos personales, para
        continuar con el proceso.
      </p>
      <p className='mb-1 text-justify mt-3 ml-1'>
        Nombre&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder='Nombre'
          id='firstName'
          name='firstName'
          type='text'
          className='form-control'
        />
      </div>
      {errors && errors.firstName && (
        <p className='text-danger'>{errors.firstName.message}</p>
      )}
      <p className='mb-1 text-justify mt-3 ml-1'>
        Apellido&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form mt-0'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder='Apellido'
          id='lastName'
          name='lastName'
          type='text'
          className='form-control'
        />
      </div>
      {errors && errors.lastName && (
        <p className='text-danger'>{errors.lastName.message}</p>
      )}
      <p className='mb-1 text-justify mt-3 ml-1'>
        Correo Electrónico&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form mt-0'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "* Correo electrónico inválido",
            },
          })}
          placeholder='Correo Electrónico'
          id='email'
          name='email'
          type='email'
          className='form-control'
        />
      </div>
      {errors && errors.email && (
        <p className='text-danger'>{errors.email.message}</p>
      )}
      <p className='mb-1 text-justify mt-3 ml-1'>
        Tipo de documento&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form mt-0'>
        <Dropdown
          refPropt={register({
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          options={documentTypes || []}
          prompt='Tipo de documento'
          id='identificationType'
          name='identificationType'
          label1='customName'
          onChange={(e) => handleChangeOptionsSelects(e, "identificationType")}
          value={identificationType}
          withoutLabel={true}
        />
        {errors && errors.identificationType && (
          <p className='text-danger'>{errors.identificationType.message}</p>
        )}
      </div>
      <p className='mb-1 text-justify mt-3 ml-1'>
        Número de identificación&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form mt-0'>
        <input
          ref={register({
            maxLength: {
              value: 13,
              message: "* Excediste la cantidad de números",
            },
            required: {
              value: true,
              message: "* Requerido",
            },
            minLength: {
              value: 5,
              message: "* Es muy corto el número",
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números",
            },
          })}
          placeholder='Número de identificación'
          id='identificationNumber'
          name='identificationNumber'
          type='text'
          className='form-control'
        />
      </div>
      {errors && errors.identificationNumber && (
        <p className='text-danger'>{errors.identificationNumber.message}</p>
      )}
      <p className='mb-1 text-justify mt-3 ml-1'>
        Número de celular&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form mt-0'>
        <input
          ref={register({
            maxLength: {
              value: 10,
              message: "* El número debe tener exactamente 10 digítos",
            },
            required: {
              value: true,
              message: "* Requerido",
            },
            minLength: {
              value: 10,
              message: "* El número debe tener exactamente 10 digítos",
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números",
            },
          })}
          placeholder='Número de celular'
          id='phone_number'
          name='phone_number'
          type='text'
          className='form-control'
        />
      </div>
      {errors && errors.phone_number && (
        <p className='text-danger'>{errors.phone_number.message}</p>
      )}
      <p className='mb-1 text-justify mt-3 ml-1'>
        Selecciona tu género&nbsp;
        <span className='fs--15 text-red-500 ml--2 '>*</span>
      </p>
      <div className='form-group mt-0'>
        <Dropdown
          refPropt={register({
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          options={genders || []}
          prompt='Selecciona tu género'
          id='gender'
          name='gender'
          label1='name'
          onChange={(e) => handleChangeOptionsSelects(e, "gender")}
          value={genderId}
          withoutLabel={true}
        />
        {errors && errors.gender && (
          <p className='text-danger'>{errors.gender.message}</p>
        )}
      </div>
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

export default UserInformationStep;
