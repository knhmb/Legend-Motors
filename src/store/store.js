import { createStore } from "vuex";

import authModule from "./modules/auth";
import productModule from "./modules/product";
import dashboardModule from "./modules/dashboard";

const store = createStore({
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
