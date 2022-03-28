import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useStepperComercio } from "../provider/step-provider";
import Dropdown from "../../../../components/Dropdown/Dropdown";

const UserInformationStep = () => {
  const { userInfo, documentTypes, genders, setCurrentStep, setUserInfo } = useStepperComercio();
  const [ genderId, setGenderId ] = useState(null);
  const [ identificationType, setIdentificationType ] = useState(null);
  const { register, errors, setValue, handleSubmit, setError, clearErrors } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      identificationType: "",
      identificationNumber: "",
      phone_number: "",
      gender: "",
    }
  });

  const onSubmit = (values) => {
    let data = {
      ...values,
      genderId,
      identificationType,
    }
    setUserInfo({
      ...userInfo,
      ...data,
    })
    setCurrentStep((prevState) => prevState + 1)
  }

  const handleChangeOptionsSelects = (e, key) => {
    if(key === "identificationType"){
      setIdentificationType(e);
      setValue(key, e.id_system);
    }else if( key === "gender"){
      setGenderId(e);
      setValue(key, e.name)
    }
  }

  useEffect(() => {
    if(!genderId && Object.entries(errors).length > 0) {
      setError("gender", {
        type: "required",
        message: "* Requerido"
      });
    }else{
      clearErrors("gender")
    }
    if(!identificationType && Object.entries(errors).length > 0){
      setError("identificationType",  {
        type: "required",
        message: "* Requerido"
      });
    }else{
      clearErrors("identificationType")
    }
    //eslint-disable-next-line
  },[genderId, identificationType, errors])

  return (
    <Fragment>
      <h4>Datos personales</h4>
      <p className="fs--17">
        En esta parte tienes que llenar los campos con tus datos personales, para continuar con el proceso.
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
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
        />
        <label className='fontcustom'>
          Nombre
        </label>
      </div>
      {errors && errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
      <div className='form-label-group mt-3'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
            maxLength: 50,
          })}
          placeholder="Apellido"
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
        />
        <label className='fontcustom'>
          Apellido
        </label>
      </div>
      {errors && errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
      <div className="form-label-group mt-3">
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
          placeholder="Correo Electrónico"
          id="email"
          name="email"
          type="email"
          className="form-control"
          />
        <label htmlFor="email">Correo Electrónico</label>
      </div>
      {errors && errors.email && <p className="text-danger">{errors.email.message}</p>}
      <div className='form-group mt-3'>
        <Dropdown
          refPropt={register({
            required: {
              value: true,
              message: "* Requerido"
            }
          })}
          options={documentTypes || []}
          prompt='Tipo de documento'
          id='identificationType'
          name="identificationType"
          label1='id_system'
          onChange={(e) => handleChangeOptionsSelects(e, "identificationType")}
          value={identificationType}
        />
        {errors && errors.identificationType && <p className="text-danger">{errors.identificationType.message}</p>}
      </div>
      <div className="form-label-group mt-3">
        <input
          ref={register({
            maxLength: {
              value: 10,
              message: "* Excediste la cantidad de números",
            },
            required: {
              value: true,
              message: "* Requerido",
            },
            minLength: {
              value: 7,
              message: "* Es muy corto el número",
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números"
            }
          })}
          placeholder="Número de identificacion"
          id="identificationNumber"
          name="identificationNumber"
          type="text"
          className="form-control"
        />
        <label htmlFor="identificationNumber">Número de identificacion</label>
      </div>
      {errors && errors.identificationNumber && <p className="text-danger">{errors.identificationNumber.message}</p>}
      <div className="form-label-group mt-3">
        <input
          ref={register({
            maxLength: {
              value: 10,
              message: "* Excediste la cantidad de números",
            },
            required: {
              value: true,
              message: "* Requerido",
            },
            minLength: {
              value: 7,
              message: "* Es muy corto el número",
            },
            pattern: {
              value: /^[0-9]+/,
              message: "* Solo se aceptan números"
            }
          })}
          placeholder="Número de celular"
          id="phone_number"
          name="phone_number"
          type="text"
          className="form-control"
        />
        <label htmlFor="phone_number">Número de celular</label>
      </div>
      {errors && errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
      <div className='form-group mt-3'>
        <Dropdown
          refPropt={register({
            required: {
              value: true,
              message: "* Requerido"
            }
          })}
          options={genders || []}
          prompt='Selecciona tu género'
          id="gender"
          name="gender"
          label1='name'
          onChange={(e) => handleChangeOptionsSelects(e, 'gender')}
          value={genderId}
        />
        {errors && errors.gender && <p className="text-danger">{errors.gender.message}</p>}
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
  )
}

export default UserInformationStep;