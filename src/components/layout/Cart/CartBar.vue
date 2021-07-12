<template>
  <div class="sidebar">
    <div class="p-5 is-flex is-flex-direction-column">
      <div
        class="is-flex is-justify-content-space-between is-align-content-baseline"
      >
        <span class="title is-size-5-mobile">Lista de compras</span>
        <button
          class="button is-primary is-small"
          @click="this.CLEAR_CART_ITEMS"
          :disabled="this.numberOfProducts === 0"
        >
          Esvaziar
        </button>
        <button class="delete is-large" @click="this.TOGGLE_CART_LIST" />
      </div>
      <CartList />

      <div class="is-flex is-flex-direction-column is-align-items-flex-end">
        Total: R$ {{ this.totalPrice }}
        <router-link to="/checkout">
          <button
            class="button is-primary"
            :disabled="this.numberOfProducts === 0"
          >
            Finalizar compras
          </button>
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
    ...mapGetters(["numberOfProducts"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_CART_LIST"]),
    ...mapMutations(["CLEAR_CART_ITEMS"]),
  },
};
</script>

<style></style>
