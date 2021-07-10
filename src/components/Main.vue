<template>
  <Navbar />
  <div class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <Sidebar />
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Sidebar from "./layout/Sidebar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style></style>
