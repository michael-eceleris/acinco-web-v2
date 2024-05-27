import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";

import { IListPlanReqParams, IListPlanRes } from "./plan-service.interface";

export const listPlanDeviceUserInsurrance = ({
  deviceId,
}: IListPlanReqParams) => {
  const url = microserviceApiRoutes.v1.claim.plan.list(deviceId);
  return microserviceApiAxios
    .get<Error, AxiosResponse<IListPlanRes>>(url, {})
    .then((res) => res.data);
};
