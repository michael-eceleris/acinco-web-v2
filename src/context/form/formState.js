import React, { useReducer } from 'react';
import FormContext from './formContext';
import formReducer from './formReducer';
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

const FormState = (props) => {
  const initialState = {
    userId: null,
    device: null,
    plan: null,
    coverage: null,
    documents: [],
    moreInfo:{}
  }
  const [state, dispatch ] = useReducer(formReducer, initialState);
  const selectDevice = (id) => {
    dispatch({
      type: SELECT_DEVICE,
      payload: id
    })
  }
  const selectPlan = (id) => {
    dispatch({
      type: SELECT_PLAN,
      payload: id
    })
  }
  const selectCoverage = (id) => {
    dispatch({
      type: SELECT_COVERAGE,
      payload: id
    })
  }

  const selectDocument = (docs) => {
    dispatch({
      type: SELECT_DOCUMENTS,
      payload: docs
    })
  }
  
  const selectMoreInfo = (datos) => {
    dispatch({
      type: MORE_INFO,
      payload: datos
    })
  }
  const clearForm = () => {
    dispatch({
      type: CLEAR_FORM
    })
  }
  const submitForm = (e,id) => {
    e.preventDefault()
    state.userId= id
    console.log(state)
  }
  return(
    <FormContext.Provider
      value={{
        device: state.device,
        plan: state.plan,
        coverage: state.coverage,
        documents: state.documents,
        moreInfo: state.moreInfo,
        selectDevice,
        selectPlan,
        selectCoverage,
        selectDocument,
        selectMoreInfo,
        clearForm,
        submitForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}
export default FormState;