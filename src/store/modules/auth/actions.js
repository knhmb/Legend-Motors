import axios from "axios";

export default {
  async register(_, payload) {
    const response = await axios.post("api/v1/accounts", payload);
    console.log(response);
  },
  async login(context, payload) {
    const response = await axios.post("api/v1/authenticate", payload);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    context.commit("LOGIN", response.data.item);
  },
  async validateUser(context) {
    const response = await axios.get("api/v1/authenticate");
    context.commit("LOGIN", response.data.item);
  },
  async Logout(context) {
    await axios.delete("/api/v1/authenticate");
    context.commit("LOGOUT");
  },
};
