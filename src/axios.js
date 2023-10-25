import axios from "axios";
import { url } from "./url";
// import i18n from "./i18n";

// const { locale } = i18n.global;

// const token = localStorage.getItem("accessToken");

axios.defaults.baseURL = url;

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

export const setLanguageHeader = (lang) => {
  console.log(lang);
  axios.defaults.headers = {
    "accept-language-code": lang,
  };
  console.log(axios.defaults.headers);
  // axios.interceptors.request.use((config) => {
  //   config.headers["accept-language-code"] = lang;
  //   return config;
  // });
};

// export default setAuthHeader;
