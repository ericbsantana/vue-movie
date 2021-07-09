<template>
  <Sidebar />
  <Content />
</template>

<script>
import Sidebar from "./layout/Sidebar.vue";
import Content from "./layout/Content.vue";
import { mapGetters } from "vuex";

export default {
  computers: {
    ...mapGetters["isLoading"],
  },

  name: "Home",
  components: {
    Content,
    Sidebar,
  },
};
</script>

<style></style>
