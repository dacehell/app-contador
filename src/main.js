import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faMinus, faTrashCan);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
