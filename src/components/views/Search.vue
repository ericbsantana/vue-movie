<template>
  <div class="container">
    <div class="columns is-centered is-multiline">
      <template v-if="this.loading"> loading</template>

      <template v-else>
        <Card
          v-for="movie in this.movies"
          :key="movie.id"
          :name="movie.title"
          :imgUrl="movie.poster_path"
          :genre="movie.genre_ids[0]"
          :score="movie.vote_average"
          :date="movie.release_date"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../layout/Card.vue";

export default {
  name: "Search",
  components: { Card },

  computed: {
    ...mapGetters(["movies"]),
    ...mapGetters(["loading"]),
    ...mapGetters(["query"]),
  },

  methods: {
    ...mapActions(["fetchMovies"]),
  },

  watch: {
    "$route.query": function() {
      this.fetchMovies(this.query);
    },
  },

  created() {
    this.fetchMovies(this.query);
  },
};
</script>

<style></style>
