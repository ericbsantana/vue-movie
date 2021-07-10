<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Welcome to Movue</p>
      <p class="subtitle">These are the latest releases:</p>
    </div>
    <div v-if="isLoading">
      loading...
    </div>
    <div v-else>
      a
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  created() {
    this.$store.dispatch("fetchTopRated");
  },

  computed: {
    ...mapState["movies"],
    ...mapState["isLoading"],
  },
};
</script>

<style></style>
