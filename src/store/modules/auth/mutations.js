export default {
  LOGIN(state, payload) {
    state.currentUser = payload;
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
