import axios from "axios";
import { url } from "./url";
import i18n from "./i18n";

// const { locale } = i18n.global;

// const token = localStorage.getItem("accessToken");

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

// axios.defaults.headers.common["accept-language"] = locale;

export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export const setLanguageHeader = () => {
  const { locale } = i18n.global;
  axios.defaults.headers = {
    "accept-language": locale,
  };
  console.log(axios.defaults.headers);
  // axios.interceptors.request.use((config) => {
  //   config.headers["accept-language-code"] = lang;
  //   return config;
  // });
};

// export default setAuthHeader;
