import { useState, useContext } from "react";
import styled from "styled-components";

import AuthContext from "../context/auth/authContext";
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

const ButtonLink = styled.a`
  color: ${props => props.bgColor};
  :hover{
    color: ${props => props.bgColor};
  }
`;

const CustomH4 = styled.h4`
  color: ${props => props.bgColor};
  text-transform: ${props => props.uppercase ? "uppercase" : ""};
`;

const Form = ( { colorPrimary, allUppercase, privacyPolicyPersonalData }) => {
  const authContext = useContext(AuthContext);
  const { error, errorUser, authenticate, login, authUser } = authContext;
  const formContext = useContext(FormContext);
  const { loading, nextStep, isLoading } = formContext;
  const [userLocal, setUserLocal] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userLocal;
  const [errorEmpty, setErrorEmpty] = useState(false);
  const onChange = (e) => {
    setUserLocal({
      ...userLocal,
      [e.target.name]: e.target.value,
    });
  };
  const [handleClose, setHandleClose] = useState(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setHandleClose(true);
    if (username.trim() === "" || password.trim() === "") {
      setErrorEmpty(true);
    } else {
      loading(true);
      login({
        ...userLocal,
        [e.target.name]: e.target.value,
      });
      setTimeout(() => {
        loading(false);
      }, 1500);
      authUser();
      setErrorEmpty(false);
    }
  };
  return (
    <>
      {errorEmpty && handleClose ? (
        <div className="alert alert-danger">
          <button
            onClick={() => {
              setHandleClose(false);
            }}
            className="position-absolute right-0 top-0 btn btn-sm btn-icon"
          >
            <i className="fi fi-close "></i>
          </button>
          Todos los campos son obligatorios
        </div>
      ) : null}
      {error && !errorEmpty && !isLoading && handleClose ? (
        <div className="alert alert-danger">
          <button
            onClick={() => {
              setHandleClose(false);
            }}
            className="position-absolute right-0 top-0 btn btn-sm btn-icon"
          >
            <i className="fi fi-close "></i>
          </button>
          <p>Número de identificación o correo electrónico incorrecto.</p>
          <p className="mb-0">
            Si el problema continúa comunícate en Bogotá 4898599, para el resto
            de Colombia 01 8000 513 323 o WhatsApp +57 1 5142355
          </p>
        </div>
      ) : null}
      {errorUser === 500 && !isLoading && handleClose ? (
        <div className="alert alert-danger">
          <button
            onClick={() => {
              setHandleClose(false);
            }}
            className="position-absolute right-0 top-0 btn btn-sm btn-icon"
          >
            <i className="fi fi-close "></i>
          </button>
          Ocurrio un problema, lo sentimos. <br /> Por favor comunicate en
          Bogotá 4898599, para el resto de Colombia 01 8000 513 323 o WhatsApp
          +57 1 5142355
        </div>
      ) : null}
      <div className="container p-2 w-50 tablelogin">
        <CustomH4 bgColor={colorPrimary} uppercase={allUppercase}>Identifícate</CustomH4>
        <p className="fs--17">Identifícate para saber quién eres</p>
        <form onSubmit={handleOnSubmit} className="collapse bs-validate show">
          <div className="form-label-group mb-3  ml-auto mr-auto">
            <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              placeholder="Número de identificación"
              value={username}
              pattern="[0-9]{0,10}"
              onChange={onChange}
            />
            <label htmlFor="username">Número de identificación</label>
          </div>
          <div className="form-label-group mb-3 ml-auto mr-auto">
            <input
              className="form-control"
              id="password"
              name="password"
              type="text"
              placeholder="Correo electrónico"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password">Correo electrónico</label>
          </div>
          <div className="d-flex justify-content-center">
            <ButtonSubmit
              type="submit"
              className={`btn btn-sm ${colorPrimary ? "" : "btn-primary"} justify-content-between`}
              disabled={isLoading}
              bgColor={colorPrimary}
            >
              Inicia Sesión
              {isLoading ? (
                <i
                  className="spinner-border spinner-border-sm ml-2 mr-0 mb--3"
                  role="status"
                  aria-hidden="true"
                ></i>
              ) : null}
            </ButtonSubmit>
          </div>
        </form>
      </div>
      {privacyPolicyPersonalData &&  
        <p className="fs--12 mb-1 mt-1 text-center textcustom h6-xs mt-0">
          * Tus datos están protegidos mediante nuestra política de protección de datos, revisala {" "}
          <ButtonLink
            className="link-muted btn_link "
            href={privacyPolicyPersonalData}
            bgColor={colorPrimary}
            target="_blank"
          >
            aquí
          </ButtonLink>
          .
        </p>
        }
      {authenticate && userLocal && error !== 500 ? nextStep(1) : null}
    </>
  );
};
export default Form;
