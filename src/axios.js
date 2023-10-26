import axios from "axios";
import { url } from "./url";
import i18n from "./i18n";

axios.defaults.baseURL = url;
axios.interceptors.request.use(
  (config) => {
    const { locale } = i18n.global;
    config.headers["accept-language"] = locale;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};
