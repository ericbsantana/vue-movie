import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  cartList: [],
  products_id: [],
  isCartListOpen: false,
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartList = payload;
  },
  ADD_CART_ITEMS(state, payload) {
    state.cartList.push(payload);
    state.products_id.push(payload.id);
  },
  REMOVE_CART_ITEMS(state, payload) {
    state.cartList = state.cartList.filter((movie) => movie.id !== payload);
    state.products_id = state.products_id.filter((id) => id !== payload);
  },
  CLEAR_CART_ITEMS(state) {
    while (state.cartList.length) {
      state.cartList.pop();
    }
    while (state.products_id.length) {
      state.products_id.pop();
    }
  },
  TOGGLE_CART_LIST(state) {
    state.isCartListOpen = !state.isCartListOpen;
  },
  CART_LIST_OFF(state) {
    state.isCartListOpen = false;
  },
};

const actions = {
  async fetchCartItems({ commit }, id) {
    try {
      const response = await axios.get(
        `/movie/${id}?api_key=9f1d609eaee68b9642aba56b5044944e&language=pt-BR`
      );
      const results = response.data;

      commit("ADD_CART_ITEMS", {
        id: results.id,
        name: results.title,
        img: results.poster_path,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};

const getters = {
  isCartListOpen: (state) => {
    return state.isCartListOpen;
  },
  products: (state) => {
    return state.cartList;
  },
  isOnCart: (state) => (id) => {
    return state.products_id.includes(id);
  },
  numberOfProducts: (state) => {
    return state.products_id.length;
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
