import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { SUCCESFULL_LOGIN, GET_USER, ERROR_LOGIN, LOGOUT } from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthState = (props) => {
  const initialState = {
    user: null,
    authenticate: null,
    token: null,
    error: false,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (datos) => {
    try {
      const response = await clienteAxios.post("/auth/login", datos);
      dispatch({
        type: SUCCESFULL_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR_LOGIN,
      });
    }
  };
  const authUser = async () => {
    if (state.token) {
      tokenAuth(state.token);
    }
    try {
      const response = await clienteAxios.get("user/me");
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    tokenAuth({ token: null });
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        authenticate: state.authenticate,
        error: state.error,
        login,
        authUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
