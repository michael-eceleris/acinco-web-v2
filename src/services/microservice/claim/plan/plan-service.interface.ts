import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { IPolicyDeviceUserClaim } from "../types/claims";

export interface IListPlanReqBody {}

export interface IListPlanReqParams {
  deviceId: string | number | undefined;
  headers?: ICredentialsInsurrance;
}

export interface IListPlanRes {
  data: IData;
}

interface IData extends ICredentials {
  policies: IPolicyDeviceUserClaim[];
}
