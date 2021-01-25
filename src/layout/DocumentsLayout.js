import React, { useContext, useState } from "react";
import FormContext from "../context/form/formContext";
import Documents from "../components/Documents";
const DocumentsLayout = () => {
  const formContext = useContext(FormContext);
  const { coverage } = formContext;
  const [error, setError] = useState(false);
  return (
    <>
      <div className="container py-1">
        <h4>Subir documentos</h4>
        <p className="fs--17">
          Sube los documentos necesarios para la cobertura de{" "}
          <b>{coverage.nombre}</b>
        </p>
        <div className="container py-4">
          <Documents setError={setError} error={error} />
        </div>
        {error ? null : null}
      </div>
    </>
  );
};

export default DocumentsLayout;
