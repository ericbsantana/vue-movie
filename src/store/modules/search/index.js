import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  movieList: [],
  topRatedMovies: [],
  isLoading: false,
  genres: [],
  query: "",
};

const mutations = {
  SET_MOVIE(state, payload) {
    state.movieList = payload;
  },
  CLEAR_MOVIES(state) {
    state.movieList = [];
  },
  SET_TOP_RATED(state, payload) {
    state.topRatedMovies = payload;
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_QUERY(state, payload) {
    state.query = payload;
  },
};

const actions = {
  async fetchTopRated({ commit }) {
    commit("SET_IS_LOADING", true);
    const response = await axios.get(
      `/movie/top_rated?&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&include_adult=false`
    );
    commit("SET_TOP_RATED", response.data.results);
    commit("SET_IS_LOADING", false);
  },

  async fetchMovies({ commit }, query) {
    try {
      commit("SET_IS_LOADING", true);
      const response = await axios.get(
        `/search/movie?query=${query}&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&include_adult=false`
      );
      const results = response.data.results;
      commit("SET_MOVIE", results);
      commit("SET_IS_LOADING", false);
    } catch (err) {
      console.log(err.message);
      commit("SET_IS_LOADING", false);
    }
  },
};

const getters = {
  movies: (state) => {
    return state.movieList;
  },
  topMovies: (state) => {
    return state.topRatedMovies;
  },
  loading: (state) => {
    return state.isLoading;
  },
  query: (state) => {
    return state.query;
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
