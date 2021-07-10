<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Welcome to Movue</p>
      <p class="subtitle">These are the latest releases:</p>
    </div>
    <div v-if="loading">
      loading...
    </div>
    <div v-else>
      a
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  created() {
    this.$store.dispatch("fetchTopRated");
  },

  computed: {
    ...mapGetters(["movies"]),
    ...mapGetters(["loading"]),
  },
};
</script>

<style></style>
