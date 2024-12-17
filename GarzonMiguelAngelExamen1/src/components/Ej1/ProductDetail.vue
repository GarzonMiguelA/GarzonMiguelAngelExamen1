<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  productId: parseInt,
  productes: Array
});

//Recibimos el array de productos como prop
/* const props = defineProps({
  products:{
    type:Array,
    required: true,
  } 
}) */
const producte = computed(() => {
  return props.productes.find(producte => producte.id === props.productId);
});
</script>

<template>
  <h4>Detall de la descripció</h4>
  <p>ID: {{ producte.id }}</p>
  <p>Nom del producte: {{ producte.nom }}</p>
  <p>Descripció: {{ producte.descripció }}</p>
</template>