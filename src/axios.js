import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common[
  "Authorizations"
] = `Bearer ${localStorage.getItem("accessToken")}`;
