import axios from "axios";
import { url } from "./url";

const token = localStorage.getItem("accessToken");

axios.defaults.baseURL = url;
axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
