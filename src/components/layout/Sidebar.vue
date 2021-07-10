<template>
  <div class="menu sidebar">
    <p class="menu-label">
      Meus favoritos
    </p>
    <ul class="menu-list">
      <li v-for="favorites of this.favorites" :key="favorites">
        <a>{{ favorites }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",

  computed: {
    ...mapGetters(["favorites"]),
  },
};
</script>

<style></style>
