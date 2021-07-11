import axios from "axios";

axios.defaults.baseURL = "http://api.themoviedb.org/3";

const state = {
  movieList: [],
  topRatedMovies: [],
  isLoading: false,
  genres: [
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 14, name: "Fantasia" } /* took it from the api */,
    { id: 36, name: "História" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Mistério" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção" },
    { id: 10770, name: "Cinema TV" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Guerra" },
    { id: 37, name: "Faroeste" },
  ],
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
    try {
      commit("SET_IS_LOADING", true);
      const response = await axios.get(
        `/movie/top_rated?&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&include_adult=false`
      );

      const results = response.data.results;

      for (const movie of results) {
        if (movie.title == null) {
          movie.title = "Sem título";
        }
        if (movie.vote_average == 0) {
          movie.vote_average = "S.N";
        }

        if (movie.release_date == null) {
          movie.release_date = "Sem data";
        }

        for (const genre of state.genres) {
          if (genre.id == movie.genre_ids[0]) {
            movie.genre_ids[0] = genre.name;
          }
        }
      }

      commit("SET_TOP_RATED", results);
      commit("SET_IS_LOADING", false);
    } catch (err) {
      console.log(err.message);
      commit("SET_IS_LOADING", false);
    }
  },

  async fetchMovies({ commit }, query) {
    try {
      commit("SET_IS_LOADING", true);
      const response = await axios.get(
        `/search/movie?query=${query}&api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&include_adult=false`
      );
      const results = response.data.results;

      for (const movie of results) {
        if (movie.title == null) {
          movie.title = "Sem título";
        }
        if (movie.vote_average == 0) {
          movie.vote_average = "S.N";
        }

        if (movie.release_date == null) {
          movie.release_date = "Sem data";
        }

        for (const genre of state.genres) {
          if (genre.id == movie.genre_ids[0]) {
            movie.genre_ids[0] = genre.name;
          }
        }
      }

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
  genres: (state) => {
    return state.genres;
  },
};

const searchModule = {
  state,
  mutations,
  actions,
  getters,
};

export default searchModule;
