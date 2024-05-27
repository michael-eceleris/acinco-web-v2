import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { ICoveragePlanDeviceUserClaim } from "../types/claims";

export interface IListCoveragePlanReqBody {}

export interface IListCoveragePlanReqParams {
  planId: string | number | undefined;
  headers?: ICredentialsInsurrance;
}

export interface IListCoveragePlanRes {
  data: IData;
}

interface IData extends ICredentials {
  coverages: ICoveragePlanDeviceUserClaim[];
}
