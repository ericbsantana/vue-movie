import search from "./modules/search";
import favorites from "./modules/favorites";
import cart from "./modules/cart";
import { createStore } from "vuex";

export default createStore({
  modules: {
    search,
    favorites,
    cart,
  },
});
