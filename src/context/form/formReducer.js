import {
  SELECT_DEVICE,
  SELECT_PLAN,
  SELECT_COVERAGE,
  SELECT_DOCUMENTS,
  SUBMIT_FORM,
  ERROR_SELECT,
  ERROR_FORM,
  CLEAR_FORM,
  MORE_INFO,
  NEXT_STEP,
  PREVIUS_STEP,
  DEVICES_USER,
  PLANS_DEVICE,
  COVERAGE_PLAN,
  DOCS_COVERAGE
} from '../../types';

export default (state, action) => {
  switch (action.type){
    case DEVICES_USER:
      return {
        ...state,
        devicesUser: action.payload,
      }
    case PLANS_DEVICE:
      return {
        ...state,
        plansDevice: action.payload,
      }
    case COVERAGE_PLAN:
      return {
        ...state,
        coveragePlans: action.payload,
      }
    case DOCS_COVERAGE:
      return {
        ...state,
        documentsCoverage: action.payload,
      }
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
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload,
      }
    case PREVIUS_STEP:
      return{
        ...state,
        step: action.payload
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
        devicesUser: null,
        plan: null,
        plansDevice: null,
        coverage: null,
        coveragePlans: null,
        documents: null,
        documentsCoverage: null,
        moreInfo:null,
        step: 0,
      }
    default:
      return state;
  }
}