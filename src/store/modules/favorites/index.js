import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const state = {
  favoriteList: [],
  ids: [],
  isFavoriteListOpen: false,
};

const mutations = {
  UPDATE_FAVORITE_ITEMS(state, payload) {
    state.favoriteList = payload;
  },
  ADD_FAVORITE_ITEMS(state, payload) {
    state.favoriteList.push(payload);
    state.ids.push(payload.id);
  },
  REMOVE_FAVORITE_ITEMS(state, payload) {
    state.favoriteList = state.favoriteList.filter(
      (movie) => movie.id !== payload
    );
    state.ids = state.ids.filter((id) => id !== payload);
  },
  CLEAR_FAVORITE_ITEMS(state) {
    while (state.favoriteList.length) {
      state.favoriteList.pop();
    }
    while (state.ids.length) {
      state.ids.pop();
    }
  },
  TOGGLE_FAVORITE_LIST(state) {
    state.isFavoriteListOpen = !state.isFavoriteListOpen;
  },
  FAVORITE_LIST_OFF(state) {
    state.isFavoriteListOpen = false;
  },
};

const actions = {
  async fetchFavoriteItems({ commit }, id) {
    try {
      const response = await axios.get(
        `/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      );
      const results = response.data;

      commit("ADD_FAVORITE_ITEMS", {
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
  isFavoriteListOpen: (state) => {
    return state.isFavoriteListOpen;
  },
  favorites: (state) => {
    return state.favoriteList;
  },
  isOnFav: (state) => (id) => {
    return state.ids.includes(id);
  },
  numberOfFavorites: (state) => {
    return state.ids.length;
  },
};

const favoriteModule = {
  state,
  mutations,
  actions,
  getters,
};

export default favoriteModule;
