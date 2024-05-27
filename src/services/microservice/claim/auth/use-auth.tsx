import { useMutation, QueryOptions } from "react-query";

import { loginInsurranceService } from "./auth-service";
import { IUseLoginService } from "./user-auth.interface";

export const useLoginClaimService = (config?: QueryOptions) => {
  return useMutation(
    (data: IUseLoginService) => loginInsurranceService(data).then((res) => res),
    config,
  );
};
