import React, { useContext } from "react";
import "./modal.css";
import FormContext from "../../context/form/formContext";

const Modal = () => {
  const formContext = useContext(FormContext);
  const { showModal, closeModal, submit } = formContext;
  const showModalLocal = showModal
    ? "modal display-block"
    : "modal display-none";
  return (
    <>
      {submit ? (
        <div className={showModalLocal}>
          <div className="modal-main">
            {submit.status === 200 ? (
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
                      strokeMiterLimit="10"
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
                      strokeMiterLimit="10"
                      points="100.2,40.2 51.5,88.8 29.8,67.5 "
                    />
                  </svg>
                </div>
                <div className="modal-body">
                  <h3 className="modal-title mb-2">
                    Reclamación enviada con exito
                  </h3>
                  <div className="modal-text mt-1">
                    Acabas de enviar tu reclamación, por lo tanto se cerrara tu
                    sesión, sin embargo puedes seguir haciendo el proceso de
                    reclamaciones.
                  </div>
                </div>
              </>
            ) : submit.status === 500 ? (
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
                      strokeMiterLimit="10"
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
                      strokeMiterLimit="10"
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
                      strokeLineCap="round"
                      strokeMiterLimit="10"
                      x1="95.8"
                      y1="38"
                      x2="34.4"
                      y2="92.2"
                    />
                  </svg>
                </div>
                <div className="modal-body">
                  <h3 className="modal-title  mb-2">Algo Salio Mal</h3>
                  {submit.data ? (
                    submit.data.message ? (
                      <div className="modal-text">
                        Ya tienes un proceso con esta cobertura
                      </div>
                    ) : null
                  ) : (
                    <div className="modal-text">
                      Acaba de ocurrir un problema, lo sentimos, vuelva a
                      realizar el proceso de reclamación.
                    </div>
                  )}
                </div>
              </>
            ) : null}
            <div className="modal-actions mb-3">
              <button className="btn btn-primary btn-sm" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
