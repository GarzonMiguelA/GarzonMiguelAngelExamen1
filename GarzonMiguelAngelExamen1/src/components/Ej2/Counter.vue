<script setup>
import { ref, provide } from 'vue';
import IncrementButton from './IncrementButton.vue';
import DecrementButton from './DecrementButton.vue';

const contador = ref(0);

const increment = () => {
  contador.value++;
};

const decrement = () => {
  contador.value--;
};

provide('contador', contador);
provide('increment', increment);
provide('decrement', decrement);
</script>

<template>
  <div>
    <h1>Comptador</h1>
    <IncrementButton />
    <DecrementButton />
    <p>El valor del comptador es: {{contador }}</p>
  </div>
</template>