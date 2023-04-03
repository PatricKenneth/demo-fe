import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Action, IAuthState } from "./interfaces";
import { clearToken, setToken } from "@utils/token";

const initialState: IAuthState = {
  isAuthenticated: false,
  error: "",
  errorCode: -1,
  user: undefined,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<Action>) => {
      const { user } = action.payload;
      setToken(user?.tokenPair.accessToken);
      state.isAuthenticated = true;
      state.user = user;
      state.error = undefined;
      state.errorCode = undefined;
      state.isError = false;
    },
    loginFailed: (state, action: PayloadAction<Action>) => {
      const { error, errorCode } = action.payload;
      state.isAuthenticated = false;
      state.user = undefined;
      state.error = error;
      state.errorCode = errorCode;
      state.isError = true;
    },
    logout: (state) => {
      clearToken();
      state.isAuthenticated = false;
      state.user = undefined;
      state.error = undefined;
      state.errorCode = undefined;
      state.isError = false;
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;
export default authSlice.reducer;
