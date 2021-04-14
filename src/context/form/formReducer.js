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
  DOCS_COVERAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
  LOADING,
  SEND_CONTACT_US,
  ERROR_CONTACT_US,
} from "../../types";
const formReducer = (state, action) => {
  switch (action.type) {
    case DEVICES_USER:
      return {
        ...state,
        devicesUser: action.payload,
      };
    case PLANS_DEVICE:
      return {
        ...state,
        plansDevice: action.payload,
      };
    case COVERAGE_PLAN:
      return {
        ...state,
        coveragePlans: action.payload,
      };
    case DOCS_COVERAGE:
      return {
        ...state,
        documentsCoverage: action.payload,
        documents: action.payload.map(
          (doc, index) =>
            (state.documents[index] = {
              id: doc.id,
              nombre_documento_save: doc.nombre_documento_save,
              files: null,
              error: null,
              required: doc.required,
            })
        ),
      };
    case SELECT_DEVICE:
      return {
        ...state,
        device: action.payload,
      };
    case SELECT_PLAN:
      return {
        ...state,
        plan: action.payload,
      };
    case SELECT_COVERAGE:
      return {
        ...state,
        coverage: action.payload,
      };
    case SELECT_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
      };
    case MORE_INFO:
      return {
        ...state,
        moreInfo: action.payload,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        submit: action.payload,
        showModal: true,
        isLoading: false,
      };
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case PREVIUS_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SEND_CONTACT_US:
      return {
        ...state,
        isLoading: false,
        showModal: true,
        submitContact: action.payload,
      };
    case ERROR_CONTACT_US:
      return {
        ...state,
        isLoading: false,
      };
    case ERROR_SELECT:
    case ERROR_FORM:
      return {
        ...state,
        submit: action.payload,
        showModal: true,
        isLoading: false,
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        product: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        submit: null,
        product: null,
        submitContact: null,
      };
    case CLEAR_FORM:
      return {
        ...state,
        device: null,
        devicesUser: null,
        plan: null,
        plansDevice: null,
        coverage: null,
        coveragePlans: null,
        documents: [],
        documentsCoverage: null,
        moreInfo: null,
        step: 0,
      };
    default:
      return state;
  }
};
export default formReducer;
