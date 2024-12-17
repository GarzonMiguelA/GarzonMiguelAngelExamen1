<script setup>
import { ref, provide } from 'vue';
import IncrementButton from './IncrementButton.vue';
import DecrementButton from './DecrementButton.vue';

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

provide('counter', counter);
provide('increment', increment);
provide('decrement', decrement);
</script>

<template>
  <div>
    <h1>Comptador</h1>
    <IncrementButton />
    <DecrementButton />
    <p>El valor del comptador es: {{counter }}</p>
  </div>
</template>