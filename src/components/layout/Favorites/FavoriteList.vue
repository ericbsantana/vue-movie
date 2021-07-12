<template>
  <div class="p-5">
    <div
      class="is-flex is-justify-content-space-between is-align-content-baseline	"
    >
      <span class="title">Lista de Favoritos</span>
      <button
        class="button is-primary is-small"
        @click="this.CLEAR_FAVORITE_ITEMS"
      >
        Esvaziar
      </button>
      <button class="delete is-large" @click="this.TOGGLE_FAVORITE_LIST" />
    </div>
    <ul class="is-flex is-flex-direction-column p-3">
      <transition-group name="fade">
        <template v-if="this.favorites.length > 0">
          <li
            v-for="fav of this.favorites"
            :key="fav.id"
            class="is-flex is-justify-content-space-between is-align-items-center mt-1"
          >
            <img :src="this.getImg(fav.img)" width="32" height="32" />

            <p class="ml-2 is-flex-grow-2 is-size-7">{{ fav.name }}</p>
            <p class="pr-2">R$9.99</p>
            <div class="is-flex is-jusfity-content-center">
              <p
                class="is-small pr-2"
                @click="this.REMOVE_FAVORITE_ITEMS(fav.id)"
              >
                <font-awesome-icon :icon="['fas', 'trash']" size="1x" />
              </p>
              <p class="is-small pr-2">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" size="1x" />
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
  name: "ListItem",

  computed: {
    ...mapGetters(["favorites"]),
  },

  methods: {
    ...mapMutations(["CLEAR_FAVORITE_ITEMS"]),
    ...mapMutations(["REMOVE_FAVORITE_ITEMS"]),
    ...mapMutations(["TOGGLE_FAVORITE_LIST"]),

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
