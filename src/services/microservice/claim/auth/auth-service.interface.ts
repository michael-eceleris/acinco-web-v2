import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { IClientClaim } from "../types/claims";

export interface ILoginReqBody {
  username: string;
  password: string;
}

export interface ILoginRes {
  data: ICredentials;
}

export interface IGetMeRes {
  data: IData;
}

export interface IGetMeReqParams {
  headers?: ICredentialsInsurrance;
}

interface IData extends ICredentials {
  user: IClientClaim;
}
