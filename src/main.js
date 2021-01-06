import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./assets/fonts/stylesheet.css";

// Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/scss/theme.scss";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Meta
import VueMeta from "vue-meta";
Vue.use(VueMeta);

//Gsap
import { gsap } from "gsap";

Object.defineProperty(Vue.prototype, "$gsap", { value: gsap });

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");