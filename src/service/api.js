import axios from "axios";
import { BACKEND_SERVER_URL } from "constants/api.constant";
import { PERSIST_STORE_NAME } from "constants/app.constant";

const api = axios.create({
  baseURL: `${BACKEND_SERVER_URL}`,
});

// Add a request interceptor
api.interceptors.request.use(
  async function (config) {
    const user = localStorage.getItem(PERSIST_STORE_NAME);
    const authData = JSON.parse(user)?.auth;
    const token = JSON.parse(authData)?.user?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  async function (response) {
    // Do something with response data
    const result = response.data;
    return result;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
