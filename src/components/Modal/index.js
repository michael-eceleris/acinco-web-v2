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
            <div className="modal-title d-middle">
              {submit.status === 200 ? (
                <>
                  <i className="fi fi-shield-ok text-success fs--50"></i>
                  <div className="modal-body">
                    <h3 className="modal-title text-center">
                      Reclamacion enviada con exito
                    </h3>
                  </div>
                </>
              ) : submit.status === 500 ? (
                <>
                  <i className="fi fi-round-close text-danger fs--50"></i>
                  <h3 className="modal-title text-center">
                    Algo Salío Mal
                    {submit.data.message ? (
                      <p className="lead">
                        Ya tienes un proceso con esta cobertura
                      </p>
                    ) : null}
                  </h3>
                </>
              ) : null}
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary btn-block"
                onClick={closeModal}
              >
                Cierra
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
