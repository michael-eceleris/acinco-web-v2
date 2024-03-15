import React from "react";

import "../../../../components/Modal/modal.css";
import { useStepperClaimsSamsung } from "../provider/step-provider";

const Modal = () => {
  const {
    showModal,
    isErrorModal,
    setShowModal,
    setCurrentStep,
    resetForm,
    idClaim,
  } = useStepperClaimsSamsung();
  const showModalLocal = showModal
    ? "modal display-block"
    : "modal display-none";

  const handleClose = () => {
    setShowModal(false);
    setCurrentStep(0);
    resetForm();
  };

  return (
    <>
      {showModal
        ? (window.scrollTo(0, 0),
          (
            <div className={showModalLocal}>
              <div className="modal-main">
                {!isErrorModal ? (
                  <>
                    <div className="modal-header">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                      >
                        <circle
                          className="path circle"
                          fill="none"
                          stroke="#73AF55"
                          strokeWidth="6"
                          strokeMiterlimit="10"
                          cx="65.1"
                          cy="65.1"
                          r="62.1"
                        />
                        <polyline
                          className="path check"
                          fill="none"
                          stroke="#73AF55"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          points="100.2,40.2 51.5,88.8 29.8,67.5 "
                        />
                      </svg>
                    </div>
                    <div className="modal-body">
                      <h3 className="modal-title mb-2">Reclamación exitosa</h3>
                      Tu reclamación fue creada exitosamente, tu número de
                      radicado es No. {("000000" + idClaim).slice(-6)}{" "}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="modal-header">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                      >
                        <circle
                          className="path circle"
                          fill="none"
                          stroke="#D06079"
                          strokeWidth="6"
                          strokeMiterlimit="10"
                          cx="65.1"
                          cy="65.1"
                          r="62.1"
                        />
                        <line
                          className="path line"
                          fill="none"
                          stroke="#D06079"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          x1="34.4"
                          y1="37.9"
                          x2="95.8"
                          y2="92.3"
                        />
                        <line
                          className="path line"
                          fill="none"
                          stroke="#D06079"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          x1="95.8"
                          y1="38"
                          x2="34.4"
                          y2="92.2"
                        />
                      </svg>
                    </div>
                    <div className="modal-body">
                      <h3 className="modal-title mb-2">
                        No fue posible crear tu reclamación
                      </h3>
                      <div className="modal-text">
                        {isErrorModal?.message} <br />
                        <small>
                          Si el problema continúa comunícate en Bogotá 601
                          3905567, para el resto de Colombia 01 8000 513 323 o
                          WhatsApp +57 1 5142355.
                        </small>
                      </div>
                    </div>
                  </>
                )}
                <div className="modal-actions mb-3">
                  <button
                    className={`btn btn-primary btn-sm bg-dark`}
                    onClick={handleClose}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Modal;
