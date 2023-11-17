<template>
  <div id="app">
    <div class="d-flex flex-column align-items-center">

      <div class="row border p-4">
        <TokenPKInput formTitle="Formulario 1"/>
      </div>
      <div class="row border my-3 p-4 col-12">
        <div class="col-6">
          <CardForm formTitle="Formulario 1"/>
        </div>
        <div class="col-6">
          <ChargeForm formTitle="Consultar Token"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CardForm from '../src/components/CardForm.vue';
import ChargeForm from "./components/ChargeForm.vue";
import TokenPKInput from "./components/TokenPKInput.vue";

import 'bootstrap/dist/css/bootstrap.min.css';

window.apiUrl = 'http://localhost:3000';
export default {
  components: {
    ChargeForm,
    CardForm,
    TokenPKInput,
  },
};
</script>

<style>
/* Estilos específicos de la vista principal si es necesario */
</style>
