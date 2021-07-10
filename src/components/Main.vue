<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
  },
};
</script>

<style></style>
