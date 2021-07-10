<template>
  <div class="hero-body">
    <p class="title">Resultados da sua pesquisa:</p>
    <p class="subtitle">Filmes com o termo "{{ this.expression }}":</p>
  </div>
  <div class="columns is-centered is-multiline">
    <template v-if="this.loading"> loading</template>

    <template v-else>
      <Card
        v-for="movie in this.movies"
        :key="movie.id"
        :id="movie.id"
        :name="movie.title"
        :imgUrl="movie.poster_path"
        :genre="movie.genre_ids[0]"
        :score="movie.vote_average"
        :date="movie.release_date"
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../layout/Card.vue";

export default {
  name: "Search",
  components: { Card },

  data() {
    return {
      expression: "",
    };
  },

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
      this.expression = this.query;
    },
  },

  created() {
    this.fetchMovies(this.query);
    this.expression = this.query;
  },
};
</script>

<style></style>
