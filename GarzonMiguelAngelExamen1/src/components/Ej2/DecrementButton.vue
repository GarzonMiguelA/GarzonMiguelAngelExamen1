<script setup>
import { inject } from 'vue';

const decrement = inject('decrement');
</script>

<template>
  <button @click="decrement">Restar</button>
</template>