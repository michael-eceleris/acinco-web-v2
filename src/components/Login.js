import { useState, useContext } from "react";

import AuthContext from "../context/auth/authContext";
import FormContext from "../context/form/formContext";

const Form = () => {
  const authContext = useContext(AuthContext);
  const { user, error, errorUser, authenticate, login, authUser } = authContext;
  const formContext = useContext(FormContext);
  const { nextStep } = formContext;
  const [userLocal, setUserLocal] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userLocal;

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
    }
    login({
      ...userLocal,
      [e.target.name]: e.target.value,
    });
    authUser();
  };
  return (
    <>
      {error ? (
        <div className="alert alert-danger">
          Usuario o contraseña incorrecta
        </div>
      ) : null}
      {errorUser === 500 || errorUser === 403 ? (
        <div className="alert alert-danger">
          Ocurrio un problema, lo sentimos
        </div>
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
              type="email"
              placeholder="Email"
              value={username}
              onChange={onChange}
            />
            <label htmlFor="username">Email</label>
          </div>
          <div className="form-label-group mb-3 ml-auto mr-auto">
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-sm btn-primary">
              Inicia Sesión
            </button>
          </div>
        </form>
      </div>
      {authenticate && userLocal && !error && user ? nextStep(1) : null}
    </>
  );
};
export default Form;
