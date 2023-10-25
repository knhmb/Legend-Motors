import setAuthHeader from "@/axios";
import { clearCart } from "@/utils/checkToken";

export default {
  LOGIN(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    state.currentUser = payload.item;
    setAuthHeader(payload.accessToken);
    state.isLoggedIn = true;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.currentUser = {};
    clearCart();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("logout");
  },
  RESET_PASSWORD(state, payload) {
    state.currentUser = payload;
  },
  UPDATE_USER(state, payload) {
    state.currentUser = payload
  }
};
