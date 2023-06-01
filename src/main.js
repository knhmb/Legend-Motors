import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/route.js";

import BaseContainer from "@/ui/BaseContainer.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.component("base-container", BaseContainer);

app.mount("#app");
