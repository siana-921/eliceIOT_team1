import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PROD_API_ROOT,
});
export const axiosTest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_API_ROOT,
});
