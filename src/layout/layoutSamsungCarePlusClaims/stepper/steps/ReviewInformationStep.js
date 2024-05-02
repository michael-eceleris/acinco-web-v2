import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import microServiceAxios from "../config/axios";
import { useStepperClaimsSamsung } from "../provider/step-provider";

const LabelCheckbox = styled.label`
  > input[type="checkbox"]:checked + i {
    background: "#000000" !important;
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
const CustomH4 = styled.h4`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const ReviewInformationStep = ({ colorPrimary, allUppercase }) => {
  const {
    userInfo,
    interceptors,
    setCurrentStep,
    currentDevice,
    currentMoreInfo,
    currentCoverage,
    currentPlan,
    currentDocuments,
    setShowModalCodeValidation,
  } = useStepperClaimsSamsung();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const generateCode = async () => {
    setShowModalCodeValidation(true);
    setIsLoading((prevState) => !prevState);
    try {
      await microServiceAxios.post(
        `/api/v1/claim/generate-code`,
        {
          IMEI: currentDevice?.imei_uno,
          name: userInfo?.name,
          lastName: userInfo?.second_name,
          email: userInfo?.email,
        },
        {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>
        Enviar
      </CustomH4>
      <p className="fs--17">
        Revisa los datos, confirma que estén correctos y envía tu reclamación.
      </p>
      <div className="bg-white rounded font-weight-light mb-4 ">
        <div className="table-responsive">
          <table className="table table-sm text-gray-700">
            <tbody>
              <tr>
                <td className="border-top-0">
                  <h6 className="font-weight-medium mb-4">Datos personales</h6>
                </td>
                <td className="border-top-0">&nbsp;</td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Nombre(s):</td>
                <td className="border-bottom border-top-0">{userInfo?.name}</td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Apellido(s):</td>
                <td className="border-bottom border-top-0">
                  {userInfo?.second_name}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Tipo de documento:
                </td>
                <td className="border-bottom border-top-0">
                  {userInfo?.identification_type?.id_system}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Número de documento:
                </td>
                <td className="border-bottom border-top-0">
                  {userInfo?.identification_number}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Género:</td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.nombre_genero}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Email:</td>
                <td className="border-bottom border-top-0">
                  {userInfo?.email}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Línea Principal Asegurada:
                </td>
                <td className="border-bottom border-top-0">
                  {currentDevice?.linea_uno}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Dirección de residencia:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.direccion_residencia}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Ciudad de residencia:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.ciudad_residencia}
                </td>
              </tr>
              <tr>
                <td className="border-top-0">
                  <h6 className="font-weight-medium mb-4 mt-4">
                    Datos del dispositivo
                  </h6>
                </td>
                <td className="border-top-0">&nbsp;</td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Modelo del dispositivo:
                </td>
                <td className="border-bottom border-top-0">
                  {currentDevice?.dispositivo.nombre}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Fabricante:</td>
                <td className="border-bottom border-top-0">
                  {currentDevice?.dispositivo.fabricante.nombre}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  IMEI Principal Asegurado:
                </td>
                <td className="border-bottom border-top-0">
                  {currentDevice?.imei_uno}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  IMEI Secundario Asegurado:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.second_imei}
                </td>
              </tr>
              <tr>
                <td className="border-top-0">
                  <h6 className="font-weight-medium mb-4 mt-4">
                    Datos del evento
                  </h6>
                </td>
                <td className="border-top-0">&nbsp;</td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Nombre del plan al que aplica:
                </td>
                <td className="border-bottom border-top-0">
                  {currentPlan?.plan?.nombre}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Aplicando a la cobertura de:
                </td>
                <td className="border-bottom border-top-0">
                  {currentCoverage?.nombre}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Valor de cobertura:
                </td>
                <td className="border-bottom border-top-0">
                  ${" "}
                  {currentPlan?.valor_asegurado
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Fecha del evento:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.fecha_siniestro.substring(0, 10)}{" "}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">Hora del evento:</td>
                <td className="border-bottom border-top-0">
                  {new Date(
                    currentMoreInfo?.hora_siniestro
                  ).toLocaleTimeString()}{" "}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Ciudad en donde sucedió el evento:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.nombre_siniestro}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  País en donde sucedió el evento:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.pais_siniestro}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Línea con la que sucedió el evento:
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.linea_siniestro_one}
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-top-0">
                  Descripción del evento
                </td>
                <td className="border-bottom border-top-0">
                  {currentMoreInfo?.mensaje_ticket}
                </td>
              </tr>
              <tr>
                <td className="border-top-0">
                  <h6 className="font-weight-medium mb-4 mt-4">
                    Documentos cargados
                  </h6>
                </td>
                <td className="border-top-0">&nbsp;</td>
              </tr>
              {currentDocuments.map((doc) =>
                doc.files === null ? null : (
                  <tr key={doc.id}>
                    <td className="border-bottom border-top-0">
                      {doc.nombre_documento_save}
                    </td>
                    <td className="border-bottom border-top-0">
                      {doc.nameFile}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <LabelCheckbox className="form-checkbox form-checkbox-primary">
        <input
          {...register("confirm", {
            required: {
              value: true,
              message: "* Requerido",
            },
          })}
          id="confirm"
          name="confirm"
          type="checkbox"
        />
        <i></i>Confirmas tus datos.
      </LabelCheckbox>
      <div className="mt-4 d-flex justify-content-between">
        <button
          className={`btn btn-sm btn-outline-secondary `}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Atrás
        </button>
        <ButtonSubmit
          className={`btn btn-sm btn-primary bg-dark`}
          onClick={handleSubmit(generateCode)}
          disabled={isLoading}
        >
          Enviar
          {isLoading && (
            <i
              className="spinner-border spinner-border-sm ml-2 mr-0 mb--3"
              role="status"
              aria-hidden="true"
            ></i>
          )}
        </ButtonSubmit>
      </div>
    </Fragment>
  );
};

export default ReviewInformationStep;
