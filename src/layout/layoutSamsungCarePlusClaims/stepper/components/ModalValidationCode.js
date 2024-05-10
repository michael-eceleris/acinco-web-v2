import React, { useState } from "react";

import "../../../../components/Modal/modal.css";
import Logo from "../../../../assets/images/samsung_care_plus.png";
import microServiceAxios from "../config/axios";
import { useStepperClaimsSamsung } from "../provider/step-provider";

const ModalValidationCode = () => {
  const {
    interceptors,
    setShowModal,
    setIsErrorModal,
    setIdClaim,
    currentDevice,
    currentMoreInfo,
    currentCoverage,
    currentPlan,
    currentDocuments,
    showModalCodeValidation,
    setShowModalCodeValidation,
  } = useStepperClaimsSamsung();
  const showModalLocal = showModalCodeValidation
    ? "modal display-block"
    : "modal display-none";
  const [code, setCode] = useState(null);
  // eslint-disable-next-line
  const [validatedCode, setValidatedCode] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateCode = async () => {
    try {
      const response = await microServiceAxios.post(
        `/api/v1/claim/validate-code`,
        { code },
        {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        }
      );
      if (response.status === 200) {
        setValidatedCode(true);
        onSubmit();
      }
    } catch (error) {
      setShowModalCodeValidation(false);
      setIsErrorModal(true);
      setShowModal(true);
      setValidatedCode(false);
      setError(true);
      setCode(null);
    }
  };
  const handleChangeValueCode = (e) => {
    setCode(e.target.value);
  };
  const validate = () => {
    if (code && code.length === 6) {
      validateCode();
    } else {
      setError(true);
    }
  };

  const onSubmit = async (value) => {
    setIsLoading((prevState) => !prevState);
    try {
      const formData = new FormData();
      currentDocuments.forEach((doc) => {
        formData.append(doc.id, doc.files);
      });
      formData.append("principalIMEI", currentDevice?.imei_uno);
      formData.append("planID", currentPlan?.plan.id);
      formData.append("coverageID", currentCoverage?.id);
      formData.append("cityID", currentMoreInfo.ciudad_siniestro);
      formData.append("genderID", currentMoreInfo.genero_reclamante);
      formData.append("message", currentMoreInfo.mensaje_ticket);
      formData.append("phoneAccident", currentMoreInfo.linea_siniestro_one);
      formData.append("dateAccident", currentMoreInfo.fecha_siniestro);
      const response = await microServiceAxios.post(
        `/api/v1/claim/create`,
        formData,
        {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        }
      );
      if (response.status === 200) {
        setShowModalCodeValidation(false);
        setIsErrorModal(null);
        setShowModal(true);
        setIsLoading((prevState) => !prevState);
        setIdClaim(response.data.data.claim.id);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setIsErrorModal({
          message: error.response.data.error.message,
        });
      } else {
        setIsErrorModal({
          message: true,
        });
      }
      setShowModalCodeValidation(false);
      setShowModal(true);
      setIsLoading((prevState) => !prevState);
    }
  };

  return (
    <>
      {showModalCodeValidation
        ? (window.scrollTo(0, 0),
          (
            <div className={showModalLocal}>
              <div className="modal-main">
                <div className="modal-header d-flex">
                  <img alt={`logo_samsung`} src={Logo} className="max-w-300" />
                </div>
                <div className="modal-body">
                  <h3 className="modal-title mb-2">Código de verificación</h3>
                  <div className="modal-text mb-2">
                    <small>
                      Para realizar la reclamación ingresar el código de
                      verificación enviado a su correo
                    </small>
                  </div>
                  <div className="form-label-group">
                    <input
                      className="form-control"
                      id="code"
                      type="text"
                      name="code"
                      required
                      onChange={handleChangeValueCode}
                      value={code}
                      placeholder="Código de verificación"
                      disabled={isLoading}
                    />
                    <label className="fontcustom">Código de verificación</label>
                  </div>
                  <div className="mb-4 d-flex justify-content-between">
                    <div>
                      {error && !code ? (
                        <p className="text-danger">* Campo requerido</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="modal-actions mb-3">
                  <button
                    className={`btn btn-primary btn-sm bg-dark`}
                    onClick={validate}
                    disabled={isLoading}
                  >
                    Confirmar
                    {isLoading && (
                      <i
                        className="spinner-border spinner-border-sm ml-2 mr-0 mb--3"
                        role="status"
                        aria-hidden="true"
                      ></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ModalValidationCode;
