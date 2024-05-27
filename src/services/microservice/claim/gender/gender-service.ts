import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";
import { IIListGenderRes } from "./gender-service.interface";

export const listGenderInsurrance = () => {
  const url = microserviceApiRoutes.v1.shared.gender.list();
  return microserviceApiAxios
    .get<Error, AxiosResponse<IIListGenderRes>>(url, {})
    .then((res) => res.data);
};
