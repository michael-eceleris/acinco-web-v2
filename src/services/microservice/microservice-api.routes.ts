export const microserviceApiRoutes = {
  v1: {
    claim: {
      auth: {
        login: () => "/api/v1/claim/auth",
        me: () => "/api/v1/user/me",
      },
      device: {
        list: () => `/api/v1/claim/device`,
      },
      plan: {
        list: (deviceID: string | number | undefined) =>
          `/api/v1/claim/plan/${deviceID}`,
      },
      coverage: {
        list: (planId: string | number | undefined) =>
          `/api/v1/claim/coverage/${planId}`,
      },
      documents: {
        list: (coverageId: string | number | undefined) =>
          `/api/v1/claim/documents/${coverageId}`,
      },
      create: () => "/api/v1/claim/create",
    },
    shared: {
      gender: {
        list: () => "/api/v1/shared/gender",
      },
      city: {
        list: () => "/api/v1/shared/cities",
      },
    },
  },
};
