import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  cartList: [],
  isCartListOpen: false,
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartList = payload;
  },
  ADD_CART_ITEMS(state, payload) {
    state.cartList.push(payload);
  },
  REMOVE_CART_ITEMS(state, payload) {
    state.cartList = state.cartList.filter((movie) => movie !== payload);
  },
  CLEAR_CART_ITEMS(state) {
    state.favoriteList = [];
  },
  TOGGLE_CART_LIST(state) {
    state.cartList = !state.cartList;
  },
};

const actions = {};

const getters = {
  isCartListOpen: (state) => {
    return state.isCartListOpen;
  },
  cartItems: (state) => {
    return state.cartItems;
  },
  getFavorite: (state) => (id) => {
    return state.favoriteList.includes(id);
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
