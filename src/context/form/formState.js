import React, { useReducer } from "react";
import FormContext from "./formContext";
import formReducer from "./formReducer";
import {
  SELECT_DEVICE,
  SELECT_PLAN,
  SELECT_COVERAGE,
  SELECT_DOCUMENTS,
  SUBMIT_FORM,
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
} from "../../types";
import clienteAxios from "../../config/axios";

const FormState = (props) => {
  const initialState = {
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
    submit: null,
    showModal: false,
    isLoading: false,
    maxSizeDoc: 4000000,
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const getDevices = async (id) => {
    try {
      const response = await clienteAxios.get(
        `/api/v1/dispositivo/dispositivo-cliente/user/${id}`
      );
      dispatch({
        type: DEVICES_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getPlans = async (id) => {
    try {
      const response = await clienteAxios.get(
        `/api/v1/dispositivo/dispositivo-cliente-plan/dispositivo-cliente/${id}`
      );
      dispatch({
        type: PLANS_DEVICE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getCoverages = async (id) => {
    try {
      const response = await clienteAxios.get(
        `/api/v1/cobertura/tipo-cobertura-cobertura/dispositivo-cliente-plan/${id}`
      );
      const types_coverage = response.data.map(
        (cov) => cov.tipos_cobertura_cobertura
      );
      const coverages = [];
      types_coverage.map((cov) =>
        cov.length > 0 ? cov.map((cov2) => coverages.push(cov2)) : cov
      );
      dispatch({
        type: COVERAGE_PLAN,
        payload: coverages,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getDocuments = async (id) => {
    try {
      let docs = [];
      let ind = null;
      const response = await clienteAxios.get(
        `/api/v1/documento/tipo-cobertura-cobertura/${id}`
      );
      response.data.map((doc, index) =>
        doc.nombre_documento_save === "Factura de compra."
          ? (ind = index)
          : docs.push(doc)
      );
      docs[response.data.length - 1] = response.data.find((doc, index) =>
        index === ind ? doc : null
      );
      dispatch({
        type: DOCS_COVERAGE,
        payload: docs,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const selectDevice = (id) => {
    const device = state.devicesUser.find(
      (deviceId) => deviceId.id === parseInt(id)
    );
    dispatch({
      type: SELECT_DEVICE,
      payload: device,
    });
  };
  const selectPlan = (id) => {
    if (state.plansDevice) {
      const plan = state.plansDevice.find(
        (planId) => planId.id === parseInt(id)
      );
      dispatch({
        type: SELECT_PLAN,
        payload: plan,
      });
    }
  };
  const selectCoverage = (id) => {
    if (state.coveragePlans) {
      const coverage = state.coveragePlans.find((coverageId) =>
        coverageId !== undefined ? coverageId.id === id : null
      );
      dispatch({
        type: SELECT_COVERAGE,
        payload: coverage,
      });
    }
  };

  const selectDocument = (docs) => {
    dispatch({
      type: SELECT_DOCUMENTS,
      payload: docs,
    });
  };

  const selectMoreInfo = (datos) => {
    dispatch({
      type: MORE_INFO,
      payload: datos,
    });
  };
  const clearForm = () => {
    dispatch({
      type: CLEAR_FORM,
    });
  };
  const submitForm = async (data) => {
    const {
      tipo_ticket_id,
      cliente_id,
      imei_dispositivo_one,
      plan_id,
      tipo_cobertura_cobertura_id,
      mensaje_ticket,
      linea_siniestro_one,
      fecha_siniestro,
      genero_reclamante_id,
      documentos_requerido_id,
      ciudad_siniestro,
    } = data;
    var formData = new FormData();

    documentos_requerido_id.forEach((doc) => {
      formData.append(doc.id, doc.files);
    });
    formData.append("cliente_id", cliente_id);
    formData.append("imei_dispositivo_one", imei_dispositivo_one);
    formData.append("plan_id", plan_id);
    formData.append("tipo_cobertura_cobertura_id", tipo_cobertura_cobertura_id);
    formData.append("tipo_ticket_id", tipo_ticket_id);
    formData.append("mensaje_ticket", mensaje_ticket);
    formData.append("linea_siniestro_one", linea_siniestro_one);
    formData.append("fecha_siniestro", fecha_siniestro);
    formData.append("genero_reclamante_id", genero_reclamante_id);
    formData.append("ciudad_id", ciudad_siniestro);
    try {
      const result = await clienteAxios.post("/api/v1/ticket/", formData);
      dispatch({
        type: SUBMIT_FORM,
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FORM,
        payload: error.response,
      });
    }
  };
  const nextStep = (id) => {
    dispatch({
      type: NEXT_STEP,
      payload: id,
    });
  };

  const previusStep = (id) => {
    dispatch({
      type: PREVIUS_STEP,
      payload: id,
    });
  };

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  const loading = (data) => {
    dispatch({
      type: LOADING,
      payload: data,
    });
  };
  return (
    <FormContext.Provider
      value={{
        device: state.device,
        devicesUser: state.devicesUser,
        plan: state.plan,
        plansDevice: state.plansDevice,
        coverage: state.coverage,
        coveragePlans: state.coveragePlans,
        documentsCoverage: state.documentsCoverage,
        documents: state.documents,
        moreInfo: state.moreInfo,
        step: state.step,
        submit: state.submit,
        showModal: state.showModal,
        isLoading: state.isLoading,
        maxSizeDoc: state.maxSizeDoc,
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
        openModal,
        closeModal,
        loading,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormState;
