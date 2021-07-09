<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered ">
        <div class="column is-three-quarters ">
          <section v-if="latestReleases" class="hero">
            <div class="hero-body">
              <p class="title">
                Em breve
              </p>
              <p class="subtitle">
                Confira aqui os próximos lançamentos do cinema
              </p>
            </div>
          </section>
          <div class="columns is-multiline">
            <div class="column is-full">
              <p v-if="isLoading" class="is-size-3">
                <Loading />
              </p>
              <p v-if="a" class="is-size-3">
                Resultado da sua pesquisa:
              </p>
            </div>
            <transition-group name="fade">
              <Card
                class="column is-3"
                v-for="result in movies"
                :key="result.id"
                :name="result.title"
                :genre="result.genre_ids"
                :imgUrl="result.poster_path"
                :score="result.vote_average"
                :date="result.release_date"
              />
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./layout/Card.vue";
import Loading from "./layout/Loading.vue";
import { mapGetters } from "vuex";

export default {
  name: "Movies",
  components: {
    Card,
    Loading,
  },

  computed: {
    ...mapGetters(["movies"]),
    ...mapGetters(["isLoading"]),
    ...mapGetters(["isFetch"]),
  },

  created() {},
};
</script>

<style></style>
