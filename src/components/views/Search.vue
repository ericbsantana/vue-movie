<template>
  <div class="container">
    <div class="columns is-centered is-multiline">
      <template v-if="this.isLoading"> loading</template>
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
import { mapActions, mapState, mapGetters } from "vuex";
import Card from "../layout/Card.vue";

export default {
  name: "Search",
  props: ["query"],
  components: { Card },

  computed: {
    ...mapGetters(["movies"]),
    ...mapState(["isLoading"]),
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
