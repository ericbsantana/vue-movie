<template>
  <section class="section">
    <div class="container">
      <div class="notification is-info is-light has-text-centered	">
        <p class="title">Loading, please wait...</p>
        <br />
        <FontAwesomeIcon :icon="faSpinner" />
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Loading",
  data() {
    return { faSpinner: faSpinner };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style></style>
