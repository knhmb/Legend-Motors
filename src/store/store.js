import { createStore } from "vuex";

import authModule from "./modules/auth";

const store = createStore({
  state() {
    return {};
  },
  modules: {
    auth: authModule,
  },
});

export default store;
