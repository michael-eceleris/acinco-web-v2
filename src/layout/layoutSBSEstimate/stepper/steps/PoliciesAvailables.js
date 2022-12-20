import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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

const PoliciesAvailableStep = () => {
  const { userInfo, policy, setCurrentStep } = useStepperComercio();
  const { handleSubmit } = useForm();

  const onSubmit = (value) => {
    setCurrentStep(0);
  };

  return (
    <Fragment>
      <h4>Pólizas disponsibles</h4>
      {console.log("poli", policy)}
      <p className='fs--17'>
        A continuación encontraras las pólizas disponibles para el dispositivo
      </p>
      <div className='bg-white rounded font-weight-light mb-4 '>
        <div className='table-responsive'>
          <table className='table table-sm text-gray-700'>
            <tbody>
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
              <tr>
                <td className='border-bottom border-top-0'>Valor Asegurado:</td>
                <td className='border-bottom border-top-0'>
                  ${" "}
                  {policy?.insuredValue
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </td>
              </tr>
              {policy.policies.map((policy) => (
                <>
                  <tr>
                    <td className='border-top-0'>
                      <h6 className='font-weight-medium mb-4 mt-4'>
                        Datos del plan {policy.name}
                      </h6>
                    </td>
                    <td className='border-top-0'></td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>Cobertura:</td>
                    <td className='border-bottom border-top-0'>
                      {policy.coverages.map((e) => (
                        <p key={`coverages_${e}`} className='mb-0'>
                          {e}
                        </p>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Precio poliza:
                    </td>
                    <td className='border-bottom border-top-0'>
                      ${" "}
                      {policy.pricingOptions[0].paymentAmount
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Frecuencia de pago:
                    </td>
                    <td className='border-bottom border-top-0'>
                      {policy.pricingOptions[0].paymentFrequency}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='mt-4 d-flex justify-content-between'>
        <button
          className={`btn btn-sm btn-outline-secondary `}
          style={{ borderColor: "#9E1C64" }}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Atrás
        </button>
        <ButtonSubmit
          className={`btn btn-sm btn-primary`}
          style={{ backgroundColor: "#9E1C64", borderColor: "#9E1C64" }}
          onClick={handleSubmit(onSubmit)}
        >
          Terminar
        </ButtonSubmit>
      </div>
    </Fragment>
  );
};

export default PoliciesAvailableStep;
