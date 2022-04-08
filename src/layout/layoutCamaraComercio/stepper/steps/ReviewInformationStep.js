import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import microServiceAxios from "../config/axios";
import { useStepperComercio } from "../provider/step-provider";

const LabelCheckbox = styled.label`
  > input[type="checkbox"]:checked + i {
    background: "#003272" !important;
  }
`;
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

const ReviewInformationStep = () => {
  const {
    userInfo,
    policy,
    interceptors,
    setCurrentStep,
    setShowModal,
    setIsErrorModal,
  } = useStepperComercio();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value) => {
    setIsLoading((prevState) => !prevState);
    try {
      let data = {
        client: {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          genderId: userInfo.genderId.name.toUpperCase(),
          identification: {
            type: userInfo.identificationType.id_system,
            number: userInfo.identificationNumber,
          },
        },
        planId: policy.policies[0].id,
        priceOptionId: policy.policies[0].pricingOptions[0].id,
        device: {
          imei: userInfo.imei,
          line: userInfo.phone_number,
        },
        promotionCode: userInfo.promotionCode,
        clientIdentification: userInfo.clientIdentification,
        sponsorId: policy.policies[0].sponsor,
      };
      const response = await microServiceAxios.post(`/api/v1/policy`, data, {
        headers: {
          Authorization: `${interceptors.type} ${interceptors.token}`,
        },
      });
      if (response.status === 200) {
        setIsErrorModal(null);
        setShowModal(true);
        setIsLoading((prevState) => !prevState);
      }
    } catch (error) {
      if (error.response.status === 400) {
        if (
          error.response.data.error.message ===
          "the imei already has a valid insurance policy for this sponsor"
        ) {
          setIsErrorModal({
            message: "Este imei ya cuenta con una póliza vigente.",
          });
        }
      } else {
        setIsErrorModal({
          message: true,
        });
      }
      setShowModal(true);
      setIsLoading((prevState) => !prevState);
    }
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
        <ButtonSubmit
          className={`btn btn-sm btn-primary`}
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          Enviar
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

export default ReviewInformationStep;
