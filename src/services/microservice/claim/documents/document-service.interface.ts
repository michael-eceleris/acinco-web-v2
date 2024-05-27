import {
  ICredentials,
  ICredentialsInsurrance,
} from "../../types/authorization";
import { IDocumentsCoveragesClaim } from "../types/claims";

export interface IListDocumentsCoveragesPlanReqBody {}

export interface IListDocumentsCoveragesPlanReqParams {
  coverageId: string | number | undefined;
  headers?: ICredentialsInsurrance;
}

export interface IListDocumentsCoveragesPlanRes {
  data: IData;
}

interface IData extends ICredentials {
  documents: IDocumentsCoveragesClaim[];
}
