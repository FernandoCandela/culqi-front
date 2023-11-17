<!-- TokenForm.vue -->
<template>
  <div class="card-form-container">
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="enviarToken">
      <div class="mb-3">
        <label for="token">Token</label>
        <input v-model="token" type="text" class="form-control" id="token" required>
      </div>

      <!-- Agrega otros campos del formulario según sea necesario -->

      <button type="submit" class="btn btn-primary">Consultar</button>
    </form>

    <div v-if="responseData" class="mt-4">
      <h3>Infomracion Recibida:</h3>
      <textarea v-model="responseData" class="form-control" rows="5"></textarea>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  props: {
    formTitle: {
      type: String,
      default: 'Ingrese un token',
    },
  },
  data() {
    return {
      token: '',
      responseData: null,
    };
  },
  methods: {
    enviarToken() {

      const bearerToken = this.$store.state.bearerToken;
      const headers = {
        Authorization: `Bearer ${bearerToken}`,
      };

      axios.post('http://localhost:3000/charges ', {token: this.token}, {headers})
          .then(response => {
            this.responseData = JSON.stringify(response.data, null, 2);
          })
          .catch(error => {
            console.error('Error al enviar token:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.response.data.error,
            });
          });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
