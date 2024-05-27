import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { IGenderClaim } from "../types/claims";

export interface IListGenderReqBody {}

export interface IListGenderReqParams {
  headers?: ICredentialsInsurrance;
}

export interface IIListGenderRes {
  data: IData;
}

interface IData extends ICredentials {
  genders: IGenderClaim[];
}
