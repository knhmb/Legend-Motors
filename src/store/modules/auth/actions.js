import axios from "axios";

export default {
  async register(_, payload) {
    const response = await axios.post("api/v1/accounts", payload);
    console.log(response);
  },
  async login(context, payload) {
    const response = await axios.post("api/v1/authenticate", payload);
    context.commit("LOGIN", response.data);
  },
  // async validateUser(context) {
  //   const response = await axios.get("api/v1/authenticate");
  //   context.commit("LOGIN", response.data);
  // },
  async validateUser(context, payload) {
    const response = await axios.get("api/v1/authenticate", {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });
    context.commit("LOGIN", response.data);
  },
  async checkRefreshToken(context, payload) {
    const response = await axios.put(
      "api/v1/authenticate",
      {},
      {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      }
    );
    context.commit("LOGIN", response.data);
  },
  // async checkUser(context, payload) {
  //   const response = await axios.get("/api/v1/authenticate", {
  //     headers: {
  //       Authorization: `Bearer ${payload}`,
  //     },
  //   });
  //   context.commit("LOGIN", response.data);
  // },
  async logout(context) {
    await axios.delete("api/v1/authenticate");
    context.commit("LOGOUT");
  },
  async getOTP(_, payload) {
    await axios.post("api/v1/accounts/forgot-password", payload);
  },
  async updateUser(context, payload) {
    const response = await axios.put(
      `api/v1/accounts/${payload.id}`,
      payload.data
    );
    context.commit("UPDATE_USER", response.data.item);
  },
  async checkOTP(context, payload) {
    const response = await axios.post("api/v1/accounts/otp-check", payload);
    context.commit("RESET_PASSWORD", response.data.item);
  },
  async resetPassword(_, payload) {
    await axios.post("api/v1/accounts/reset-password", payload);
  },
  async changePassword(_, payload) {
    await axios.post("api/v1/accounts/change-password", payload);
  },
  async getOrders(context, payload) {
    const response = await axios.get("/api/v1/histories/order", {
      params: {
        filter: `userId:${payload}`,
      },
    });
    context.commit("SET_ORDERS", response.data.items);
  },
};
