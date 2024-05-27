import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { IClientClaim } from "../types/claims";

export interface ILoginReqBody {
  username: string;
  password: string;
}

export interface ILoginRes {
  data: ICredentialsClaims;
}

export interface IGetMeRes {
  data: IData;
}

export interface IGetMeReqParams {
  headers?: ICredentialsClaims;
}

interface IData extends ICredentials {
  user: IClientClaim;
}
