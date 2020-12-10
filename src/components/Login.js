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
    <div className="col-12 col-lg-12 mb-3">
      <div className="portlet">
        {error ? (
          <div className="alert alert-danger">
            Usuario o contraseña incorrecta
          </div>
        ) : null}
        <div className="portlet-header border-bottom">
          <h4>Identíficate</h4>
        </div>
        <div className="portlet-body">
          <p className="fs--17">Identíficate para saber quien eres</p>
          <div className="container w-50">
            <form
              onSubmit={handleOnSubmit}
              className="collapse bs-validate show"
            >
              <div className="p-5 ">
                <div className="form-label-group mb-3">
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
                <div className="form-label-group mb-3">
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
                <button type="submit" className="btn btn-block btn-primary">
                  Inicia Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {authenticate && user && !error ? nextStep(1) : null}
    </div>
  );
};
export default Form;
