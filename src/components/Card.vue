<template>
  <div>
    <div class="card card-equal-height">
      <div
        class="card-image"
        @mouseover="this.hide = false"
        @mouseleave="this.hide = true"
      >
        <figure class="image is-4by5 ">
          <img :src="getImg(imgUrl)" class="is-radiusless" />
          <div
            class="is-overlay is-flex is-justify-content-center is-align-items-center"
          >
            <p
              class="card-date is-size-7-desktop is-size-7-tablet has-text-centered tag is-primary"
              :class="{ hide: this.hide }"
              datetime="date"
            >
              <a class="is-small p-2" :class="{ 'is-fav': this.isFav }">
                <font-awesome-icon :icon="['far', 'calendar']" size="2x" />
              </a>
              {{ getDate(date) }}
            </p>
            <div class="is-flex is-justify-content-flex-end	">
              <a
                @click="toggleFav"
                class="fav-button is-small p-2"
                :class="{ 'is-fav': this.isFav }"
              >
                <font-awesome-icon
                  :icon="['fas', 'heart']"
                  size="2x"
                  class=""
                />
              </a>
            </div>
          </div>
        </figure>
      </div>
      <div
        class="card-content is-flex p-2 is-flex-direction-column is-align-items-center is-flex-grow-1"
      >
        <div class="card-name is-flex is-align-items-center has-text-centered">
          <p>
            <strong>{{ name }} </strong>
          </p>
        </div>
        <div class="card-info is-flex is-justify-content-space-between">
          <div class="card-score">
            <font-awesome-icon :icon="['fas', 'star']" /> {{ score }}
          </div>
          <div class="cart-genre">{{ genre }}</div>
        </div>
        <div>
          <p>R$ {{ price }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          Adicionar
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["name", "imgUrl", "genre", "date", "score"],
  data() {
    return {
      genres: {},
      price: Math.floor(Math.random() * (39.99 + 1)),
      isFav: false,
      hide: true,
    };
  },
  methods: {
    getImg(url) {
      return "https://image.tmdb.org/t/p/w500/" + url;
    },
    getDate(date) {
      const datArray = date.split("-");
      const months = [
        "Janeiro",
        "Feveriro",
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
      const day = datArray[2];
      const monthStr = months[datArray[1] - 1];
      const year = datArray[0];
      const newDate = `${day} de ${monthStr}, ${year}`;
      return newDate;
    },
    toggleFav() {
      this.isFav = !this.isFav;
    },
  },
};
</script>

<style></style>
