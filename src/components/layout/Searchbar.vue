<template>
  <div class="field has-addons">
    <div class="control has-icons-right">
      <input
        class="input is-medium is-primary is-loading"
        :class="{
          'is-loading': loading,
        }"
        type="text"
        placeholder="Pesquisar filme..."
        v-model="msg"
        @keyup.enter="search()"
      />

      <a class="icon is-small is-right is-primary">
        <font-awesome-icon :icon="['fas', 'search']" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Searchbar",

  computed: {
    ...mapGetters(["loading"]),
    ...mapGetters(["query"]),

    msg: {
      get() {
        return this.query;
      },
      set(value) {
        this.SET_QUERY(value);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_QUERY"]),

    search() {
      if (this.query) {
        this.$router.push({
          path: "/search",
          query: { q: this.query.trim().toLowerCase() },
        });
      }
    },
  },
};
</script>

<style></style>
