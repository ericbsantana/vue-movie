<template>
  <div class="sidebar">
    <div class="p-5 is-flex is-flex-direction-column">
      <div
        class="is-flex is-justify-content-space-between is-align-content-baseline"
      >
        <span class="title">Lista de compras</span>
        <button
          class="button is-primary is-small"
          @click="this.CLEAR_CART_ITEMS"
        >
          Esvaziar
        </button>
        <button class="delete is-large" @click="this.TOGGLE_CART_LIST" />
      </div>
      <CartList />
      <div class="is-flex is-flex-direction-column is-align-content-flex-end ">
        <h1 class="subtitle">Total: R$ {{ this.totalPrice }}</h1>
        <router-link to="/checkout">
          <button class="button is-primary">Finalizar compras</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "./CartList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CartBar",
  components: { CartList },
  computed: {
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_CART_LIST"]),
    ...mapMutations(["CLEAR_CART_ITEMS"]),
  },
};
</script>

<style></style>
