import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import authModule from "./modules/auth";
import productModule from "./modules/product";
import dashboardModule from "./modules/dashboard";

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
  state() {
    return {};
  },
  modules: {
    auth: authModule,
    product: productModule,
    dashboard: dashboardModule,
  },
});

export default store;
