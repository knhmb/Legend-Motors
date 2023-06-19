export default {
  LOGIN(state, payload) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
};
