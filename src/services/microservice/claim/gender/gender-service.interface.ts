import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { IGenderClaim } from "../types/claims";

export interface IListGenderReqBody {}

export interface IListGenderReqParams {
  headers?: ICredentialsClaims;
}

export interface IIListGenderRes {
  data: IData;
}

interface IData extends ICredentials {
  cities: IGenderClaim[];
}
