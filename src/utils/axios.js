import axios from "axios";
import { AppConfig } from "../constants/AppConfig";

const axiosServices = axios.create({
  baseURL: AppConfig.api_url,
});

axiosServices.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // console.log(config,'configgg')
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for handling responses
axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || "Wrong Services")
);

export default axiosServices;
