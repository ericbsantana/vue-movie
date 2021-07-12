<template>
  <transition-group name="fade">
    <div class="is-flex is-flex-direction-column p-3 is-flex-grow-1">
      <ul class="">
        <template v-if="this.products.length > 0">
          <li
            v-for="item of this.products"
            :key="item.id"
            class="is-flex is-justify-content-space-around is-align-items-center mt-1"
          >
            <img :src="this.getImg(item.img)" width="32" height="32" />

            <p class="ml-2 is-flex-grow-1 is-size-7">{{ item.name }}</p>
            <p class="pr-4 p-0-mobile is-size-7-mobile">R$ {{ item.price }}</p>
            <p class="pr-4">{{ item.quantity }}</p>
            <div class="is-flex is-jusfity-content-center">
              <p class="is-small pr-2" @click="this.REMOVE_CART_ITEMS(item.id)">
                <font-awesome-icon :icon="['fas', 'trash']" size="1x" />
              </p>
            </div>
          </li>
        </template>
        <template v-else>
          <transition name="fade">
            <h1 class="subtitle has-text-centered">
              Seu carrinho está vazio.
            </h1>
          </transition>
        </template>
      </ul>
    </div>
  </transition-group>
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
