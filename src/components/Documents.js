import React, { useState, useContext, Fragment } from "react";
import FormContext from "../context/form/formContext";
const Documents = ({ setError, error, setDocumentsName }) => {
  const formContext = useContext(FormContext);
  const {
    documents,
    documentsCoverage,
    selectDevice,
    selectDocument,
    selectCoverage,
    selectPlan,
    nextStep,
    previusStep,
  } = formContext;
  const [document, setDocument] = useState([]);
  const [errorSize, setErrorSize] = useState(false);
  const [errorType, setErrorType] = useState(false);
  const onLoad = (e) => {
    const { files, name, id } = e.target;
    const { size, type } = files[0];
    documents.find((doc, index) =>
      doc.id == id
        ? (documents[index] = {
            id: doc.id,
            nombre_documento_save: doc.nombre_documento_save,
            files: files[0],
            nameFile: files[0].name,
            error:
              size > 2000000
                ? "Excediste el tamaño permitido de 2MB"
                : type !== "application/pdf"
                ? "Error el tipo de documento tiene que ser pdf"
                : null,
          })
        : null
    );
    if (size > 2000000) {
      setErrorSize(true);
    } else if (type !== "application/pdf") {
      setErrorType(true);
    } else {
      setErrorSize(false);
      setErrorType(false);

      setDocument([
        ...document,
        {
          id,
          nombre_documento_save: name,
          files: files[0],
          nameFile: files[0].name,
        },
      ]);
      setDocumentsName([
        ...document,
        {
          id,
          nombre_documento_save: name,
          files: files[0],
          nameFile: files[0].name,
        },
      ]);
    }
  };
  const handleNextStep = () => {
    if (document.length === documentsCoverage.length) {
      selectDocument(document);
      nextStep(3);
      setError(false);
    } else {
      setError(true);
      documents.map((doc) => (doc.error = "* Requerido"));
    }
  };
  const handlePreviusStep = () => {
    selectDevice(null);
    selectCoverage(null);
    selectPlan(null);
    previusStep(1);
  };
  return (
    <Fragment>
      {documents
        ? documents.map((doc) => {
            return (
              <div className=" mb-3 row flex-row">
                <p>{doc.nombre_documento_save}</p>
                <div className="custom-file custom-file-primary">
                  <input
                    id={doc.id}
                    name={doc.nombre_documento_save}
                    type="file"
                    required
                    accept=".pdf"
                    onChange={onLoad}
                    className="custom-file-input"
                  />
                  <label className="custom-file-label" htmlFor={doc.id}>
                    {doc.nameFile ? doc.nameFile : null}
                  </label>
                </div>
                <div>
                  {doc.error ? (
                    <p className="text-danger"> {doc.error} </p>
                  ) : null}
                  <small className="d-block text-muted">
                    Upload max size 2MB (pdf).
                  </small>
                </div>
              </div>
            );
          })
        : null}
      <div className="mt-4 d-flex justify-content-between">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handlePreviusStep}
        >
          Atras
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleNextStep}>
          Siguiente
        </button>
      </div>
    </Fragment>
  );
};
export default Documents;
