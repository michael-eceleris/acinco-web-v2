import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";

import clientAxios from "../../../../config/axios";

const StepperComercioContext = createContext();

export const StepperComercioProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [documentTypes, setDocumentTypes] = useState(null);
  const [genders, setGenders] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [interceptors, setInterceptors] = useState(null);
  const [policy, setPolicy] = useState(null);
  const [isErrorModal, setIsErrorModal] = useState(false);

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

  const resetForm = () => {
    setInterceptors(null);
    setPolicy(null);
    setUserInfo(null);
  };

  return (
    <StepperComercioContext.Provider
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
      }}
      children={children}
    />
  );
};

export const useStepperComercio = () => {
  const stepper = useContext(StepperComercioContext);
  return stepper;
};
