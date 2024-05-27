export interface IUser {
  name: string;
  email: string;
}

export interface ICredentials {
  refreshToken: string;
  accessToken: string;
}

export interface ICredentialsInsurrance {
  type: string;
  token: string;
}

export interface IUserMe {
  name: string;
  email: string;
  phone_number: string;
  isActive?: boolean;
}
