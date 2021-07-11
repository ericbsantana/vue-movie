<template>
  <div class="column is-one-quarter">
    <transition name="fade">
      <div class="card card-equal-height">
        <div
          class="card-image"
          @mouseover="this.hide = false"
          @mouseleave="this.hide = true"
        >
          <figure class="image is-4by5">
            <img :src="getImg(imgUrl)" class="is-radiusless" rel="preload" />
            <div
              class="is-overlay is-flex is-justify-content-space-around is-align-items-flex-start"
            >
              <div
                class="card-date is-size-7-desktop is-size-6-mobile tag is-primary mt-2"
                :class="{ hide: this.hide }"
                datetime="date"
              >
                <p class="is-small pr-2">
                  <font-awesome-icon :icon="['far', 'calendar']" />
                </p>
                <p>
                  {{ getDate(date) }}
                </p>
              </div>
              <a
                @click="toggleFav"
                class="fav-button is-size-5-mobile is-size-5-desktop p-1"
                :class="{ 'is-fav': this.isFav }"
              >
                <font-awesome-icon
                  :icon="['fas', 'heart']"
                  size="2x"
                  class=""
                />
              </a>
            </div>
          </figure>
        </div>
        <div
          class="card-content is-flex p-2 is-flex-direction-column is-align-items-center is-flex-grow-1"
        >
          <div
            class="card-name is-flex is-align-items-center has-text-centered"
          >
            <p>
              <strong>{{ name }} </strong>
            </p>
          </div>
          <div class="card-info is-flex is-justify-content-space-between">
            <div class="card-score">
              <font-awesome-icon :icon="['fas', 'star']" class="is-star" />
              {{ score }}
            </div>
            <div class="card-genre">{{ genre }}</div>
          </div>
          <div>
            <p>R$ {{ price }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item add-button">
            Adicionar
          </a>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Card",
  props: ["name", "imgUrl", "genre", "date", "score", "id"],
  data() {
    return {
      price: 9.99,
      hide: true,
      isFav: false,
    };
  },

  mounted() {
    this.isFav = this.getFavorite(this.id);
  },

  computed: {
    ...mapGetters(["getFavorite"]),
  },

  methods: {
    ...mapMutations(["ADD_FAVORITE_ITEMS"]),
    ...mapMutations(["REMOVE_FAVORITE_ITEMS"]),

    getImg(url) {
      if (url == null) {
        return "https://via.placeholder.com/600x600?text=Imagem+não+encontrada";
      } else {
        return "https://image.tmdb.org/t/p/w500/" + url;
      }
    },

    getDate(date) {
      const dateArray = date.split("-");
      const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];

      const day = dateArray[2];
      const monthStr = months[dateArray[1] - 1];
      const year = dateArray[0];
      const newDate = `${day} de ${monthStr}, ${year}`;
      return newDate;
    },

    toggleFav() {
      if (this.isFav) {
        this.REMOVE_FAVORITE_ITEMS(this.id);
      } else {
        this.ADD_FAVORITE_ITEMS(this.id);
      }
      this.isFav = !this.isFav;
    },
  },
};
</script>

<style></style>
