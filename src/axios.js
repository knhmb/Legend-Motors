import axios from "axios";

const token = localStorage.getItem("accessToken");

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
