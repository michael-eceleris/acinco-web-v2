import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { ICitiesClaim } from "../types/claims";

export interface IListCityReqBody {}

export interface IListCityReqParams {
  headers?: ICredentialsClaims;
}

export interface IIListCityRes {
  data: IData;
}

interface IData extends ICredentials {
  cities: ICitiesClaim[];
}
