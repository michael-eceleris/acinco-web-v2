import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { IDeviceUserClaim } from "../types/claims";

export interface IListDeviceReqBody {}

export interface IListDeviceReqParams {
  userId: string | number | undefined;
  headers?: ICredentialsInsurrance;
}

export interface IListDeviceRes {
  data: IData;
}

interface IData extends ICredentials {
  devices: IDeviceUserClaim[];
}
