import { createStore } from "vuex";

import authModule from "./modules/auth";
import productModule from "./modules/product";

const store = createStore({
  state() {
    return {};
  },
  modules: {
    auth: authModule,
    product: productModule,
  },
});

export default store;
