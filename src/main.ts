import { createApp } from "vue";
import { i18n } from "@/plugins/i18n";
import router from "@/plugins/router";
import "@/assets/global.scss";
import App from "@/App.vue";

const app = createApp(App);

app
  .use(i18n)
  .use(router)
  .mount("#app");
