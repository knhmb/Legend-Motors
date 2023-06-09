export default {
  LOGIN(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    state.currentUser = payload.item;
    state.isLoggedIn = true;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.currentUser = {};
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  RESET_PASSWORD(state, payload) {
    state.currentUser = payload;
  },
};
