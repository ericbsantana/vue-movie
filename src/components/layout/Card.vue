<template>
  <div class="column is-one-quarter">
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
              class="card-date is-size-7-desktop tag is-primary mt-2"
              :class="{ hide: this.hide }"
              datetime="date"
            >
              <p
                class="is-small pr-2"
                @mouseover="this.dateHover = true"
                @mouseleave="this.dateHover = false"
              >
                <font-awesome-icon :icon="['far', 'calendar']" />
              </p>
              <p>
                {{ getDate(date) }}
              </p>
            </div>
            <a
              @click="toggleFav"
              class="fav-button is-small p-1"
              :class="{ 'is-fav': this.isFav }"
            >
              <font-awesome-icon :icon="['fas', 'heart']" size="2x" class="" />
            </a>
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
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["name", "imgUrl", "genre", "date", "score"],
  data() {
    return {
      genres: {},
      price: 9.99,
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
