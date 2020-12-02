import { 
  SUCCESFULL_LOGIN, 
  ERROR_LOGIN, 
  AUTH
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SUCCESFULL_LOGIN:
      return {
        ...state,
        user: action.payload,
        authenticate: true,
      }
    case ERROR_LOGIN:
      return{
        ...state,
        authenticate: null,
        user: null
      }
    case AUTH:
      return{
        ...state,
        authenticate: action.payload
      }
    default:
      return state;
  }
}