<template>
  <Navbar />
  <Home />
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
  },
};
</script>

<style></style>
