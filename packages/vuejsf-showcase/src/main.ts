import Vue from "vue";
import App from "./App.vue";

import VueJsf from "vuejsf";

Vue.config.productionTip = false;

// css
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(VueJsf);

new Vue({
  render: h => h(App)
}).$mount("#app");
