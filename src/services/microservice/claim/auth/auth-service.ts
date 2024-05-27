import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";
import { ILoginReqBody, ILoginRes, IGetMeRes } from "./auth-service.interface";

export const loginInsurranceService = (data: ILoginReqBody) => {
  const url = microserviceApiRoutes.v1.claim.auth.login();
  return microserviceApiAxios
    .post<Error, AxiosResponse<ILoginRes>>(url, data)
    .then((res) => res.data);
};

export const getMeInsurranceService = () => {
  const url = microserviceApiRoutes.v1.claim.auth.me();
  return microserviceApiAxios
    .get<Error, AxiosResponse<IGetMeRes>>(url, {})
    .then((res) => res.data);
};
