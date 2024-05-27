import { ICredentialsClaims } from "../../types/authorization";
import { IClientClaim } from "../types/claims";

export interface ILoginReqBody {
  username: string;
  password: string;
}

export interface ILoginRes {
  data: ICredentialsClaims;
}

export interface IGetMeRes {
  data: IClientClaim;
}

export interface IGetMeReqParams {
  headers?: ICredentialsClaims;
}
