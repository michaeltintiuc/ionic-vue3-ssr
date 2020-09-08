import { IonicVue } from "@modus/ionic-vue";
import { createSSRApp } from "vue";
import { App } from "./app";

const app = createSSRApp(App);
app.config.isCustomElement = (tag) => tag.startsWith("ion-");

app.use(IonicVue);

app.mount("#app");
IonicVue.isReady();

// This doesn't quite work due to Ionic's way of hydrating some components
// like ion-header generating extra DOM nodes instead of using shadow DOM
// IonicVue.isReady().then(() => {
// app.mount("#app");
// });
