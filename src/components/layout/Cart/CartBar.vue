<template>
  <div class="sidebar">
    <CartList />
  </div>
</template>

<script>
import CartList from "./CartList.vue";

export default {
  name: "CartBar",
  components: { CartList },
};
</script>

<style></style>
