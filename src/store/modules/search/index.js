import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  movies: [],
  isLoading: false,
  genres: [],
  query: "a",
};

const mutations = {
  SET_MOVIE(state, payload) {
    state.movies = payload;
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_SEARCH_STRING(state, payload) {
    state.query = payload;
  },
};

const actions = {
  loadMovies({ commit }) {
    commit("SET_IS_LOADING", true);
    axios
      .get(
        `/search/movie?query=${this.query}&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      )
      .then((response) => response.data)
      .then((movies) => {
        console.log(movies);
        commit("SET_MOVIE", movies);
      });
    commit("SET_IS_LOADING", false);
  },

  async getLatest({ commit }) {
    try {
      commit("SET_IS_LOADING", true);
      const response = await axios.get(
        `/movie/top_rated?&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      );
      const results = response.data.results;

      commit("SET_MOVIE_LIST", results);
    } catch (err) {
      console.log(err.message);
    }
    commit("SET_IS_LOADING", false);
  },
};

const getters = {
  movies: (state) => {
    return state.movies;
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
