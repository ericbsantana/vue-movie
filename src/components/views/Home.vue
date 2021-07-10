<template>
  <div class="hero-body">
    <p class="title">Bem-vindo ao Movue</p>
    <p class="subtitle">Estes são nossos filmes mais bem avaliados:</p>
  </div>
  <template v-if="this.loading">
    <Loading />
  </template>
  <template v-else>
    <div class="container">
      <div class="columns is-centered is-multiline">
        <Card
          v-for="movie in this.movies"
          :key="movie.id"
          :id="movie.id"
          :name="movie.title"
          :imgUrl="movie.poster_path"
          :genre="movie.genre_ids"
          :score="movie.vote_average"
          :date="movie.release_date"
        />
      </div>
    </div>
  </template>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../layout/Card";
import Loading from "../layout/Loading.vue";

export default {
  name: "Home",
  components: { Card, Loading },

  methods: {
    ...mapActions(["fetchTopRated"]),
  },

  created() {
    this.fetchTopRated();
  },

  computed: {
    ...mapGetters(["movies"]),
    ...mapGetters(["loading"]),
  },
};
</script>

<style></style>
