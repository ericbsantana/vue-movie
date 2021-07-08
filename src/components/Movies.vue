<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered ">
        <div class="column is-three-quarters ">
          <div class="columns is-multiline">
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
import Card from "./Card.vue";

export default {
  name: "Movies",
  components: {
    Card,
  },

  data() {
    return {
      movies: [],
      genreList: [],
    };
  },

  mounted() {
    const reqGenres = this.axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`
    );
    const req = this.axios.get("http://192.168.15.99:3000/results");

    this.axios
      .all([reqGenres, req])
      .then(
        this.axios.spread((...responses) => {
          console.log(responses[0].data);
          this.genreList = responses[0].data.genres;
          this.movies = responses[1].data;

          for (const movie of this.movies) {
            for (const genre of this.genreList) {
              if (movie.genre_ids[0] === genre.id) {
                movie.genre_ids = genre.name;
                console.log(movie.genre_ids);
              }
            }
          }
        })
      )
      .catch((errors) => {
        console.log(errors.message);
      });

    /* this.axios
      .get("http://192.168.15.99:3000/genres")
      .then((res) => {
        this.genreList = res.data;
        console.log(res.data);
      })
      .catch((error) => console.log(error.message));
    this.axios
      .get("http://192.168.15.99:3000/results")
      .then((res) => {
        this.movies = res.data;
        console.log(res.data);

        for (const movie of this.movies) {
        }
      })
      .catch((error) => console.log(error.message)); */

    /* this.$http
      .get("/results")
      .then((res) => (this.movies = res))
      .catch((error) => console.log(error.message));
 */
    /* fetch("results")
      .then((response) => response.json())
      .then((data) => {
        this.movies = data;
        console.log(this.movies.length);
      });

    fetch("genres")
      .then((response) => response.json())
      .then((data) => {
        for (const genre of data) {
          for (const movie of this.movies) {
            if (genre.id === movie.genre_ids[0]) {
              genre.name = genre.genre;
            }
          }
        }
      })
      .catch((error) => console.log(error.message)); */
  },
};
</script>

<style></style>
