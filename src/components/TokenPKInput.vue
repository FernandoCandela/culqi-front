<template>
  <div>
    <h2>Ingrese el Token Bearer</h2>
    <div class="mb-3">
      <label for="bearerToken">Token de acceso (Bearer)</label>
      <input v-model="bearerToken" type="text" class="form-control" id="bearerToken" required>
    </div>
    <button @click="setToken" class="btn btn-primary">Guardar Token</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      bearerToken: '',
    };
  },
  methods: {
    ...mapMutations(['setBearerToken']),
    setToken() {
      this.setBearerToken(this.bearerToken);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
