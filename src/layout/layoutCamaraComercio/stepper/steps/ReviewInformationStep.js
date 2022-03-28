import React from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useStepperComercio } from "../provider/step-provider";

const LabelCheckbox = styled.label`
  > input[type="checkbox"]:checked + i {
    background: "#003272" !important;
  }
`;

const ReviewInformationStep = () => {
  const { userInfo, setCurrentStep, setShowModal } = useStepperComercio();
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <h4>Enviar</h4>
      <p className='fs--17'>
        Revisa los datos, confirma que estén correctos y adquiere tu seguro.
      </p>
      <div className='bg-white rounded font-weight-light mb-4 '>
        <div className='table-responsive'>
          <table className='table table-sm text-gray-700'>
            <tbody>
              <tr>
                <td className='border-top-0'>
                  <h6 className='font-weight-medium mb-4'>Datos personales</h6>
                </td>
                <td className='border-top-0'>&nbsp;</td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>Nombre(s):</td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.firstName}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>Apellido(s):</td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.lastName}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>
                  Tipo de documento:
                </td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.identificationType?.id_system}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>
                  Número de documento:
                </td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.identificationNumber}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>Género:</td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.genderId?.name}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>Email:</td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.email}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>
                  Línea Principal Asegurada:
                </td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.phone_number}
                </td>
              </tr>
              <tr>
                <td className='border-top-0'>
                  <h6 className='font-weight-medium mb-4 mt-4'>
                    Datos del dispositivo
                  </h6>
                </td>
                <td className='border-top-0'>&nbsp;</td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>
                  Modelo del dispositivo:
                </td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.deviceName}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>Fabricante:</td>
                <td className='border-bottom border-top-0'>
                  {userInfo?.deviceManufacter}
                </td>
              </tr>
              <tr>
                <td className='border-bottom border-top-0'>IMEI Asegurado:</td>
                <td className='border-bottom border-top-0'>{userInfo?.imei}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <LabelCheckbox className='form-checkbox form-checkbox-primary'>
        <input
          ref={register({
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          id='confirm'
          name='confirm'
          type='checkbox'
        />
        <i></i>Confirmas tus datos.
      </LabelCheckbox>
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
          Enviar
        </button>
      </div>
    </Fragment>
  );
};

export default ReviewInformationStep;
