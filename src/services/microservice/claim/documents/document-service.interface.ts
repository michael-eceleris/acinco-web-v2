import { ICredentials, ICredentialsClaims } from "../../types/authorization";
import { IDocumentsCoveragesClaim } from "../types/claims";

export interface IListDocumentsCoveragesPlanReqBody {}

export interface IListDocumentsCoveragesPlanReqParams {
  coverageId: string | number | undefined;
  headers?: ICredentialsClaims;
}

export interface IListDocumentsCoveragesPlanRes {
  data: IData;
}

interface IData extends ICredentials {
  documents: IDocumentsCoveragesClaim[];
}
