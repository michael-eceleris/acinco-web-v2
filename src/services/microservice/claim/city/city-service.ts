import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";
import { IIListCityRes } from "./city-service.interface";

export const listCityInsurrance = () => {
  const url = microserviceApiRoutes.v1.shared.city.list();
  return microserviceApiAxios
    .get<Error, AxiosResponse<IIListCityRes>>(url, {})
    .then((res) => res.data);
};
