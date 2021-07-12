<template>
  <section class="section">
    <div class="container">
      <div class="notification is-primary is-light has-text-centered	">
        <p class="subtitle">Carregando... Aguarde, por favor</p>
        <br />
        <FontAwesomeIcon :icon="faSpinner" spin />
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
