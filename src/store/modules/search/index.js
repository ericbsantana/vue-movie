import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  movieList: [],
  isLoading: false,
  genres: [],
  query: "",
};

const mutations = {
  SET_MOVIE(state, payload) {
    state.movieList = payload;
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
      `/movie/top_rated?&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
    );
    commit("SET_MOVIE", response.data);
    commit("SET_IS_LOADING", false);
  },

  async fetchMovies({ commit }, query) {
    try {
      commit("SET_IS_LOADING", true);
      const response = await axios.get(
        `/search/movie?query=${query}&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      );
      const results = response.data.results;
      console.log(results);
      commit("SET_IS_LOADING", false);
      commit("SET_MOVIE", results);
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
