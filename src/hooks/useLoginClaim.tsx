import { ICredentialsClaims } from "../services/microservice/types/authorization";

function getCredentials(): ICredentialsClaims | undefined {
  const credentials =
    localStorage.getItem("credentialsClaims") ||
    sessionStorage.getItem("credentialsClaims");
  if (!credentials) return undefined;
  return JSON.parse(credentials);
}

const setCredentials = (credentials: ICredentialsClaims, remember: boolean) => {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("credentialsClaims", JSON.stringify(credentials));
};

const clearCredentials = () => {
  localStorage.removeItem("credentialsClaims");
  sessionStorage.removeItem("credentialsClaims");
};

export const useLoginClaim = () => {
  const credentials = getCredentials();
  const login = setCredentials;
  const logout = clearCredentials;
  const isLogin = Boolean(credentials?.type && credentials?.token);
  return { isLogin, credentials, login, logout };
};
