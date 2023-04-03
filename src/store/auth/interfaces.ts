export interface IPayloadLoginRequest {
  username?: string;
  password?: string;
}
export interface IUser {
  id: string;
  username: string;
  tokenPair: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Action {
  user?: IUser;
  error?: string;
  errorCode?: number;
}

export interface IAuthState {
  user?: IUser;
  isAuthenticated: boolean;
  isError: boolean;
  error?: string;
  errorCode?: number;
}
