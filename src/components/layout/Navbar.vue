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
          <button
            class="button is-primary"
            @click="
              TOGGLE_FAVORITE_LIST();
              CART_LIST_OFF();
            "
          >
            <font-awesome-icon :icon="['fas', 'heart']" />
            <transition name="fade">
              <template v-if="numberOfFavorites != 0">
                <span
                  class="navbar-number has-background-primary-light has-text-primary"
                  >{{ numberOfFavorites }}</span
                >
              </template>
            </transition>
          </button>
          <button
            class="button is-primary"
            @click="
              TOGGLE_CART_LIST();
              FAVORITE_LIST_OFF();
            "
          >
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            <transition name="fade">
              <template v-if="numberOfProducts != 0">
                <span
                  class="navbar-number has-background-primary-light has-text-primary"
                  >{{ numberOfProducts }}</span
                >
              </template>
            </transition>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Navbar",
  components: {
    Searchbar,
  },
  computed: {
    ...mapGetters(["numberOfFavorites"]),
    ...mapGetters(["numberOfProducts"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_FAVORITE_LIST"]),
    ...mapMutations(["TOGGLE_CART_LIST"]),
    ...mapMutations(["CART_LIST_OFF"]),
    ...mapMutations(["FAVORITE_LIST_OFF"]),
  },
};
</script>

<style></style>
