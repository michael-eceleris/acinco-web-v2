import React, { useContext, useState, useEffect } from "react";
import FormContext from "../context/form/formContext";
import Documents from "../components/Documents";
const DocumentsLayout = () => {
  const formContext = useContext(FormContext);
  const { documents, coverage } = formContext;
  const [error, setError] = useState(false);
  const [documentsName, setDocumentsName] = useState([]);
  return (
    <div className="col-12 col-xl-12 mb-3">
      <div className="portlet">
        <div className="portlet-header border-bottom">
          <h4>Subir documentos</h4>
        </div>
        <div className="portlet-body">
          <p className="fs--17">
            Sube los documentos necesarios para la cobertura de{" "}
            {coverage.nombre}
          </p>
          <div className="container py-4 w-75">
            <Documents
              setError={setError}
              error={error}
              setDocumentsName={setDocumentsName}
            />
          </div>
          {error ? null : null}
        </div>
      </div>
    </div>
  );
};

export default DocumentsLayout;
