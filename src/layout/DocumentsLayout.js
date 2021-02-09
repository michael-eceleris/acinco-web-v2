import React, { useContext, useState } from "react";
import FormContext from "../context/form/formContext";
import Documents from "../components/Documents";
const DocumentsLayout = () => {
  const formContext = useContext(FormContext);
  const { coverage, openModal, plan } = formContext;
  const [error, setError] = useState(false);
  return (
    <>
      <div className="container py-1">
        <h4>Subir documentos</h4>
        <p className="fs--17 mb--0">
          Sube los documentos necesarios para la cobertura de{" "}
          <button
            className="link-muted btn_link "
            onClick={() =>
              openModal({ plan: plan.plan.nombre, cobertura: coverage.nombre })
            }
          >
            <b>{coverage.nombre}</b>
          </button>
        </p>
        <p className="text-red-500 mt--0 fs--15">* Obligatorio</p>
        <div className="container py-4">
          <Documents setError={setError} error={error} />
        </div>
        {error ? null : null}
      </div>
    </>
  );
};

export default DocumentsLayout;
