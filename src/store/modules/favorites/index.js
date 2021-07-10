import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  favoriteList: [],
  isFavoriteListOpen: false,
};

const mutations = {
  UPDATE_FAVORITE_ITEMS(state, payload) {
    state.favoriteList = payload;
  },
  ADD_FAVORITE_ITEMS(state, payload) {
    state.favoriteList.push(payload);
  },
  REMOVE_FAVORITE_ITEMS(state, payload) {
    state.favoriteList = state.favoriteList.filter(
      (movie) => movie !== payload
    );
  },
  CLEAR_FAVORITE_ITEMS(state) {
    state.favoriteList = [];
  },
  TOGGLE_FAVORITE_LIST(state) {
    state.isFavoriteListOpen = !state.isFavoriteListOpen;
  },
};

const actions = {};

const getters = {
  isFavoriteListOpen: (state) => {
    return state.isFavoriteListOpen;
  },
  favorites: (state) => {
    return state.favoriteList;
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
