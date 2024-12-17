<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  productId: Number,
  productes: Array
});

const producte = computed(() => {
  return props.productes.find(producte => producte.id === props.productId);
});
</script>

<template>
  <div v-if="producte">
    <h2>{{ producte.nom }}</h2>
    <p>{{ producte.descripció }}</p>
  </div>
  <div v-else>
    <p>Producte no trobat</p>
  </div>
</template>