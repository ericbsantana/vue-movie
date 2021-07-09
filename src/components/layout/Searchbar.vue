<template>
  <div class="field has-addons">
    <div class="control has-icons-right" :class="{ 'is-loading': isLoading }">
      <input
        class="input is-medium is-primary"
        type="text"
        placeholder="Pesquisar filme ou gênero..."
        v-model="this.query"
        @keyup.enter="searchMovie(query)"
      />
      <a class="icon is-small is-right is-primary">
        <font-awesome-icon :icon="['fas', 'search']" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Searchbar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchMovie"]),
  },
  computes: {
    ...mapGetters(["isLoading"]),
  },
};
</script>

<style></style>
