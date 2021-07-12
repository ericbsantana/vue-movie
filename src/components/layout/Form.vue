<template>
  <form>
    <div class="modal" :class="{ 'is-active': this.bought }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <h1 class="title">Obrigado, {{ this.name }}!</h1>
        </header>
        <section class="modal-card-body has-text-centered">
          <p class="subtitle">Sua compra foi finalizada com sucesso!</p>
          <router-link to="/">
            <button
              class="button is-primary is-large has-text-centered"
              aria-label="close"
              @click="this.CLEAR_CART_ITEMS"
            >
              Voltar para a loja
            </button>
          </router-link>
        </section>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Nome completo"
          v-model="name"
          @blur="this.verifyName()"
        />
        <span class="icon is-small is-right is-primary">
          <font-awesome-icon :icon="['fas', 'user']" />
        </span>
      </div>
      <p v-show="!this.isNameValid" class="help is-danger">
        Preencha com seu nome.
      </p>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control has-icons-left">
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'id-card']" />
            </span>
            <input
              class="input"
              type="text"
              placeholder="000.000.000-00"
              v-maska="'###.###.###-##'"
              @maska="cpf = $event.target.dataset.maskRawValue"
              @blur="verifyCPF(cpf)"
            />
          </p>
          <p v-show="!this.isCPFValid" class="help is-danger">
            Insira um CPF válido.
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-right">
            <input
              class="input"
              type="tel"
              placeholder="(99) 9 9999-9999"
              v-maska="['(##) # ####-####', '(##) ####-####']"
              @maska="cellphone = $event.target.dataset.maskRawValue"
              @blur="this.verifyCellphone()"
            />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </span>
          </p>
          <p v-show="!this.isCellphoneValid" class="help is-danger">
            Insira corretamente o seu celular.
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="E-mail"
          v-model="email"
          @blur="this.verifyEmail()"
        />
        <span class="icon is-small is-right is-primary">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </span>
      </div>
      <p v-show="!this.isEmailValid" class="help is-danger">
        Insira corretamente o seu e-mail.
      </p>
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
                <input
                  class="input"
                  type="text"
                  placeholder="00000-000"
                  v-model="cep"
                  v-maska="'#####-###'"
                  @blur="this.verifyCEP()"
                />
              </p>
              <p v-show="!this.isCEPValid" class="help is-danger">
                Insira corretamente o seu CEP.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <p class="control has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Endereço"
              v-model="street"
              @blur="this.verifyAddress()"
            />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'home']" />
            </span>
          </p>
          <p v-show="!this.isAddressValid" class="help is-danger">
            Insira corretamente o endereço.
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Cidade"
              v-model="city"
              @blur="this.verifyCity()"
            />
            <span class="icon is-small is-left is-primary">
              <font-awesome-icon :icon="['fas', 'city']" />
            </span>
          </p>
          <p v-show="!this.isCityValid" class="help is-danger">
            Insira corretamente a sua cidade.
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Estado"
              v-model="state"
              @blur="this.verifyState()"
            />
            <span class="icon is-small is-right is-primary">
              <font-awesome-icon :icon="['fas', 'map']" />
            </span>
          </p>
          <p v-show="!this.isStateValid" class="help is-danger">
            Insira corretamente o seu estado.
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { validate } from "gerador-validador-cpf";
import { mapMutations } from "vuex";

const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default {
  name: "Form",
  data() {
    return {
      name: null,
      cep: null,
      cpf: null,
      state: null,
      city: null,
      cellphone: null,
      street: null,
      email: null,
      isNameValid: true,
      isCEPValid: true,
      isStateValid: true,
      isCityValid: true,
      isEmailValid: true,
      isAddressValid: true,
      isCPFValid: true,
      isCellphoneValid: true,
      bought: false,
    };
  },

  methods: {
    ...mapMutations(["CLEAR_CART_ITEMS"]),

    validateForm() {
      if (
        this.isNameValid &&
        this.isCEPValid &&
        this.isStateValid &&
        this.isCityValid &&
        this.isEmailValid &&
        this.isAddressValid &&
        this.isCPFValid &&
        this.isCellphoneValid &&
        this.city != "" &&
        this.name != "" &&
        this.cpf != "" &&
        this.cellphone != "" &&
        this.state != "" &&
        this.street != "" &&
        this.email != ""
      ) {
        this.bought = true;
      }
    },

    verifyName() {
      if (this.name == "") {
        this.isNameValid = false;
      } else {
        this.isNameValid = true;
      }
    },
    verifyState() {
      if (this.state == "") {
        this.isStateValid = false;
      } else {
        this.isStateValid = true;
      }
    },
    verifyCity() {
      if (this.city == "") {
        this.isCityValid = false;
      } else {
        this.isCityValid = true;
      }
    },
    verifyEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isEmailValid = re.test(String(this.email).toLowerCase());

      //source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    },

    verifyAddress() {
      if (this.street == "") {
        this.isAddressValid = false;
      } else {
        this.isAddressValid = true;
      }
    },

    verifyCPF() {
      this.isCPFValid = validate(this.cpf);
    },
    //source: https://github.com/tiagoporto/gerador-validador-cpf/

    verifyCellphone() {
      if (this.cellphone.length > 9) {
        this.isCellphoneValid = true;
      } else {
        this.isCellphoneValid = false;
      }
    },
    async verifyCEP() {
      if (this.cep != null) {
        try {
          const response = await cepAPI.get(
            `${this.cep.replace("-", "")}/json/`
          );
          console.log(response);
          if (response.data.erro) {
            this.isCEPValid = false;
            return;
          }

          this.street = response.data.logradouro;
          this.city = response.data.localidade;
          this.state = response.data.uf;
          this.isCEPValid = true;
          this.isAddressValid = true;
          this.verifyAddress();
          this.verifyState();
          this.verifyCity();
        } catch (error) {
          this.isAddressValid = false;
          console.error(error);
        }
      }
    },
  },
};
</script>

<style></style>
