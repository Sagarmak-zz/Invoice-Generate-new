import axios from "axios";
import Auth from "@/packages/auth";
import config from "@/config.js";

let axiosInstance = axios.create({
  baseURL: config.apiUrl()
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // 1 Do something before request is sent
    if (Auth.isAuthenticated()) {
      //always for request, use config of axios (read documentation)
      config.headers.common["Authorization"] = "Bearer " + Auth.getToken();
    }
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
