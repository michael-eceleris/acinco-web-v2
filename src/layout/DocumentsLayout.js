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
        <p className="fs--17 mb--5 text-justify">
          En esta sección debes subir los documentos necesarios para la
          cobertura de <b>{coverage.nombre}</b>. Para subir los documentos
          necesarios debes seguir las siguientes{" "}
          <button
            className="link-muted btn_link "
            onClick={() =>
              openModal({ plan: plan.plan.nombre, cobertura: coverage.nombre })
            }
          >
            <b>instrucciones</b>
          </button>
          . Ten en cuenta que los documentos que tengan el simbolo (
          <small className="text-red-500 mt--0 fs--15"> * </small>) son
          obligatorios.
        </p>
        <p className="fs--17 mb--0"></p>
        <div className="container py-4">
          <Documents setError={setError} error={error} />
        </div>
        {error ? null : null}
      </div>
    </>
  );
};

export default DocumentsLayout;
