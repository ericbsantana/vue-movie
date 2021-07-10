<template>
  <div class="field has-addons">
    <div class="control has-icons-right" :class="{ 'is-loading': isLoading }">
      <input
        class="input is-medium is-primary"
        type="text"
        placeholder="Pesquisar filme ou gênero..."
        v-model="updateStr"
        @keyup.enter="search()"
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
    return { updateStr: "" };
  },

  methods: {
    search() {
      if (this.updateStr) {
        this.$router.push({
          path: "/search",
          query: { q: this.updateStr.trim().toLowerCase() },
        });
      }
    },
  },
};
</script>

<style></style>
