import React,{useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import users from '../../data';
import { 
  SUCCESFULL_LOGIN, 
  AUTH, 
  ERROR_LOGIN
} from '../../types';

const AuthState = (props ) => {
  const initialState = {
    user: null,
    authenticate: null,
  }
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (datos) => {
    const user = users.find(( user ) => user.email === datos.email && user.password === datos.password )
    if(user){
      dispatch({
        type: SUCCESFULL_LOGIN,
        payload: user
      })
    }else{
      dispatch({
        type: ERROR_LOGIN
      })
    }
  }
  const authUser = (auth) => {
    dispatch({
      type: AUTH,
      payload: auth
    })
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
