<template>
  <Navbar />
  <div class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <transition name="slide-fade">
      <template v-if="this.isFavoriteListOpen">
        <Sidebar />
      </template>
    </transition>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Sidebar from "./layout/Favorites/FavoriteBar.vue";
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
