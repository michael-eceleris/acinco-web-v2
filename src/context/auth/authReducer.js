import { 
  SUCCESFULL_LOGIN, 
  ERROR_LOGIN, 
  AUTH,
  GET_USER
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SUCCESFULL_LOGIN:
      return {
        ...state,
        token: action.payload,
        authenticate: true,
      }
    case ERROR_LOGIN:
      return{
        ...state,
        authenticate: null,
        user: null
      }
    case GET_USER:
      return{
        ...state,
        authenticate: true,
        user: action.payload,
      }
    default:
      return state;
  }
}