import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ICredentials, ICredentialsInsurrance } from "./types/authorization";

import {
  IClientInsurrance,
  IDeviceUserInsurrance,
  IPolicyDeviceUserInsurrance,
  ICoverageDevicePlanUser,
  IDocumentsCoveragesInsurrance,
} from "./types/claims";

interface IProps {
  children: ReactNode;
}

type IContext = {
  client: IClientInsurrance | null;
  devices: IDeviceUserInsurrance[];
  plans: IPolicyDeviceUserInsurrance[];
  currentPlan: IPolicyDeviceUserInsurrance | undefined | null;
  coverages: ICoverageDevicePlanUser[];
  documents: IDocumentsCoveragesInsurrance[];
  headers: ICredentials;
  headersInsurrance: ICredentialsInsurrance;
  isLoadingSubmit: boolean;
  setDevices: Dispatch<SetStateAction<IDeviceUserInsurrance[]>>;
  setClient: Dispatch<SetStateAction<IClientInsurrance | null>>;
  setPlans: Dispatch<SetStateAction<IPolicyDeviceUserInsurrance[]>>;
  setCurrentPlan: Dispatch<
    SetStateAction<IPolicyDeviceUserInsurrance | undefined | null>
  >;
  setCoverages: Dispatch<SetStateAction<ICoverageDevicePlanUser[]>>;
  setDocuments: Dispatch<SetStateAction<IDocumentsCoveragesInsurrance[]>>;
  setIsLoadingSubmit: Dispatch<SetStateAction<boolean>>;
  setHeaders: Dispatch<SetStateAction<ICredentials>>;
  setHeadersInsurrance: Dispatch<SetStateAction<ICredentialsInsurrance>>;
};

export const ReclamationContext = React.createContext<IContext>({} as IContext);
export const useReclamationContext = () =>
  useContext<IContext>(ReclamationContext);

const ReclamationProvider = ({ children }: IProps) => {
  const [plans, setPlans] = useState<IPolicyDeviceUserInsurrance[]>([]);
  const [client, setClient] = useState<IClientInsurrance | null>(null);
  const [devices, setDevices] = useState<IDeviceUserInsurrance[]>([]);
  const [coverages, setCoverages] = useState<ICoverageDevicePlanUser[]>([]);
  const [documents, setDocuments] = useState<IDocumentsCoveragesInsurrance[]>(
    [],
  );
  const [headers, setHeaders] = useState<ICredentials>({
    refreshToken: "",
    accessToken: "",
  });
  const [headersInsurrance, setHeadersInsurrance] =
    useState<ICredentialsInsurrance>({
      token: "",
      type: "",
    });
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const [currentPlan, setCurrentPlan] = useState<
    IPolicyDeviceUserInsurrance | undefined | null
  >(null);

  const context: IContext = useMemo(
    () => ({
      client,
      devices,
      plans,
      coverages,
      documents,
      headers,
      headersInsurrance,
      isLoadingSubmit,
      currentPlan,
      setClient,
      setDevices,
      setPlans,
      setCoverages,
      setDocuments,
      setIsLoadingSubmit,
      setHeaders,
      setHeadersInsurrance,
      setCurrentPlan,
    }),
    [
      plans,
      client,
      devices,
      coverages,
      documents,
      isLoadingSubmit,
      headers,
      headersInsurrance,
      currentPlan,
    ],
  );

  return (
    <ReclamationContext.Provider value={context}>
      {children}
    </ReclamationContext.Provider>
  );
};

export default ReclamationProvider;
