<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Welcome to Movue</p>
      <p class="subtitle">
        These are the latest releases:
      </p>
      <div v-for="movie in movies" :key="movie.id">{{ movie.name }}}</div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  data() {
    return { list: null };
  },

  mounted() {
    this.$store.dispatch("loadMovies");
  },

  computed: {
    ...mapState["movies"],
  },
};
</script>

<style></style>
