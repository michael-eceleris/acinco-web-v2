import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";
import { IListDeviceRes } from "./device-service.interface";

export const listDeviceUserInsurranceService = () => {
  const url = microserviceApiRoutes.v1.claim.device.list();
  return microserviceApiAxios
    .get<Error, AxiosResponse<IListDeviceRes>>(url, {})
    .then((res) => res.data);
};
