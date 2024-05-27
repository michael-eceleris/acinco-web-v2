import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";

import {
  IListDocumentsCoveragesPlanReqParams,
  IListDocumentsCoveragesPlanRes,
} from "./document-service.interface";

export const listDocumentsCoveragesPlanDeviceUserInsurrance = ({
  coverageId,
}: IListDocumentsCoveragesPlanReqParams) => {
  const url = microserviceApiRoutes.v1.claim.documents.list(coverageId);

  return microserviceApiAxios
    .get<Error, AxiosResponse<IListDocumentsCoveragesPlanRes>>(url, {})
    .then((res) => res.data);
};
