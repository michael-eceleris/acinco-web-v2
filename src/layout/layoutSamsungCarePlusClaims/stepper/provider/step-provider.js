import React, { useState, createContext, useContext, useEffect } from "react";

import clientAxios from "../../../../config/axios";
import microServiceAxios from "../config/axios";

const StepperClaimsSamsungCarePlusContext = createContext();

export const StepperClaimsSamsungCarePlusProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [documentTypes, setDocumentTypes] = useState(null);
  const [genders, setGenders] = useState(null);
  const [cities, setCities] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [interceptors, setInterceptors] = useState(null);
  const [policy, setPolicy] = useState(null);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [currentDevice, setCurrentDevice] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [currentCoverage, setCurrentCoverage] = useState(null);
  const [currentDocuments, setCurrentDocuments] = useState(null);
  const [currentMoreInfo, setCurrentMoreInfo] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await clientAxios.get("/api/v1/user/gender");
        if (response.status === 200) {
          setGenders(response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await clientAxios.get(
          "/api/v1/user/identification-type"
        );
        if (response.status === 200) {
          let data = response.data.data.map((d) => {
            if (d.name === "CC") {
              return {
                ...d,
                customName: "Cédula de Ciudadanía",
              };
            } else if (d.name === "CE") {
              return {
                ...d,
                customName: "Cédula de Extranjería",
              };
            } else {
              return d;
            }
          });
          setDocumentTypes(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await clientAxios.get("/api/v1/shared/city");
        if (response.status === 200) {
          setCities(response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await microServiceAxios.get(`/api/v1/claim/user`, {
          headers: {
            Authorization: `${interceptors.type} ${interceptors.token}`,
          },
        });
        setUserInfo(response.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, [interceptors]);

  const resetForm = () => {
    setInterceptors(null);
    setPolicy(null);
    setUserInfo(null);
  };

  return (
    <StepperClaimsSamsungCarePlusContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userInfo,
        setUserInfo,
        documentTypes,
        genders,
        showModal,
        setShowModal,
        interceptors,
        setInterceptors,
        policy,
        setPolicy,
        isErrorModal,
        setIsErrorModal,
        resetForm,
        currentDevice,
        setCurrentDevice,
        currentPlan,
        setCurrentPlan,
        currentCoverage,
        setCurrentCoverage,
        currentDocuments,
        setCurrentDocuments,
        cities,
        setCities,
        currentMoreInfo,
        setCurrentMoreInfo,
      }}
      children={children}
    />
  );
};

export const useStepperClaimsSamsung = () => {
  const stepper = useContext(StepperClaimsSamsungCarePlusContext);
  return stepper;
};
