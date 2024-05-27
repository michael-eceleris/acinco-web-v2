import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";

import {
  IListCoveragePlanReqParams,
  IListCoveragePlanRes,
} from "./coverage-service.interface";

export const listCoveragesPlanDeviceUserInsurrance = ({
  planId,
}: IListCoveragePlanReqParams) => {
  const url = microserviceApiRoutes.v1.claim.coverage.list(planId);
  return microserviceApiAxios
    .get<Error, AxiosResponse<IListCoveragePlanRes>>(url, {})
    .then((res) => res.data);
};
