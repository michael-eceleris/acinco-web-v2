import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import microServiceAxios from "../config/axios";
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

const GenerateLinkStep = () => {
  const { userInfo, interceptors, setCurrentStep, setUserInfo } =
    useStepperComercio();
  const { handleSubmit } = useForm();
  const [isLoadingGenerateLink, setIsLoadingGenerateLink] = useState(false);
  const [isLoadingValidateLink, setIsLoadingValidateLink] = useState(false);
  const [isLinkCopy, setIsLinkCopy] = useState(false);
  const [infoForValidateLink, setInfoForValidateLink] = useState(null);

  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fetchGenerateLink = () => {
    setIsLoadingGenerateLink(true);
    microServiceAxios
      .get(`/api/v1/touch?imei=${userInfo.imei}`, {
        headers: {
          Authorization: `${interceptors.type} ${interceptors.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserInfo({
            ...userInfo,
            touchId: res.data.data.touchId,
            touchUrl: res.data.data.touchUrl,
          });
          setIsLoadingGenerateLink(false);
        }
      })
      .catch((err) => {
        setIsLoadingGenerateLink(false);
        console.log(err);
      });
  };

  const fetchValidateLink = () => {
    setIsLoadingValidateLink(true);
    microServiceAxios
      .get(`/api/v1/touch/information/${userInfo?.touchId}`, {
        headers: {
          Authorization: `${interceptors.type} ${interceptors.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setInfoForValidateLink(res.data.data);
        }
        setIsLoadingValidateLink(false);
      })
      .catch((err) => {
        setIsLoadingValidateLink(false);
        console.log(err);
      });
  };

  const hanldeCopyToClipboard = () => {
    setIsLinkCopy(true);
    navigator.clipboard.writeText(userInfo?.touchUrl);
  };
  const onSubmit = (value) => {
    setCurrentStep(0);
  };

  const handlePreviusStep = () => {
    setCurrentStep((prevState) => prevState - 1);
    setUserInfo({
      ...userInfo,
      touchId: null,
      touchUrl: null,
    });
  };
  return (
    <Fragment>
      <h4>Generar link prueba touch</h4>
      <p>
        A continuación verificaras el estado de la pantalla mediante la prueba
        del touch
      </p>
      <div className='bg-white rounded font-weight-light mb-4 '>
        <div className='table-responsive'>
          <table className='tabla table-sm text-gray-700 w-100'>
            <tbody>
              <tr>
                <td className='border-bottom border-top-0'>Generar link</td>
                <td className='border-bottom border-top-0 d-flex justify-content-end'>
                  <ButtonSubmit
                    className={`btn btn-sm btn-primary`}
                    style={{
                      backgroundColor: "#9E1C64",
                      borderColor: "#9E1C64",
                    }}
                    onClick={() => fetchGenerateLink()}
                    disabled={isLoadingGenerateLink}
                  >
                    Generar
                    {isLoadingGenerateLink && (
                      <i
                        className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
                        role='status'
                        aria-hidden='true'
                      ></i>
                    )}
                  </ButtonSubmit>
                </td>
              </tr>
              {userInfo?.touchId && userInfo?.touchUrl && (
                <>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Link generado
                    </td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end text-align-end fs-16'>
                      <ButtonSubmit
                        className={`btn btn-sm btn-primary`}
                        style={{
                          backgroundColor: "#9E1C64",
                          borderColor: "#9E1C64",
                        }}
                        onClick={() => hanldeCopyToClipboard()}
                      >
                        {isLinkCopy ? "Link copiado" : "Copiar"}
                      </ButtonSubmit>
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>Touch Id</td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end'>
                      {userInfo?.touchId}
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Verificar link
                    </td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end'>
                      <ButtonSubmit
                        className={`btn btn-sm btn-primary`}
                        style={{
                          backgroundColor: "#9E1C64",
                          borderColor: "#9E1C64",
                        }}
                        onClick={() => fetchValidateLink()}
                        disabled={
                          (!userInfo?.touchId && !userInfo?.touchUrl) ||
                          isLoadingValidateLink
                        }
                      >
                        Verficar
                        {isLoadingValidateLink && (
                          <i
                            className='spinner-border spinner-border-sm ml-2 mr-0 mb--3'
                            role='status'
                            aria-hidden='true'
                          ></i>
                        )}
                      </ButtonSubmit>
                    </td>
                  </tr>
                </>
              )}
              {infoForValidateLink && (
                <>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Uso de la prueba
                    </td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end'>
                      {infoForValidateLink?.isUsed
                        ? "Ya se uso"
                        : "No se ha usado"}
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Validación de la prueba
                    </td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end'>
                      {infoForValidateLink?.isValidTouch
                        ? "Prueba validada"
                        : "Prueba sin validar"}
                    </td>
                  </tr>
                  <tr>
                    <td className='border-bottom border-top-0'>
                      Fecha Validación
                    </td>
                    <td className='border-bottom border-top-0 d-flex justify-content-end'>
                      {infoForValidateLink?.validatedAt ? (
                        <>
                          {infoForValidateLink?.validatedAt
                            .toString()
                            .substring(8, 10)}
                          -
                          {
                            month[
                              parseInt(
                                infoForValidateLink?.validatedAt.substring(5, 7)
                              ) - 1
                            ]
                          }
                          -
                          {infoForValidateLink?.validatedAt
                            .toString()
                            .substring(0, 4)}
                        </>
                      ) : (
                        "Sin validar"
                      )}
                    </td>
                  </tr>
                </>
              )}

              <tr>
                <td className='border-bottom border-top-0'></td>
                <td className='border-bottom border-top-0'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-4 d-flex justify-content-between '>
        <button
          className={`btn btn-sm btn-outline-secondary `}
          style={{ borderColor: "#9E1C64" }}
          onClick={() => handlePreviusStep()}
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

export default GenerateLinkStep;
