<template>
  <div class="p-5">
    <div
      class="is-flex is-justify-content-space-between is-align-content-baseline	"
    >
      <span class="title">Lista de compras</span>
      <button class="button is-primary is-small" @click="this.CLEAR_CART_ITEMS">
        Esvaziar
      </button>
      <button class="delete is-large" @click="this.TOGGLE_CART_LIST" />
    </div>
    <ul class="is-flex is-flex-direction-column p-3">
      <transition-group name="fade">
        <template v-if="this.products.length > 0">
          <li
            v-for="item of this.products"
            :key="item.id"
            class="is-flex is-justify-content-space-between is-align-items-center mt-1"
          >
            <img :src="this.getImg(item.img)" width="32" height="32" />

            <p class="ml-2 is-flex-grow-2 is-size-7">{{ item.name }}</p>
            <p class="pr-2">R$9.99</p>
            <div class="is-flex is-jusfity-content-center">
              <p class="is-small pr-2" @click="this.REMOVE_CART_ITEMS(item.id)">
                <font-awesome-icon :icon="['fas', 'trash']" size="1x" />
              </p>
            </div>
          </li>
        </template>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CartList",

  computed: {
    ...mapGetters(["products"]),
  },

  methods: {
    ...mapMutations(["CLEAR_CART_ITEMS"]),
    ...mapMutations(["REMOVE_CART_ITEMS"]),
    ...mapMutations(["TOGGLE_CART_LIST"]),

    getImg(url) {
      if (url == null) {
        return "https://via.placeholder.com/600x600?text=Imagem+não+encontrada";
      } else {
        return "https://image.tmdb.org/t/p/w500/" + url;
      }
    },
  },
};
</script>

<style></style>
