<template>
  <nav class="navbar is-primary ">
    <div class="container ">
      <div class="navbar-brand">
        <router-link to="/">
          <a class="navbar-item is-size-3" href="/">
            Movue
          </a>
        </router-link>
        <div
          class="navbar-start is-justify-content-center is-flex-grow-1 is-hidden-desktop"
        >
          <div class="navbar-item is-flex">
            <Searchbar />
          </div>
        </div>
      </div>

      <div
        class="navbar-start is-justify-content-center is-flex-grow-1 is-hidden-touch"
      >
        <div class="navbar-item is-flex">
          <div class="is-flex is-justify-content-center is-flex-grow-2">
            <Searchbar />
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <font-awesome-icon :icon="['fas', 'heart']" />
            </a>
            <button @click="TOGGLE_FAVORITE_LIST" class="button is-primary">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import { mapMutations } from "vuex";

export default {
  name: "Navbar",
  components: {
    Searchbar,
  },

  methods: {
    ...mapMutations(["TOGGLE_FAVORITE_LIST"]),
  },
};
</script>

<style></style>
