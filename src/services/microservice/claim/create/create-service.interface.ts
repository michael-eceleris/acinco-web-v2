import { ICredentials, ICredentialsClaims } from "../../types/authorization";

export interface ICreateClaimReqBody {
  principalIMEI: string | null | undefined;
  planID: number | undefined;
  coverageID: number | undefined;
  message: string | null;
  phoneAccident: string | null;
  dateAccident: string;
  genderID: number | undefined;
  cityID: number | undefined;
}

export interface ICreateClaimReqParams {
  headers?: ICredentialsClaims;
}

export interface ICreateClaimRes {
  data: IData;
}

interface IData extends ICredentials {
  claim: {
    id: number;
  };
  error: {
    id_system: "TICKETINPROCESS";
  };
}
