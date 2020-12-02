import {
  SELECT_DEVICE,
  SELECT_PLAN,
  SELECT_COVERAGE,
  SELECT_DOCUMENTS,
  SUBMIT_FORM,
  ERROR_SELECT,
  ERROR_FORM,
  CLEAR_FORM,
  MORE_INFO
} from '../../types';

export default (state, action) => {
  switch (action.type){
    case SELECT_DEVICE:
      return {
        ...state,
        device: action.payload
      }
    case SELECT_PLAN:
      return {
        ...state,
        plan: action.payload
      }
    case SELECT_COVERAGE:
      return {
        ...state,
        coverage: action.payload
      }
    case SELECT_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
      }
    case MORE_INFO:
      return {
        ...state,
        moreInfo: action.payload,
      }
    case SUBMIT_FORM:
      return {
        ...state,
      }
    case ERROR_SELECT:
      return {
        ...state,
      }
    case ERROR_FORM:
      return {
        ...state,
      }
    case CLEAR_FORM:
      return {
        ...state,
        device: null,
        plan: null,
        coverage: null,
        documents: null,
      }
    default:
      return state;
  }
}