<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Welcome to Movue</p>
      <p class="subtitle">These are the latest releases:</p>
    </div>
    <template v-if="this.loading"> loading</template>

    <template v-else>
      <Card
        v-for="movie in this.movies"
        :key="movie.id"
        :name="movie.title"
        :imgUrl="movie.poster_path"
        :genre="movie.genre_ids"
        :score="movie.vote_average"
        :date="movie.release_date"
      />
    </template>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../layout/Card";

export default {
  name: "Home",
  components: { Card },

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
