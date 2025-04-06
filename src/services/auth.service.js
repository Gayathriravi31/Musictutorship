import axiosServices from "../utils/axios";
import { AppConfig } from "../constants/AppConfig";

export const bookUsersEnquiriesAPI = (payload) => {
  console.log("payload:::", payload);
  return axiosServices.post(`${AppConfig.api_url}enquiries`, payload);
};
export const usersRegisterAPI = (payload) => {
  console.log("payload:::", payload);
  return axiosServices.post(`${AppConfig.api_url}users`, payload);
};
export const getUsersAPI = () => {
  return axiosServices.get(`${AppConfig.api_url}users`);
};
