<template>
  <section class="p-3">
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
            class="button is-primary is-large has-text-centered"
            @click="handleForm"
            :disabled="this.numberOfProducts === 0"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  </section>
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
      if (this.numberOfProducts === 0) {
        window.alert("seu carrinho está vazio!");
      }
      this.$refs.form.validateForm();
    },
  },
  computed: {
    ...mapGetters(["numberOfProducts"]),
  },

  mounted() {
    this.CART_LIST_OFF();
    this.FAVORITE_LIST_OFF();
  },
};
</script>

<style></style>
