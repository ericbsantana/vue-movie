<template>
  <form>
    <div class="field has-addons">
      <div class="control has-icons-right" :class="{ 'is-loading': isLoading }">
        <input
          class="input is-medium is-primary"
          type="text"
          placeholder="Pesquisar filme ou gênero..."
          v-model="searchinput"
        />
        <a class="icon is-small is-right is-primary">
          <font-awesome-icon :icon="['fas', 'search']" />
        </a>
      </div>
      <button class="button is-medium is-primary is-inverted" type="submit">
        Pesquisar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Searchbar",
};
</script>

<style></style>
