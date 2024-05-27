import React, {
  Dispatch,
  useState,
  useMemo,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

interface IProps {
  children: ReactNode;
}

type IConfigModal = {
  visible: boolean;
  header: ReactNode;
  content: ReactNode;
  onAccept?: (props?: any) => void;
  titleOnAccept?: string;
};

type IContext = {
  show: IConfigModal;
  setShow: Dispatch<SetStateAction<IConfigModal>>;
};

export const ModalContext = React.createContext<IContext>({} as IContext);
export const useModalContext = () => useContext<IContext>(ModalContext);

const ModalProvider = ({ children }: IProps) => {
  const [show, setShow] = useState<IConfigModal>({
    header: <></>,
    content: <></>,
    visible: false,
  });
  const context: IContext = useMemo(
    () => ({
      show,
      setShow,
    }),
    [show],
  );
  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
