<script setup>
import { ref, provide } from 'vue';
import IncrementButton from './IncrementButton.vue';
import DecrementButton from './DecrementButton.vue';

/* Creamos el contador reactivo */
const contador = ref(0);

/* Creamos una fucion flecha incremento */
const increment = () => {
  contador.value++;
};

/* Lo mismo para decremento */
const decrement = () => {
  contador.value--;
};

/* Permitimos la comunicacion de variables y funciones con provide */
provide('contador', contador);
provide('increment', increment);
provide('decrement', decrement);
</script>

<template>
  <!-- Mostramos toda la info, llamando a los hijos -->
  <div>
    <h1>Comptador</h1>
    <IncrementButton />
    <DecrementButton />
    <p>El valor del comptador es: {{contador }}</p>
  </div>
</template>