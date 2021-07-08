<template>
  <div class="field has-addons">
    <div class="control has-icons-right">
      <input
        class="input is-medium is-primary"
        type="text"
        placeholder="Pesquisar filme ou gênero..."
        v-model="this.query"
        @keyup.enter="searchMovie(this.query)"
      />
      <a class="icon is-small is-right is-primary">
        <font-awesome-icon :icon="['fas', 'search']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovie(query) {
      this.$emit("searchQuery", query);
    },
  },
};
</script>

<style></style>
