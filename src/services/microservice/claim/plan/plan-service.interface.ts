import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { IPolicyDeviceUserClaim } from "../types/claims";

export interface IListPlanReqBody {}

export interface IListPlanReqParams {
  deviceId: string | number | undefined;
  headers?: ICredentialsClaims;
}

export interface IListPlanRes {
  data: IData;
}

interface IData extends ICredentials {
  policies: IPolicyDeviceUserClaim[];
}
