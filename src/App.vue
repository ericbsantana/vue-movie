<template>
  <Navbar />
  <Movies />
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Movies from "./components/Movies.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Movies,
  },
};
</script>

<style></style>
