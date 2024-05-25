import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type IContext = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

interface IProps {
  children: ReactNode;
}

export const StepContext = React.createContext<IContext>({} as IContext);
export const useStepContext = () => useContext<IContext>(StepContext);

const StepProvider = ({ children }: IProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const context: IContext = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
    }),
    [currentStep],
  );

  return (
    <StepContext.Provider value={context}>{children}</StepContext.Provider>
  );
};

export default StepProvider;
