import React, { useState } from "react"
import { createContext } from "react";
import { useContext } from "react";

const StepperComercioContext = createContext();

export const StepperComercioProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState(null)
  return (
    <StepperComercioContext.Provider 
      value={{
        currentStep,
        setCurrentStep,
        userInfo,
        setUserInfo
      }}
      children={children}
    />
  )
}

export const useStepperComercio = () => {
  const stepper = useContext(StepperComercioContext);
  return stepper;
}