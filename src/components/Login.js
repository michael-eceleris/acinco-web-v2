import { useState, useContext } from "react";

import AuthContext from "../context/auth/authContext";
import FormContext from "../context/form/formContext";

const Form = () => {
  const authContext = useContext(AuthContext);
  const { error, authenticate, login, authUser } = authContext;
  const formContext = useContext(FormContext);
  const { nextStep } = formContext;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      console.log("todos lo campos son necesarios");
    }
    login({
      ...user,
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
      <div className="container p-2">
        <h4>Identíficate</h4>
        <p className="fs--17">Identíficate para saber quien eres</p>
        <form onSubmit={handleOnSubmit} className="collapse bs-validate show">
          <div className="form-label-group mb-3 w-75 ml-auto mr-auto">
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
          <div className="form-label-group mb-3 w-75 ml-auto mr-auto">
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
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-sm btn-primary">
              Inicia Sesión
            </button>
          </div>
        </form>
      </div>
      {authenticate && user && !error ? nextStep(1) : null}
    </>
  );
};
export default Form;
