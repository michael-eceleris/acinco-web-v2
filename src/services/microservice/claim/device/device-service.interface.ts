import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { IDeviceUserClaim } from "../types/claims";

export interface IListDeviceReqBody {}

export interface IListDeviceReqParams {
  userId: string | number | undefined;
  headers?: ICredentialsClaims;
}

export interface IListDeviceRes {
  data: IData;
}

interface IData extends ICredentials {
  devices: IDeviceUserClaim[];
}
