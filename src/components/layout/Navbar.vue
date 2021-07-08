<template>
  <nav class="navbar is-primary ">
    <div class="container ">
      <div class="navbar-brand">
        <a class="navbar-item is-size-3" href="/">
          Movue
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start is-justify-content-center is-flex-grow-1">
          <div class="navbar-item is-flex">
            <div class="is-flex is-justify-content-center is-flex-grow-2">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <font-awesome-icon :icon="['fas', 'heart']" />
            </a>
            <a class="button is-primary">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Searchbar from "./Searchbar.vue";

export default {
  name: "Navbar",
  components: {
    Searchbar,
  },
};
</script>

<style></style>
