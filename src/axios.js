import axios from "axios";
import { url } from "./url";

// const token = localStorage.getItem("accessToken");

axios.defaults.baseURL = url;
// axios.defaults.headers.common["authorization"] = `Bearer ${token}`;

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export default setAuthHeader;
