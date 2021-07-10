import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  favoriteList: [],
};

const mutations = {
  UPDATE_FAVORITE_ITEMS(state, payload) {
    state.favoriteList = payload;
  },
};

const actions = {};

const getters = {
  getFavorites: (state) => {
    return state.favoriteList;
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
