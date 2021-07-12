<template>
  <form>
    <div class="field">
      <div class="control has-icons-right">
        <input class="input" type="text" placeholder="Nome completo" />
        <span class="icon is-small is-right is-primary">
          <font-awesome-icon :icon="['fas', 'user']" />
        </span>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control has-icons-left">
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'id-card']" />
            </span>
            <input class="input" type="text" placeholder="000.000.000-00" />
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="(99) 9 9999-9999" />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-right">
        <input class="input" type="email" placeholder="E-mail" value="" />
        <span class="icon is-small is-right is-primary">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <div class="columns mb-0">
      <div class="column is-two-fifths">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <span class="icon is-small is-right is-primary">
                  <font-awesome-icon :icon="['fas', 'map-pin']" />
                </span>
                <input class="input" type="text" placeholder="CEP" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="Endereço" />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'home']" />
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Cidade" />
            <span class="icon is-small is-left is-primary">
              <font-awesome-icon :icon="['fas', 'city']" />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="Estado" />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'map']" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  components: {},
  methods: {
    validateForm() {},
  },
};
</script>

<style></style>
