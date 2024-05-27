import axios from "axios";

import { Configuration } from "../../config/configuration";
import { useLoginClaim } from "../../hooks/useLoginClaim";

export const microserviceApiAxios = axios.create();

microserviceApiAxios.interceptors.request.use((config) => {
  const { isLogin, credentials } = useLoginClaim();
  if (isLogin) {
    config.headers.Authorization = `${credentials.type} ${credentials.token}`;
  }
  return config;
});

microserviceApiAxios.interceptors.request.use((config) => {
  const baseURL = Configuration.microservice.baseURL;
  return { baseURL, ...config };
});
