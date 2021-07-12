<template>
  <div class="container">
    <div class="columns mt-4">
      <div class="column is-half">
        <h1 class="title">Finalizar compra</h1>
        <div class="box">
          <Form ref="form" />
        </div>
      </div>
      <div class="column is-half">
        <h1 class="title">Carrinho</h1>
        <div class="box">
          <CartList />
        </div>
        <button
          class="button is-primary is-large v-centered"
          @click="handleForm"
          :disabled="this.products.length === 0"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import CartList from "../layout/Cart/CartList.vue";
import Form from "../layout/Form.vue";

export default {
  name: "Checkout",
  components: { Form, CartList },
  methods: {
    ...mapMutations(["CART_LIST_OFF"]),
    ...mapMutations(["FAVORITE_LIST_OFF"]),

    handleForm() {
      if (this.products.length === 0) {
        window.alert("seu carrinho está vazio!");
      }
      this.$refs.form.validateForm();
    },
  },
  computed: {
    ...mapGetters(["products"]),
  },
  mounted() {
    this.CART_LIST_OFF();
    this.FAVORITE_LIST_OFF();
  },
};
</script>

<style></style>
