export interface IUser {
  name: string;
  email: string;
}

export interface ICredentials {
  refreshToken: string;
  accessToken: string;
}

export interface ICredentialsClaims {
  type: string;
  token: string;
  expiresIn: number;
}

export interface IUserMe {
  name: string;
  email: string;
  phone_number: string;
  isActive?: boolean;
}
