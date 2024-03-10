import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import microServiceAxios from "../config/axios";
import { useStepperClaimsSamsung } from "../provider/step-provider";

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

const CustomH4 = styled.h4`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const DocumentStep = ({ colorPrimary, colorSecundary, allUppercase }) => {
  const [documents, setDocuments] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const {
    interceptors,
    currentCoverage,
    setCurrentDocuments,
    setCurrentStep,
    setCurrentDevice,
    setCurrentPlan,
    setCurrentCoverage,
  } = useStepperClaimsSamsung();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await microServiceAxios.get(
          `/api/v1/claim/documents/${currentCoverage.id}`,
          {
            headers: {
              Authorization: `${interceptors.type} ${interceptors.token}`,
            },
          }
        );
        setDocuments(response.data.data.documents);
      } catch (error) {}
    };
    fetchApi();
    // eslint-disable-next-line
  }, []);
  const validateSize = (id, value) => {
    if (value.target.files.length > 0 && value.target.files[0].size > 4000000) {
      setError(`${id}`, {
        message: "Excediste el tamaño permitido de 4MB",
      });
    } else {
      clearErrors(`${id}`);
    }
  };
  const handleNextStep = (values) => {
    const documentsLocal = [];
    let countErros = 0;
    Object.entries(values).forEach((val) => {
      if (val[1].length > 0 && val[1][0].size > 4000000) {
        setError(`${val[0]}`, {
          message: "Excediste el tamaño permitido de 4MB",
        });
        countErros += 1;
      } else if (val[1].length > 0) {
        documentsLocal.push({
          id: val[0],
          nameFile: val[1][0].name,
          nombre_documento_save: documents.find(
            (doc) => doc.id === Number(val[0])
          ).nombre_documento_save,
          files: val[1][0],
          error: null,
        });
      }
    });
    documentsLocal.push({
      ...documents.find(
        (doc) => doc.nombre_documento_save === "Formato de reclamación."
      ),
      error: null,
    });
    if (countErros === 0) {
      setCurrentDocuments(documentsLocal);
      setCurrentStep(3);
    }
  };
  const handlePreviusStep = () => {
    setCurrentStep(1);
    setCurrentPlan(null);
    setCurrentCoverage(null);
    setCurrentDevice(null);
  };
  return (
    <div className="container py-1">
      <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>
        Subir documentos
      </CustomH4>
      <p className="fs--17 mb--5 text-justify">
        En esta sección debes subir los documentos necesarios para la cobertura
        de <b>{currentCoverage.nombre}</b> Ten en cuenta que los documentos que
        tengan el símbolo (
        <small className="text-red-500 mt--0 fs--15"> * </small>) son
        obligatorios.
      </p>
      <div className="container py-4">
        {documents
          ? documents.map((doc) => {
              return (
                doc.nombre_documento_save !== "Formato de reclamación." && (
                  <div className=" mb-3 row flex-row" key={doc.id}>
                    <div className="mb-0 d-flex">
                      <p className=" mb-0 text-justify">
                        {doc.nombre_documento_save}{" "}
                        {doc.required === true || doc.required === "true" ? (
                          <span className="fs--15 text-red-500 ml--2 ">*</span>
                        ) : null}
                      </p>
                    </div>
                    <div className="custom-file custom-file-primary">
                      <input
                        {...register(`${doc.id}`, {
                          required: {
                            value: doc.required,
                            message: "* Requerido",
                          },
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
                        <p className="text-danger">
                          {" "}
                          {errors[doc.id].message}{" "}
                        </p>
                      )}
                      <small className="d-block text-muted">
                        Upload max size 4MB (PDF o JPG).
                      </small>
                    </div>
                  </div>
                )
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
      </div>
    </div>
  );
};

export default DocumentStep;
