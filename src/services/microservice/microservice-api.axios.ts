import axios from "axios";

import { Configuration } from "../../config/configuration";

export const microserviceApiAxios = axios.create();

microserviceApiAxios.interceptors.request.use((config) => {
  const baseURL = Configuration.microservice.baseURL;
  return { baseURL, ...config };
});
