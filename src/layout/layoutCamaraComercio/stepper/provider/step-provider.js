import React, { useState } from "react"
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

  useEffect(()=>{
    const fetchApi = async () => {
      try {
        const response = await clientAxios.get("/api/v1/user/gender");
        if(response.status === 200){
          setGenders(response.data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchApi();
  },[])

  useEffect(()=>{
    const fetchApi = async () => {
      try {
        const response = await clientAxios.get("/api/v1/user/identification-type");
        if(response.status === 200){
          setDocumentTypes(response.data.data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchApi();
  },[])

  return (
    <StepperComercioContext.Provider 
      value={{
        currentStep,
        setCurrentStep,
        userInfo,
        setUserInfo,
        documentTypes,
        genders,
      }}
      children={children}
    />
  )
}

export const useStepperComercio = () => {
  const stepper = useContext(StepperComercioContext);
  return stepper;
}