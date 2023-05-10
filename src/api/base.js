import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://34.64.110.118:8080/api",
});
