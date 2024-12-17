<script setup>
import { inject } from 'vue';

const increment = inject('increment');
</script>

<template>
  <button @click="increment">+1</button>
</template>