<template>
  <div class="container mt-4">
    <h2>Ingrese los datos de la tarjeta</h2>
    <form @submit.prevent="enviarDatos">
      <div class="mb-3">
        <label for="cardNumber">Número de tarjeta</label>
        <input v-model="cardNumber" type="text" class="form-control" maxlength="16" id="cardNumber" required>
      </div>

      <div class="mb-3">
        <label for="cvv">CVV</label>
        <input v-model="cvv" type="text" class="form-control" id="cvv" maxlength="4" required>
      </div>

      <div class="mb-3">
        <label for="expirationMonth">Mes de vencimiento</label>
        <input v-model="expirationMonth" type="text" class="form-control" id="expirationMonth" required>
      </div>

      <div class="mb-3">
        <label for="expirationYear">Año de vencimiento</label>
        <input v-model="expirationYear" type="text" class="form-control" id="expirationYear" required>
      </div>

      <div class="mb-3">
        <label for="email">Correo electrónico</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
      </div>

      <!-- Agrega otros campos del formulario según sea necesario -->

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <div v-if="token" class="mt-4">
      <h3>Token valido por 15 min:</h3>
      <p>{{ token }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: '',
      email: '',
      token: null,
    };
  },
  methods: {
    enviarDatos() {
      const bearerToken = this.$store.state.bearerToken;
      const headers = {
        Authorization: `Bearer ${bearerToken}`,
      };

      axios.post('http://localhost:3000/tokens', {
        cardNumber: this.cardNumber,
        cvv: this.cvv,
        expirationMonth: this.expirationMonth,
        expirationYear: this.expirationYear,
        email: this.email,
      }, { headers })
          .then(response => {
            console.log('Respuesta del servidor:', response.data)
            this.token = response.data;
          })
          .catch(error => {
            console.error('Error al enviar datos:', error);
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
