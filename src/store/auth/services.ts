import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPayloadLoginRequest, IUser } from "./interfaces";
import { getBaseQuery } from "../../api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(getBaseQuery()),
  endpoints: (builder) => ({
    doSignIn: builder.mutation<IUser, IPayloadLoginRequest>({
      query: ({ username, password }) => {
        return {
          url: "auth/login",
          method: "POST",
          body: {
            username,
            password,
          },
        };
      },
    }),
  }),
});

export const { useDoSignInMutation } = authApi;
