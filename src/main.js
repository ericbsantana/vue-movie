import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import router from "./routes";

import maska from "maska";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch,
  faStar,
  faEnvelope,
  faIdCard,
  faPhone,
  faUser,
  faMapPin,
  faHome,
  faMap,
  faCity,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";

library.add(
  faShoppingCart,
  faHeart,
  faSearch,
  faStar,
  faCalendar,
  faEnvelope,
  faIdCard,
  faPhone,
  faUser,
  faMapPin,
  faHome,
  faMap,
  faCity,
  faTrash
);

require("@/assets/scss/main.scss");
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(maska)
  .mount("#app");
