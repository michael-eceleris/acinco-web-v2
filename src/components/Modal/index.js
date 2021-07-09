import React, { useContext } from "react";
import "./modal.css";
import styled from "styled-components";

import AuthContext from "../../context/auth/authContext";
import FormContext from "../../context/form/formContext";

const ButtonSubmit = styled.button`
  background-color: ${props => props.bgColor};
  color: #fff;
  :hover{
    filter: brightness(120%);
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  }
`;

const Modal = (props) => {
  const authContext = useContext(AuthContext);
  const { logOut } = authContext;
  const formContext = useContext(FormContext);
  const {
    showModal,
    isLoading,
    submit,
    closeModal,
    previusStep,
    clearForm,
    submitContact,
  } = formContext;
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
  const showModalLocal = showModal
    ? "modal display-block"
    : "modal display-none";

  const handleClose = () => {
    closeModal();
    previusStep(0);
    clearForm();
    logOut();
  };
  const colorPrimary = sessionStorage.getItem('colorPrimary');
  return (
    <>
      {submit && !isLoading
        ? (window.scrollTo(0, 0),
          (
            <div className={showModalLocal}>
              <div className="modal-main">
                {submit.status === 200 && !submit.data.error ? (
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
                      <>
                        {submit.data ? (
                          submit.data.data.id.toString().length <= 6 ? (
                            <h5 className="font-weight-medium">
                              Tu reclamación fue creada exitosamente, tu número
                              de radicado es No.{" "}
                              <span className="font-weight-bold ">
                                {("000000" + submit.data.data.id).slice(-6)}{" "}
                              </span>
                            </h5>
                          ) : (
                            <h5 className="font-weight-medium">
                              Tu reclamación fue creada exitosamente, tu número
                              de radicado es No.{" "}
                              <span className="font-weight-bold ">
                                {(
                                  "0".repeat(submit.data.data.id.length) +
                                  submit.data.id
                                ).slice(-submit.data.data.id.length)}{" "}
                              </span>
                            </h5>
                          )
                        ) : null}
                      </>
                    </div>
                  </>
                ) : submit.status === 200 && submit.data.error ? (
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
                      {submit.data.error ? (
                        submit.data.error.message ? (
                          <div className="modal-text">
                            Ya cuentas con una reclamación en proceso tu número
                            de radicado es No.{" "}
                            {submit.data.data.id.toString().length <= 6 ? (
                              <span className="font-weight-bold ">
                                {("000000" + submit.data.data.id).slice(-6)}{" "}
                              </span>
                            ) : (
                              <span className="font-weight-bold ">
                                {(
                                  "0".repeat(submit.data.data.id.length) +
                                  submit.data.id
                                ).slice(-submit.data.data.id.length)}{" "}
                              </span>
                            )}
                            y fue realizada el dia{" "}
                            {submit.data.data.fecha_creacion.substring(8, 10)}{" "}
                            {
                              month[
                                parseInt(
                                  submit.data.data.fecha_creacion.substring(
                                    5,
                                    7
                                  )
                                ) - 1
                              ]
                            }{" "}
                            {submit.data.data.fecha_creacion.substring(0, 4)}{" "}
                            aplicando a la cobertura de{" "}
                            <span className="font-weight-bold ">
                              {submit.data.data.tipo_cobertura.nombre}
                            </span>
                          </div>
                        ) : (
                          <div className="modal-text">
                            Acaba de ocurrir un problema, lo sentimos.
                          </div>
                        )
                      ) : (
                        <div className="modal-text">
                          Acaba de ocurrir un problema, lo sentimos.
                        </div>
                      )}
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
                      <h3 className="modal-title  mb-2">
                        No fue posible crear tu reclamación
                      </h3>
                      <div className="modal-text">
                        Acaba de ocurrir un problema, lo sentimos.
                      </div>
                    </div>
                  </>
                )}
                <div className="modal-actions mb-3">
                  <ButtonSubmit
                    className={`btn ${colorPrimary ? "" : "btn-primary"} btn-sm`}
                    onClick={handleClose}
                    bgColor={colorPrimary}
                  >
                    OK
                  </ButtonSubmit>
                </div>
              </div>
            </div>
          ))
        : null}
      {submitContact && !isLoading
        ? (window.scrollTo(0, 0),
          (
            <div className={showModalLocal}>
              <div className="modal-main">
                {submitContact.status === 201 ? (
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
                      <h3 className="modal-title mb-2">
                        Información enviada exitosamente
                      </h3>
                      <>
                        <h5 className="font-weight-medium">
                          Ya tenemos tu información, muy pronto nos
                          comunicaremos contigo.
                        </h5>
                      </>
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
                      <h3 className="modal-title  mb-2">
                        No fue posible enviar tu información.
                      </h3>
                      <div className="modal-text">
                        Acaba de ocurrir un problema, lo sentimos.
                      </div>
                    </div>
                  </>
                )}
                <div className="modal-actions mb-3">
                  <ButtonSubmit
                    className={`btn ${colorPrimary ? "" : "btn-primary"} btn-sm`}
                    onClick={handleClose}
                    bgColor={colorPrimary}
                  >
                    OK
                  </ButtonSubmit>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Modal;
