import { AxiosResponse } from "axios";

import { microserviceApiRoutes } from "../../microservice-api.routes";
import { microserviceApiAxios } from "../../microservice-api.axios";
import { ICreateClaimRes } from "./create-service.interface";

export const createClaim = ({ data }: { data: FormData }) => {
  const url = microserviceApiRoutes.v1.claim.create();
  return microserviceApiAxios
    .post<Error, AxiosResponse<ICreateClaimRes>>(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
