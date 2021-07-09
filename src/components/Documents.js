import React, { useState, useContext, Fragment, useEffect } from "react";
import styled from "styled-components";

import FormContext from "../context/form/formContext";

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

const ButtonBack = styled.button`
  border-color: ${props => props.bgColor};
  color: ${props => props.bgColor};
  :hover{
    background-color: ${props => props.bgColor};
    color: #fff;
  };
  :disabled{
    opacity: 0.65;
  }
`;

const CustomFile = styled.label`
  ::after{
    color: #fff;
    background-color: ${props => props.bgColor} !important;
  }
`;

const Documents = ({ setError, colorPrimary, colorSecundary, claimsDoc }) => {
  const formContext = useContext(FormContext);
  const {
    documents,
    maxSizeDoc,
    documentsCoverage,
    selectDevice,
    selectDocument,
    selectCoverage,
    selectPlan,
    nextStep,
    previusStep,
    clearForm,
  } = formContext;
  const [document, setDocument] = useState([]);
  const [noRequiredDoc, setNoRequiredDoc] = useState(0);
  useEffect(() => {
    let doc = documents.filter((doc) => (doc.required === false ? doc : null));
    setNoRequiredDoc(doc.length);
  }, [documents]);
  const onLoad = (e) => {
    if (e.target) {
      const { files, name, id } = e.target;
      if (files.length > 0) {
        const { size, type } = files[0];
        documents.find((doc, index) =>
          doc.id === parseInt(id)
            ? (documents[index] = {
                id: doc.id,
                nombre_documento_save: doc.nombre_documento_save,
                files: files[0],
                nameFile: files[0].name,
                required: doc.required,
                error:
                  size > maxSizeDoc
                    ? "Excediste el tamaño permitido de 4MB"
                    : type !== "application/pdf" && type !== "image/jpeg"
                    ? "Error el tipo de documento tiene que ser pdf o jpg"
                    : null,
              })
            : null
        );
        const actual = document.map((doc) => doc.id).indexOf(id);
        const required = documentsCoverage.find(
          (doc) => doc.id === parseInt(id)
        );
        if (
          size > maxSizeDoc ||
          (type !== "application/pdf" && type !== "image/jpeg")
        ) {
          setDocument([...document]);
        } else if (
          document.length === documentsCoverage.length ||
          actual !== -1
        ) {
          document.splice(actual, 1);
          setDocument([
            ...document,
            {
              id,
              nombre_documento_save: name,
              files: files[0],
              nameFile: files[0].name,
              required: required.required,
              error:
                size > maxSizeDoc
                  ? "Excediste el tamaño permitido de 4MB"
                  : type !== "application/pdf" && type !== "image/jpeg"
                  ? "Error el tipo de documento tiene que ser pdf o jpg"
                  : null,
            },
          ]);
        } else {
          setDocument([
            ...document,
            {
              id,
              nombre_documento_save: name,
              files: files[0],
              nameFile: files[0].name,
              required: required.required,
              error:
                size > maxSizeDoc
                  ? "Excediste el tamaño permitido de 4MB"
                  : type !== "application/pdf" && type !== "image/jpeg"
                  ? "Error el tipo de documento tiene que ser pdf o jpg"
                  : null,
            },
          ]);
        }
      } else {
        setDocument([...document]);
      }
    }
  };
  const handleNextStep = () => {
    const pasa = documents.map((doc, index) =>
      documents[index].required && documents[index].files === null
        ? (doc.error = "* Requerido")
        : null
    );
    if (
      document.length === documentsCoverage.length - noRequiredDoc &&
      pasa.filter((pa) => pa === "* Requerido").length === 0
    ) {
      documentsCoverage.find((doc) =>
        doc.required === false
          ? (document[documentsCoverage.length - 1] = {
              id: doc.id,
              nombre_documento_save: doc.nombre_documento_save,
              files: null,
              nameFile: null,
              required: doc.required,
            })
          : null
      );
      selectDocument(document);
      nextStep(3);
      setError(false);
    } else if (document.length === documentsCoverage.length) {
      selectDocument(document);
      nextStep(3);
      setError(false);
    } else {
      setError(true);
      documents.map((doc) =>
        doc.required === true || doc.required === "true"
          ? (doc.error = "* Requerido")
          : null
      );
    }
  };
  const handlePreviusStep = () => {
    clearForm();
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
              <div className=" mb-3 row flex-row" key={doc.id}>
                <div className="mb-0 d-flex">
                  <p className=" mb-0 text-justify">
                    {doc.nombre_documento_save}{" "}
                    {doc.required === true || doc.required === "true" ? (
                      <span className="fs--15 text-red-500 ml--2 ">*</span>
                    ) : null}
                    {doc.nombre_documento_save === "Formato de reclamación." ? (
                      <a
                        href={`${ claimsDoc ? claimsDoc : "https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/Formato_Reclamacion_AXA_COLPATRIA.pdf"}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ml--8 link-muted btn_link font-weight-medium"
                      >
                        Descárgalo aquí.
                      </a>
                    ) : null}
                  </p>
                </div>
                <div className="custom-file custom-file-primary">
                  <input
                    id={doc.id}
                    name={doc.nombre_documento_save}
                    type="file"
                    required
                    accept=".pdf, .jpg, .jpeg"
                    onChange={onLoad}
                    className="custom-file-input"
                  />
                  <CustomFile
                    className="custom-file-label"
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                    htmlFor={doc.id}
                    bgColor={colorPrimary}
                  >
                    {doc.files !== null
                      ? doc.nameFile
                      : document.find((docAc) => docAc.id === doc.id)
                      ? document.find((docAc) => docAc.id === doc.id).nameFile
                      : null}
                  </CustomFile>
                </div>
                <div>
                  {doc.error ? (
                    <p className="text-danger"> {doc.error} </p>
                  ) : null}
                  <small className="d-block text-muted">
                    Upload max size 4MB (PDF o JPG).
                  </small>
                </div>
              </div>
            );
          })
        : null}
      <div className="mt-4 justify-content-between row flex-row">
        <ButtonBack
          className={`btn btn-sm  ${colorSecundary ? "" : "btn-outline-secondary"} `}
          onClick={handlePreviusStep}
          bgColor={colorSecundary}
        >
          Atrás
        </ButtonBack>
        <ButtonSubmit bgColor={colorPrimary}  className={`btn btn-sm ${colorPrimary ? "" : "btn-primary"}`} onClick={handleNextStep}>
          Siguiente
        </ButtonSubmit>
      </div>
    </Fragment>
  );
};
export default Documents;
