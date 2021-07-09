import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

function mockDelay(ms) {
  return function(p) {
    return new Promise((resolve) => setTimeout(() => resolve(p), ms));
  };
}

const state = {
  query: "",
  movieList: [],
  isLoading: false,
  genres: [],
};

const mutations = {
  SET_MOVIE_LIST(state, payload) {
    state.movieList = payload;
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_LATEST_RELEASES(state, payload) {
    state.isLoading = payload;
  },
};

const actions = {
  async searchMovie({ commit }, query) {
    commit("SET_IS_LOADING", true);
    axios
      .get(
        `/search/movie?query=${query}&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&page=1&include_adult=false`
      )
      .then(mockDelay(3500))
      .then((res) => {
        commit("SET_IS_LOADING", false);
        commit("SET_MOVIE_LIST", res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        commit("SET_IS_LOADING", false);
      });
  },
};

const getters = {
  movies: (state) => {
    return state.movieList;
  },
  isLoading: (state) => {
    return state.isLoading;
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
