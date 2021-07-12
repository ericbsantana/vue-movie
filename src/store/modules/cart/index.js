import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key));
};

const state = {
  cartList: localStorage.getObj("cart") || [],
  products_id: localStorage.getObj("products_ids") || [],
  isCartListOpen: false,
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartList = payload;
  },
  ADD_CART_ITEMS(state, payload) {
    let isInCart = state.cartList.find((product) => product.id === payload.id);

    if (isInCart) {
      isInCart.quantity++;
      localStorage.setObj("cart", state.cartList);
    } else {
      state.cartList.push(payload);
      state.products_id.push(payload.id);
      localStorage.setObj("cart", state.cartList);
      localStorage.setObj("products_ids", state.products_id);
    }
  },
  REMOVE_CART_ITEMS(state, payload) {
    state.cartList = state.cartList.filter((movie) => movie.id !== payload);
    state.products_id = state.products_id.filter((id) => id !== payload);
    localStorage.setObj("cart", state.cartList);
    localStorage.setObj("products_ids", state.products_id);
  },
  CLEAR_CART_ITEMS(state) {
    while (state.cartList.length) {
      state.cartList.pop();
    }
    while (state.products_id.length) {
      state.products_id.pop();
    }
    localStorage.setObj("cart", state.cartList);
    localStorage.setObj("products_ids", state.products_id);
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
        `/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      );
      const results = response.data;

      commit("ADD_CART_ITEMS", {
        id: results.id,
        name: results.title,
        img: results.poster_path,
        price: 9.99,
        quantity: 1,
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

  totalPrice: (state) => {
    let total = 0;
    state.cartList.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total.toFixed(2);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
