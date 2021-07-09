<template>
  <Sidebar />
  <Content />
</template>

<script>
import Sidebar from "./layout/Sidebar.vue";
import Content from "./layout/Content.vue";

export default {
  name: "Movies",
  components: {
    Content,
    Sidebar,
  },
};
</script>

<style></style>
