import search from "./modules/search";
import favorites from "./modules/favorites";
import { createStore } from "vuex";

export default createStore({
  modules: {
    search,
    favorites,
  },
});
