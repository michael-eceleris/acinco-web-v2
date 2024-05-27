import { useMutation, QueryOptions } from "react-query";

import { createClaim } from "./create-service";

export const useCreateClaim = (config?: QueryOptions) => {
  return useMutation(
    ({ data }: { data: FormData }) => createClaim({ data }).then((res) => res),
    config,
  );
};
