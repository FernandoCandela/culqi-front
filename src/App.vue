<template>
  <div id="app">
    <div class="d-flex flex-column align-items-center">
      <!-- Componente para ingresar el token -->
      <TokenPKInput formTitle="Formulario 1"/>

      <!-- Formulario CardForm 1 -->
      <CardForm formTitle="Formulario 1"/>

      <!-- Espacio entre los formularios -->
      <div style="height: 20px;"></div>

      <!-- Espacio entre CardForm y TokenForm -->
      <div style="height: 20px;"></div>

      <!-- Formulario TokenForm -->
      <ChargeForm formTitle="Consultar Token"/>
    </div>
  </div>
</template>

<script>
import CardForm from '../src/components/CardForm.vue';
import ChargeForm from "./components/ChargeForm.vue";
import TokenPKInput from "./components/TokenPKInput.vue";

import 'bootstrap/dist/css/bootstrap.min.css';

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
