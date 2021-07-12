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
    <transition-group name="slide-fade">
      <template v-if="this.isFavoriteListOpen">
        <FavoriteBar />
      </template>
      <template v-else-if="this.isCartListOpen">
        <CartBar />
      </template>
    </transition-group>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import FavoriteBar from "./layout/Favorites/FavoriteBar.vue";
import CartBar from "./layout/Cart/CartBar.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    Navbar,
    FavoriteBar,
    CartBar,
  },

  beforeCreate() {
    this.INITIALIZE_CART;
  },

  computed: {
    ...mapGetters(["isFavoriteListOpen"]),
    ...mapGetters(["isCartListOpen"]),
  },
  methods: {
    ...mapMutations(["INITIALIZE_CART"]),
  },
};
</script>

<style></style>
