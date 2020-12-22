import {
  SUCCESFULL_LOGIN,
  ERROR_LOGIN,
  GET_USER,
  LOGOUT,
  ERROR_USER,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case SUCCESFULL_LOGIN:
      return {
        ...state,
        token: action.payload,
        authenticate: true,
        error: false,
      };
    case ERROR_USER:
      return {
        ...state,
        errorUser: action.payload,
        authenticate: null,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        authenticate: null,
        user: null,
        error: true,
      };
    case GET_USER:
      return {
        ...state,
        authenticate: true,
        user: action.payload,
        error: false,
        errorUser: null,
      };
    case LOGOUT:
      return {
        ...state,
        authenticate: null,
        user: null,
        token: null,
        error: false,
      };
    default:
      return state;
  }
};
export default authReducer;
