<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered ">
        <div class="column is-three-quarters ">
          <section v-if="latestReleases" class="hero">
            <div class="hero-body">
              <p class="title">
                Em breve
              </p>
              <p class="subtitle">
                Confira aqui os próximos lançamentos do cinema
              </p>
            </div>
          </section>
          <div class="columns is-multiline">
            <div class="column is-full">
              <p v-if="showingResults" class="is-size-3">
                Resultado da sua pesquisa:
              </p>
            </div>
            <Card
              class="column is-3"
              v-for="result in movies"
              :key="result.id"
              :name="result.title"
              :genre="result.genre_ids"
              :imgUrl="result.poster_path"
              :score="result.vote_average"
              :date="result.release_date"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./layout/Card.vue";

export default {
  name: "Movies",
  components: {
    Card,
  },
  emits: ["searchQuery"],
  methods: {
    searchMovie(query) {
      this.axios.defaults.baseURL = "http://api.themoviedb.org/3";

      this.axios
        .get(`${query}`)
        .then((data) => {
          this.movies = data.movies;
          console.log(data.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  data() {
    return {
      results: [],
      movies: [],
      genreList: [],
      latestReleases: true,
      showingResults: false,
    };
  },

  mounted() {
    this.axios.defaults.baseURL = "http://api.themoviedb.org/3";
    this.axios
      .get(
        `genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
      )
      .then((res) => {
        this.genreList = res.data.genres;
      })
      .catch((err) => {
        console.log(err.message);
      });

    this.axios
      .get(
        `/movie/upcoming?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR&page=1`
      )
      .then((res) => {
        this.results = res.data.results;
        for (const movie of this.results) {
          for (const genre of this.genreList) {
            if (genre.id === movie.genre_ids[0]) {
              movie.genre_ids = genre.name;
              this.movies.push(movie);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style></style>
