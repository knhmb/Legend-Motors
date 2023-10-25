import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      currentUser: {},
      isLoggedIn: false,
      orders: [],
    };
  },
  getters,
  mutations,
  actions,
};
