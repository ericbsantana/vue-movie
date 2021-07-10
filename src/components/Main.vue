<template>
  <Navbar />
  <div class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <router-view> </router-view>
      </div>

      <template v-if="this.isFavoriteListOpen">
        <Sidebar />
      </template>
    </div>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Sidebar from "./layout/Sidebar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  components: {
    Navbar,
    Sidebar,
  },

  computed: {
    ...mapGetters(["isFavoriteListOpen"]),
  },
};
</script>

<style></style>
