import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import FormContext from "../context/form/formContext";

const ButtonSubmit = styled.button`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  :hover {
    filter: brightness(120%);
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const ButtonBack = styled.button`
  border-color: ${(props) => props.bgColor};
  color: ${(props) => props.bgColor};
  :hover {
    background-color: ${(props) => props.bgColor};
    color: #fff;
  }
  :disabled {
    opacity: 0.65;
  }
`;

const CustomFile = styled.label`
  ::after {
    color: #fff;
    background-color: ${(props) => props.bgColor} !important;
  }
`;

const Documents = ({ colorPrimary, colorSecundary, claimsDoc }) => {
  const formContext = useContext(FormContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const {
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

  const validateSize = (id, value) => {
    if (
      value.target.files.length > 0 &&
      value.target.files[0].size > maxSizeDoc
    ) {
      setError(`${id}`, {
        message: "Excediste el tamaño permitido de 4MB",
      });
    } else {
      clearErrors(`${id}`);
    }
  };

  const handleNextStep = (values) => {
    const documents = [];
    let countErros = 0;
    Object.entries(values).forEach((val) => {
      if (val[1].length > 0 && val[1][0].size > maxSizeDoc) {
        setError(`${val[0]}`, {
          message: "Excediste el tamaño permitido de 4MB",
        });
        countErros += 1;
      } else if (val[1].length > 0) {
        documents.push({
          id: val[0],
          nameFile: val[1][0].name,
          nombre_documento_save: documentsCoverage.find(
            (doc) => doc.id === Number(val[0])
          ).nombre_documento_save,
          files: val[1][0],
          error: null,
        });
      }
    });
    if (countErros === 0) {
      selectDocument(documents);
      nextStep(3);
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
      {documentsCoverage
        ? documentsCoverage.map((doc) => {
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
                        href={`${
                          claimsDoc
                            ? claimsDoc
                            : "https://secureservercdn.net/104.238.68.130/j5f.49f.myftpupload.com/wp-content/uploads/2018/09/Formato_Reclamacion_AXA_COLPATRIA.pdf"
                        }`}
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
                    {...register(`${doc.id}`, {
                      required: { value: doc.required, message: "* Requerido" },
                      onChange: (event) => validateSize(doc.id, event),
                    })}
                    type="file"
                    required
                    accept=".pdf, .jpg, .jpeg"
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
                    {watch(`${doc.id}`)
                      ? watch(`${doc.id}`).length > 0 &&
                        watch(`${doc.id}`)[0].name
                      : null}
                  </CustomFile>
                </div>
                <div>
                  {errors[doc.id] && (
                    <p className="text-danger"> {errors[doc.id].message} </p>
                  )}
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
          className={`btn btn-sm  ${
            colorSecundary ? "" : "btn-outline-secondary"
          } `}
          onClick={handlePreviusStep}
          bgColor={colorSecundary}
        >
          Atrás
        </ButtonBack>
        <ButtonSubmit
          bgColor={colorPrimary}
          className={`btn btn-sm ${colorPrimary ? "" : "btn-primary"}`}
          onClick={handleSubmit(handleNextStep)}
        >
          Siguiente
        </ButtonSubmit>
      </div>
    </Fragment>
  );
};
export default Documents;
