<template>
  <div>
    <div class="hero-body">
      <p class="title">Bem-vindo ao Movue</p>
      <p class="subtitle">Estes são nossos filmes mais bem avaliados:</p>
    </div>
    <template v-if="this.loading">
      <Loading />
    </template>
    <template v-else>
      <div class="container">
        <div class="columns is-centered is-multiline is-mobile">
          <Card
            v-for="movie in this.topMovies"
            :key="movie.id"
            :id="movie.id"
            :name="movie.title"
            :imgUrl="movie.poster_path"
            :genre="movie.genre_ids[0]"
            :score="movie.vote_average"
            :date="movie.release_date"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Card from "../layout/Card";
import Loading from "../layout/Loading.vue";

export default {
  name: "Home",
  components: { Card, Loading },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    ...mapActions(["fetchTopRated"]),
    ...mapMutations(["CLEAR_MOVIES"]),

    nextPage() {
      this.page += 1;
    },
  },
  created() {
    this.CLEAR_MOVIES();
    this.fetchTopRated();
  },

  computed: {
    ...mapGetters(["topMovies"]),
    ...mapGetters(["loading"]),
  },
};
</script>

<style></style>
