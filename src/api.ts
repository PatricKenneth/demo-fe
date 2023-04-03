import { getToken } from "@utils/token";

export const getBaseQuery = () => ({
  baseUrl: import.meta.env.VITE_BASE_URL_API,
  timeout: 5 * 60_000,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
