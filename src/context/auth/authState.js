import React,{useContext, useReducer, useEffect } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import users from '../../data';
import { 
  SUCCESFULL_LOGIN, 
  GET_USER, 
  ERROR_LOGIN
} from '../../types';
import FormContext from '../form/formContext';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = (props ) => {
  const formContext = useContext(FormContext);
  const { getDevices } = formContext;
  const initialState = {
    user: null,
    authenticate: null,
    token: null,
  }
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  const login = async (datos) => {
    try {
      const response = await clienteAxios.post('/auth/login', datos);
      dispatch({
          type: SUCCESFULL_LOGIN,
          payload: response.data,
        });
    }catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_LOGIN
      })
    }
  }
  const authUser = async () => {
    if(state.token) {
      tokenAuth(state.token);
    }
    try {
      const response  = await clienteAxios.get('user/me')
      dispatch({
        type: GET_USER,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <AuthContext.Provider
      value={{
        user: state.user,
        authenticate: state.authenticate,
        login,
        authUser
      }}    
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthState;
