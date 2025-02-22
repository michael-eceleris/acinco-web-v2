import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { ICoveragePlanDeviceUserClaim } from "../types/claims";

export interface IListCoveragePlanReqBody {}

export interface IListCoveragePlanReqParams {
  planId: string | number | undefined;
  headers?: ICredentialsClaims;
}

export interface IListCoveragePlanRes {
  data: IData;
}

interface IData extends ICredentials {
  coverage: ICoveragePlanDeviceUserClaim[];
}
