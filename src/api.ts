import { getToken } from "@utils/token";
import axios from "axios";

export const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 5 * 60_000,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
