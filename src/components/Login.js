import { useState, useContext } from "react";

import AuthContext from "../context/auth/authContext";
import FormContext from "../context/form/formContext";

const Form = () => {
  const authContext = useContext(AuthContext);
  const { error, errorUser, authenticate, login, authUser } = authContext;
  const formContext = useContext(FormContext);
  const { nextStep } = formContext;
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      console.log("todos lo campos son necesarios");
      setErrorEmpty(true);
    } else {
      setErrorEmpty(false);
      login({
        ...userLocal,
        [e.target.name]: e.target.value,
      });
      authUser();
    }
  };
  return (
    <>
      {errorEmpty ? (
        <div className="alert alert-danger">
          Todos los campos son obligatorios
        </div>
      ) : null}
      {error && !errorEmpty ? (
        <>
          <div className="alert alert-danger">
            Usuario o contraseña incorrecta.
          </div>
          <div className="alert alert-danger">
            Comunicate en Bogotá 4898599, para el resto de Colombia 01 8000 513
            323 o WhatsApp +57 1 5142355
          </div>
        </>
      ) : null}
      {errorUser === 500 ? (
        <>
          <div className="alert alert-danger">
            Ocurrio un problema, lo sentimos.
          </div>
          <div className="alert alert-danger">
            Comunicate en Bogotá 4898599, para el resto de Colombia 01 8000 513
            323 o WhatsApp +57 1 5142355
          </div>
        </>
      ) : null}
      <div className="container p-2 w-50">
        <h4>Identíficate</h4>
        <p className="fs--17">Identíficate para saber quien eres</p>
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
            <button type="submit" className="btn btn-sm btn-primary">
              Inicia Sesión
            </button>
          </div>
        </form>
      </div>
      {authenticate && userLocal && error !== 500 ? nextStep(1) : null}
    </>
  );
};
export default Form;
