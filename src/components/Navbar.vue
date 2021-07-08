<template>
  <nav class="navbar is-primary ">
    <div class="container ">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Movue
        </a>
        <a role="button" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start is-justify-content-center is-flex-grow-1">
          <div class="navbar-item">
            <div class="is-flex is-justify-content-center">
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
