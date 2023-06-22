import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/route.js";
import store from "./store/store";
import i18n from "./i18n";
import "@/axios";

import BaseContainer from "@/ui/BaseContainer.vue";
import BaseInput from "@/ui/BaseInput.vue";
import BaseButton from "@/ui/BaseButton.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(i18n);

app.component("base-container", BaseContainer);
app.component("base-input", BaseInput);
app.component("base-button", BaseButton);

app.mount("#app");
