import React, { useReducer, useContext } from 'react';
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
  MORE_INFO,
  NEXT_STEP,
  PREVIUS_STEP,
  DEVICES_USER,
  PLANS_DEVICE,
  COVERAGE_PLAN,
  DOCS_COVERAGE
} from '../../types';

import document from '../../data/documents.json';
import clienteAxios from '../../config/axios';

const FormState = (props) => {
  const initialState = {
    userId: null,
    device: null,
    devicesUser: null,
    plan: null,
    plansDevice: null,
    coverage: null,
    coveragePlans: null,
    documents: [],
    documentsCoverage: [],
    moreInfo:{},
    step: 0,
  }
  const [state, dispatch ] = useReducer(formReducer, initialState);

  const getDevices = async (id) => {
    try {
      const response = await clienteAxios.get(`/dispositivo/dispositivo-cliente/user/${id}`)
      dispatch({
        type: DEVICES_USER,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getPlans =  async (id) => {
    try {
      const response = await  clienteAxios.get(`/dispositivo/dispositivo-cliente-plan/dispositivo-cliente/${id}`)
      dispatch({
        type: PLANS_DEVICE,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
  const getCoverages = async(id) => {
    try {
      const response = await clienteAxios.get(`/cobertura/tipo-cobertura-cobertura/dispositivo-cliente-plan/${id}`);
      console.log(response)
      dispatch({
        type: COVERAGE_PLAN,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
    /* const selectPlan = plans.find( planId => planId.id === id);
    const plansCoverage = selectPlan.cobertura.map(coverages => coverages.coberturaPlan);
    const coverage = coverages.filter( cov => cov.id === plansCoverage[0]);
    dispatch({
      type: COVERAGE_PLAN,
      payload: coverage
    }) */
  }
  const getDocuments = (id) => {
    /* const docs = document.find(doc => doc.coverageId === id);
    dispatch({
      type: DOCS_COVERAGE,
      payload: docs.documents
    }) */
  }
  const selectDevice = (id) => {
    const device = state.devicesUser.find(deviceId => deviceId.id == id);
    dispatch({
      type: SELECT_DEVICE,
      payload: device,
    })
  }
  const selectPlan = (id) => {
    if(state.plansDevice) {
      const plan = state.plansDevice.find( planId => planId.id == id);
      dispatch({
        type: SELECT_PLAN,
        payload: plan
      })
    }
  }
  const selectCoverage = (id) => {
    if(state.coveragePlans){
      const coverage = state.coveragePlans.find(coverageId => coverageId.nombre === id);
      dispatch({
        type: SELECT_COVERAGE,
        payload: coverage,
      }) 
    }
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
  const nextStep = (id) => {
    dispatch({
      type: NEXT_STEP, 
      payload: id
    })
  }

  const previusStep = (id) => {
    dispatch({
      type: PREVIUS_STEP,
      payload: id,
    })
  }
  return(
    <FormContext.Provider
      value={{
        device: state.device,
        devicesUser : state.devicesUser,
        plan: state.plan,
        plansDevice: state.plansDevice,
        coverage: state.coverage,
        coveragePlans: state.coveragePlans,
        documentsCoverage: state.documentsCoverage,
        documents: state.documents,
        moreInfo: state.moreInfo,
        step: state.step,
        selectDevice,
        selectPlan,
        selectCoverage,
        selectDocument,
        selectMoreInfo,
        clearForm,
        submitForm,
        nextStep,
        previusStep,
        getDevices,
        getPlans,
        getCoverages,
        getDocuments,
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}
export default FormState;