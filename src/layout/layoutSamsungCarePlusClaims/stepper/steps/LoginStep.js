import { useState, Fragment } from "react";
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

const CustomH4 = styled.h4`
  color: ${(props) => props.bgColor};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;

const LabelCheckbox = styled.label`
  > input[type="checkbox"]:checked + i {
    background: "#000000" !important;
  }
`;

const LoginStep = ({
  colorPrimary,
  allUppercase,
  privacyPolicyPersonalData,
}) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentStep, setInterceptors, setUserInfo } =
    useStepperClaimsSamsung();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    setIsLoading((prevState) => !prevState);
    microServiceAxios
      .post("/api/v1/claim/auth", {
        password: values.password,
        username: values.username,
      })
      .then((res) => {
        if (res) {
          setInterceptors(res.data.data);
          setUserInfo({
            ...values,
          });
          setIsLoading((prevState) => !prevState);
          setCurrentStep((prevState) => prevState + 1);
        }
      })
      .catch((err) => {
        setError({
          message: "Lo sentimos, ocurrió un problema",
        });
        setIsLoading((prevState) => !prevState);
      });
  };
  return (
    <Fragment>
      {error && !isLoading && (
        <div className="alert alert-danger">
          <button
            onClick={() => {
              setError((prevState) => !prevState);
            }}
            className="position-absolute right-0 top-0 btn btn-sm btn-icon"
          >
            <i className="fi fi-close "></i>
          </button>
          <p>{error.message}.</p>
          <p className="mb-0 fs--15">
            Si el problema continúa comunícate en Bogotá 601 3905567, para el
            resto de Colombia 01 8000 513 323 o WhatsApp +57 1 5142355
          </p>
        </div>
      )}

      <div className="container p-2 w-50 tablelogin">
        <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>
          Identifícate
        </CustomH4>
        <p className="fs--17">Identifícate para saber quién eres</p>
        <form className="collapse bs-validate show">
          <div className="form-label-group mb-3 ml-auto mr-auto">
            <input
              {...register("username", {
                required: {
                  value: true,
                  message: "* Requerido",
                },
                pattern: "[0-9]{0,10}",
              })}
              className="form-control"
              type="text"
              placeholder="Número de identificación"
            />
            <label htmlFor="username">Número de identificación</label>
            {errors && errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
          <div className="form-label-group mb-3 ml-auto mr-auto">
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "* Requerido",
                },
              })}
              className="form-control"
              type="text"
              placeholder="Correo electrónico"
            />
            <label htmlFor="password">Correo electrónico</label>
            {errors && errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <LabelCheckbox className="form-checkbox">
            <input
              {...register("confirm", {
                required: {
                  value: true,
                  message: "* Requerido",
                },
              })}
              id="confirm"
              name="confirm"
              type="checkbox"
            />
            <i></i>Acepta{" "}
            <a
              className=""
              href="https://files-statics-protegeme.s3.amazonaws.com/P1648+EQUIPOS+TELEFONIA+CELULAR_MAR+2022.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ whiteSpace: "nowrap", color: "black" }}
            >
              términos y condiciones.
            </a>
          </LabelCheckbox>
          {errors && errors.confirm && (
            <p className="text-danger">{errors.confirm.message}</p>
          )}
          <p className="fs--13 mb-1">
            <a
              className=""
              href="https://files-statics-protegeme.s3.amazonaws.com/Politica+deprotecciondedatos-min.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ whiteSpace: "nowrap", color: "black" }}
            >
              Política de tratamiento de datos.
            </a>
          </p>
          <p className="fs--13">
            Este proceso se realiza mediante la aseguradora AXA Colpatria.
          </p>
          <div className="d-flex justify-content-center">
            <ButtonSubmit
              type="submit"
              className={`btn btn-sm ${
                colorPrimary ? "" : "btn-primary"
              } justify-content-between`}
              disabled={isLoading}
              bgColor={colorPrimary}
              onClick={handleSubmit(onSubmit)}
            >
              Inicia Sesión
              {isLoading && (
                <i
                  className="spinner-border spinner-border-sm ml-2 mr-0 mb--3"
                  role="status"
                  aria-hidden="true"
                ></i>
              )}
            </ButtonSubmit>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginStep;
