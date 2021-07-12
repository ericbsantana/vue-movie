<template>
  <div class="sidebar">
    <FavoriteList />
  </div>
</template>

<script>
import FavoriteList from "./FavoriteList.vue";

export default {
  name: "Sidebar",
  components: { FavoriteList },
};
</script>

<style></style>
